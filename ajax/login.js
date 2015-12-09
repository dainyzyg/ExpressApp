/**
 * Created by Baggio on 2015/12/7.
 */
var db = global.db;
exports.run = function (req, res) {
    var username = req.body.userName;
    var password = req.body.userPwd;
    var user = db.collection('user');
    var resobject = {
        success: false,
        errormessage: ''
    };
    user.findOne({username: username}, function (err, doc) {
        if (doc) {
            if (doc.userpwd == password) {
                resobject.success = true
            }
            else
            {
                resobject.success=false;
                resobject.errormessage='密码错误！';
            }

        }
        else
        {
            resobject.success=false;
            resobject.errormessage='用户名不存在！';
        }
        res.send(JSON.stringify(resobject));

    });
}

