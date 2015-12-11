/**
 * Created by ad on 2015/12/3.
 */

var data = [
    {
        name: '菜单ssssss1',
        children: [
            {
                name: '子菜单1',
                url: 'ejs/usermanagement'
            },
            {
                name: '子菜单2',
                url: 'css3test.html'
            }
        ]
    },
    {
        name: '菜单2',
        url: 'toolbar.html'
    }
];
module.exports = function (req) {
    return new Promise(function (resolve, reject) {
        var rdata = {
            menu: data,
            title: 'hei'
        };
        resolve(rdata);
    });
}

