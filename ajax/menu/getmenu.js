/**
 * Created by ad on 2015/12/7.
 */

var db = global.db;
var mongodb = require('mongodb');
exports.run = function (req, res) {
    var objectid1 = new global.ObjectID('563c1706ad2b64a6f964dfdd');
    //var objectId2 = global.ObjectID.createFromHexString('563c1ce0396a8ed79542b423');
    var treeCol = db.collection('tree');
    treeCol.remove({_id: objectid1}, function (err, docs) {
        res.send(JSON.stringify(docs));
    });
};