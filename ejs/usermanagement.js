/**
 * Created by Baggio on 2015/12/8.
 */
var db = global.db;
var user = db.collection('user');
module.exports = function (req) {
    return new Promise(function (resolve, reject) {
        user.find({}).toArray(function (err, docs) {
            var rdata = {
                userlist: docs,
                querystr: req.query.querystr
            };
            resolve(rdata);
        });
    });

}
