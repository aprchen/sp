import { log } from 'util';


const parser = require('./parser.js');
const request = require('./request.js');
let baseUrl = 'http://guofeng.yuedu.163.com/';
let bookUrl = baseUrl + 'source/ts_520094e47a4e4fdb8b93d8889bd67e38_4/';

request.getPic("http://www.baidu.com/")
// let html = '';
// html = request('GET', bookUrl).getBody().toString();
// if (html) console.log("get html success");
// parser.bookHandle(html);
