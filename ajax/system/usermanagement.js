/**
 * Created by Baggio on 2015/12/8.
 */
var db = global.db;
var resobject = {
    success: false,
    errormessage: ''
};
var actionFunc = {
    add: function (req, res) {
        var userlist = JSON.parse(req.body.userinfo);
        var user = db.collection('user');
        user.insert(userlist, function (err, docs) {
            if (err) {
                resobject.success = false;
                resobject.errormessage = err;
            }
            else {
                resobject.success = true;

            }
            res.send(JSON.stringify(resobject));
        });


    },
    delete: function (req, res) {
        var id = req.body.id;
        var user = db.collection('user');
        var objectId= new global.ObjectID(id);

        user.remove({_id:objectId}, function (err, docs) {
            if (err) {
                resobject.success = false;
                resobject.errormessage = err;
            }
            else {
                resobject.success = true;

            }
            res.send(JSON.stringify(resobject));

        });
    },
    update: function (req, res) {
        var userlist = JSON.parse(req.body.data);
        var user = db.collection('user');
        var objectId= new global.ObjectID(userlist.id);
        var personname=userlist.personname;
        var username=userlist.username;

        user.update({_id:objectId},{$set:{personname:personname,username:username}},function (err, docs) {
            if (err) {
                resobject.success = false;
                resobject.errormessage = err;
            }
            else {
                resobject.success = true;

            }
            res.send(JSON.stringify(resobject));

        });
    }
}
exports.run = function (req, res) {
    var action = req.body.action;
    actionFunc[action](req, res);
}
