/**
 * 抓取部分接口，模拟测试数据
 * 服务器环境只需要对应数据即可
 */

let Mock = require("mockjs");

let mockData = require('./_mockData')

// 用户主页
Mock.mock(/\/aweme\/v1\/user/, "get", mockData.userInfo);

// 粉丝列表
Mock.mock(/\/aweme\/v1\/user\/follower\/list/, "get", mockData.followerList);