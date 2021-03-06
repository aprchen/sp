'use strict';
import { log } from 'util';


const phantom = require('phantom');
export async function getPic(url) {
    let t = Date.now();
    // const instance = await phantom.create([], {
    //     logLevel: 'debug',
    // });//创建一个实例
    const instance = await phantom.create();//创建一个实例
    log('创建实例 \n');
    const page = await instance.createPage();
    await page.on('onResourceRequested', function (requestData) {
        log(`请求中... ${requestData.url}\n`);
    });
    //设置页面参数
    let width = 1800;
    let height = 1200;
    await page.property('viewportSize', { width: `${width}`, height: `${height}` });
    log(`页面大小:  ${width} *  ${height}\n`);
    let enabled = true;
    await page.property('javascriptEnabled', { value: `${enabled}` });
    await page.property('setTimeout', { value: 5000 });

    log(`js 加载:  ${enabled} \n`);
    // const content = await page.property('content');
    // log(`内容:  ${content}`);
    //打开url，返回状态（url有转码，解决中文问题）
    const status = await page.open(encodeURI(url));
    log(`请求状态:  ${status} \n`);

    log('请求完成 \n');
    //输出页面到当前目录下
    await page.render(`${Date.now()}.png`);
    log('销毁实例 \n');
    await instance.exit();
    //返回数据

    return content;
};


export async function getEl(url) {
    const instance = await phantom.create(['--ignore-ssl-errors=yes', '--load-images=no']);//创建一个实例
    log('创建实例 \n');
    const page = await instance.createPage();
    await page.on('onResourceRequested', true, function (requestData, networkRequest) {
        log(`请求中... ${requestData.url}\n`);
        // let = regex = '/http(s)?:\/\/.+?\.css$/gi';
        // let re = new RegExp(regex, 'ig');
        // let isBlacklisted = re.test(requestData.url);
        if ((/http(s)?:\/\/.+?\.css$/gi).test(requestData.url)) {
            console.log('Skipping', requestData.url);
            request.abort();
        }
    });
    //设置页面参数
    let width = 1800;
    let height = 1200;
    await page.property('viewportSize', { width: `${width}`, height: `${height}` });
    log(`页面大小:  ${width} *  ${height}\n`);

    //WebKit/534.46 Mobile/9A405 Safari/7534.48.3
    await page.property('userAgent', "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) Gecko/20100101 Firefox/53.0");
    //打开url，返回状态（url有转码，解决中文问题）
    const status = await page.open(encodeURI(url));
    const content = await page.property('content');
    //输出页面到当前目录下
    await page.render(`${Date.now()}.png`);

    log(`请求状态:  ${status} \n`);
    await instance.exit();
    log('销毁实例 \n');
    return content;
}