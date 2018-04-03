'use strict';

var fs = require('fs')
var ejs = require('ejs');
var path = require('path');
var log = require('hexo-log')({
    debug: false,
    silent: false
});


module.exports = function(locals){
    var config = this.config;
    var json = fs.readFileSync(path.join(process.cwd(),config.portfolio.file));
    var items = JSON.parse(json).items;
    var ejsFile = path.join(__dirname, '/templates/works.ejs');
    var contents = ejs.renderFile(ejsFile, {'data':items},function (err, result) {
        if (err) console.log(err);
        return result;
    });

    return {
        path: 'works/index.html',
        data: {
            title: config.portfolio.title,
            content: contents,
            slug: 'works'
        },
        layout: ['page','post']
    };
};

