/**
 * Created by ad on 2015/11/6.
 */
var db = global.db;
var mongodb = require('mongodb');
exports.run = function (req, res) {
    //mongodb.Code('print("test.js")',function (err, result, a, b) {
    //    res.send(JSON.stringify(result));
    //});
    //db.eval(function (){print("xxxxxxxxxxxxxxxxxxxxxxxxxx"); return db.tree.find().toArray();}, [], function (err, result, a, b) {
    //    res.send(JSON.stringify(result));
    //});

    db.command({
        eval: "function (a) {print(a); return db.tree.find().toArray();}",
        args:['bbbbbbbb'],
        nolock:true
    }).then( function (result) {
        res.send(JSON.stringify(result));
    });

    //var treeCol = db.collection('tree');
    //treeCol.find({}).toArray(function (err, docs) {
    //    res.send(JSON.stringify(docs));
    //});
};