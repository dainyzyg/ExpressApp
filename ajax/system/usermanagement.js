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
        var id = JSON.stringify(req.body.id);
        var user = db.collection('user');
        var objectId=global.ObjectID.createFromHexString(id);

        user.remove({_id:objectId}, function (err, docs) {
            if (err) {

            }
            else {


            }

        });
    }
}
exports.run = function (req, res) {
    var action = req.body.action;
    actionFunc[action](req, res);
}
