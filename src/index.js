import { log } from 'util';

const request = require('sync-request');
const parser = require('./parser.js');
const fs = require('fs');
//const request = require('./request.js');
let baseUrl = 'http://guofeng.yuedu.163.com/';
let bookUrl = baseUrl + 'source/ts_520094e47a4e4fdb8b93d8889bd67e38_4/';

let html = request('GET', bookUrl).getBody().toString();

fs.appendFile('html.txt', html, 'utf-8', function (err) {
    if (err) throw err;
    else console.log('html写入成功' + '\r\n');
})