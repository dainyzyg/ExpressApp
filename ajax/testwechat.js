/**
 * Created by ad on 2015/11/10.
 */
var db = global.db;
var WechatAPI = require('wechat-api');
exports.run = function (req, res) {


    var api = new WechatAPI('wx20931ec2ce5bd5f6', 'd4624c36b6795d1d99dcf0547af5443d')
    var weichatMenu = {
        "button": [
            {
                "name": "我的账号",
                "sub_button": [
                    {
                        "type": "click",
                        "name": "我的帐户",
                        "key": "V1001_MY_ACCOUNT"
                    },
                    {
                        "type": "click",
                        "name": "已投项目",
                        "key": "V1002_BID_PROJECTS"
                    },
                    {
                        "type": "click",
                        "name": "回款计划",
                        "key": "V1003_RETURN_PLAN"
                    },
                    {
                        "type": "click",
                        "name": "交易明细",
                        "key": "V1004_TRANS_DETAIL"
                    },
                    {
                        "type": "click",
                        "name": "注册/绑定",
                        "key": "V1005_REGISTER_BIND"
                    }
                ]
            },
            {
                "type": "view",
                "name": "马上投资",
                "url": "http://www.baidu.com"
            },
            {
                "name": "送钱活动",
                "sub_button": [
                    {
                        "type": "view",
                        "name": "注册送红包",
                        "url": "http://115.159.122.62/helloworld.html"
                    },
                    {
                        "type": "click",
                        "name": "邀请好友一起赚钱",
                        "key": "V1001_GOOD"
                    },
                    {
                        "type": "view",
                        "name": "加入我们",
                        "url": "http://qiaole.sinaapp.com/"
                    },
                    {
                        "type": "view",
                        "name": "APP下载",
                        "url": "http://qiaole.sinaapp.com/"
                    }
                ]
            }
        ]
    };

    api.createMenu(weichatMenu, function (err, result) {
        console.log(JSON.stringify(err));
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
    });
};