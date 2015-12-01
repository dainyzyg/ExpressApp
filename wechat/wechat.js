/**
 * Created by ad on 2015/11/10.
 */
var db = global.db;
var mongodb = require('mongodb');
function wechat(req, res, next) {
    // 微信输入信息都在req.weixin上
    var message = req.weixin;
    //res.reply(JSON.stringify(message));
    console.log('hehe');
    //if (message.FromUserName === 'diaosi') {
    //    // 回复屌丝(普通回复)
    //    res.reply('hehe');
    //} else if (message.FromUserName === 'text') {
    //    //你也可以这样回复text类型的信息
    //    res.reply({
    //        content: 'text object',
    //        type: 'text'
    //    });
    //} else if (message.FromUserName === 'hehe') {
    //    // 回复一段音乐
    //    res.reply({
    //        type: "music",
    //        content: {
    //            title: "来段音乐吧",
    //            description: "一无所有",
    //            musicUrl: "http://mp3.com/xx.mp3",
    //            hqMusicUrl: "http://mp3.com/xx.mp3",
    //            thumbMediaId: "thisThumbMediaId"
    //        }
    //    });
    //} else {
    //    console.log('sss');
    //    // 回复高富帅(图文回复)
    //    res.reply([
    //        {
    //            title: '你来我家接我吧',
    //            description: '这是女神与高富帅之间的对话',
    //            picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
    //            url: 'http://115.159.122.62/helloworld.html'
    //        }
    //    ]);
    //}
    var Exam = db.collection('Exam');
    Exam.findOne({StdID:message.Content},function (err, docs) {
        res.reply(JSON.stringify(docs));
    });

}


module.exports = wechat;