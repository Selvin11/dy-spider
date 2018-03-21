const axios = require("axios");

axios.defaults.baseURL = "http://aweme.snssdk.com";

let Util = {
    getUserFollowerCount(requestData) {
        // * follower_count=13755975 抖音关注数
        // * mplatform_followers_count=14167890 总平台关注数
        let userId, follower, username;
        // todo
        return { userId, username, follower };
    },
    getUidList(requestData) {
        // 获取粉丝列表，用于遍历

        return [];
    }
};

module.exports = {
    /**
     * 获取用户主页信息，去个人主页，抓包获取相关参数
     * @param {*} uid，用户id
     * @param {*} params，有 sign 验证和过期时间设置，需设置更新策略
     */
    getUserInfo(uid, params = {}) {
        let url = "/aweme/v1/user";
        params.user_id = uid;

        return axios.get(url, { params }).then(res => {
            return Util.getUserFollowerCount(res);
        });
    },
    /**
     *
     * @param {*} uid
     * @param {*} params
     */
    getFollowerList(uid, params = {}) {
        let url = "/aweme/v1/user/follower/list";
        params.user_id = uid;

        return axios.get(url, { params }).then(res => {
            return Util.getUidList(res);
        });
    }
};
