const axios = require("axios");

let ApiModel = require("./api");

let defaultConfig = {
    startUserId: 6796248446, // 抖音小助手id
    leastFollowerCount: 100000 // 最小粉丝数目
};


class DYSpider {
    constructor(config) {
        this.config = config;
        this.userList = {};
    }

    start() {
        let startId = this.config.startUserId;
        ApiModel.getFollowerList(startId).then(uidList => {
            uidList.forEach(uid => {
                ApiModel.getUserInfo(uid).then(user => {
                    this.addUser(user);
                });
            });
        });
    }
    addUser(user) {
        if (
            user.follerCount > this.config.leastFollowerCount &&
            !this.userList[user.userId]
        ) {
            this.userList[user.userId] = user
        }
    }
}

// todo 