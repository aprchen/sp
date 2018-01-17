import { log } from 'util';
const cheerio = require('cheerio');
const fs = require('fs');

export function bookHandle(html) {
  let $ = cheerio.load(html); //dom 操作组件
  let identify = $('#identify > div');//书籍详情dom
  let name = $('#identify > div >h3').contents().not('span').text().trim(); //书籍名称
  let description = $('#identify > div > div.description.j-desc').contents().not('a').text().trim();//书籍介绍
  let chapters = $('#page-163-com > div.g-doc > div.g-bdw.g-bdw-1 > div > div.g-mn > div.m-directory.m-directory-bookdetail > div > ul.f-cb').children().length;
  // .each(function(i,el){
  //   log(el)
  // });
  
}

function chapter(){
  
}

function detial(){

}

// export function handleDB(html) {
//   let $ = cheerio.load(html); //dom 操作组件
//   let info = $('#info');
//   // 获取电影名
//   let movieName = $('#content>h1>span').filter(function (i, el) {
//     return $(this).attr('property') === 'v:itemreviewed';
//   }).text();
//   // 获取影片导演名
//   let directories = '- 导演：' + $('#info span a').filter(function (i, el) {
//     return $(this).attr('rel') === 'v:directedBy';
//   }).text();
//   // 获取影片演员
//   let starsName = '- 主演：';
//   $('.actor .attrs a').each(function (i, elem) {
//     starsName += $(this).text() + '/';
//   });
//   // 获取片长
//   let runTime = '- 片长：' + $('#info span').filter(function (i, el) {
//     return $(this).attr('property') === 'v:runtime';
//   }).text();
//   // 获取影片类型  
//   let kind = $('#info span').filter(function (i, el) {
//     return $(this).attr('property') === 'v:genre'
//   }).text();
//   // 处理影片类型数据
//   let kLength = kind.length;
//   let kinds = '- 影  片类型：';
//   for (i = 0; i < kLength; i += 2) {
//     kinds += kind.slice(i, i + 2) + '/';
//   }
//   // 获取电影评分和电影评分人数
//   // 豆瓣
//   let DBScore = $('.ll.rating_num').text();
//   let DBVotes = $('a.rating_people>span').text().replace(/\B(?=(\d{3})+$)/g, ',');
//   let DB = '- 豆  瓣评分：' + DBScore + '/10' + '(' + 'from' + DBVotes + 'users' + ')';
//   // IMDBLink
//   let IMDBLink = $('#info').children().last().prev().attr('href');

//   let data = movieName + '\r\n' + directories + '\r\n' + starsName + '\r\n' + runTime + '\r\n' + kinds + '\r\n' + DB + '\r\n';
//   // 输出文件
//   fs.appendFile('dbmovie.txt', data, 'utf-8', function (err) {
//     if (err) throw err;
//     else console.log('大体信息写入成功' + '\r\n' + data)
//   });

//   let Link = request('GET', IMDBLink).getBody().toString();

//   function handleIMDB(Link) {
//     let $ = cheerio.load(Link);
//     // 获取IMDB评分
//     let IMDBScore = $('.ratingValue span').filter(function (i, el) {
//       return $(this).attr('itemprop') === 'ratingValue';
//     }).text();
//     // 获取IMDB评分人数
//     let IMDBVotes = $('.small').filter(function (i, el) {
//       return $(this).attr('itemprop') === 'ratingCount';
//     }).text();
//     // 字符串拼接
//     let IMDB = '- IMDB评分：' + IMDBScore + '/10' + '(' + 'from' + IMDBVotes + 'users' + ')' + '\r\n';
//     // 输出文件
//     fs.appendFile('dbmovie.txt', IMDB, 'utf-8', function (err) {
//       if (err) throw err;
//       else console.log('IMDB信息写入成功' + '\r\n' + IMDB)
//     });
//   }
// }