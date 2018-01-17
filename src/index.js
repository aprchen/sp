'use strict';
import { log } from 'util';

const parser = require('./parser.js');
const request = require('./request.js');
const fs = require('fs');
let t = Date.now();
//let html = request.getEl("http://guofeng.yuedu.163.com/book_reader/ts_520094e47a4e4fdb8b93d8889bd67e38_4/bc12916d599342b3a04e24f3f66e0732_4/");
let html = request.getEl("http://guofeng.yuedu.163.com/source/ts_520094e47a4e4fdb8b93d8889bd67e38_4/");
html.then(res => {
    log("html 获取成功,写入中.. \n");
    fs.appendFile('book.txt', res, 'utf-8', function (err) {
        if (err) throw err;
        else console.log('html写入成功')
        t = Date.now() - t;
        console.log('Loading time ' + t + ' msec');
    });
}).catch(error => {
    log(error);
});
