'use strict';

var path = require('path');
var fs = require('fs');

String.prototype.Trim = function()
{
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.LTrim = function()
{
    return this.replace(/(^\s*)/g, "");
}
String.prototype.RTrim = function()
{
    return this.replace(/(\s*$)/g, "");
}


fs.readFile('/Users/SUNHWEI/Documents/BCtest/sar_u_rep.txt','UTF-8',function(err,data){
    if (err) {
      console.log(err);
    }
    var contentA=data.split("\r\n");
    console.log("the total line=",contentA.length);
    for (var i=0; i<contentA.length;i++) {
        // console.log("Line number= ",  contentA[i]);
        var regEx = /\s+/g;
        contentA[i] = contentA[i].replace(regEx, ' ');

        var oneLineA = contentA[i].split(" ");

        console.log(oneLineA.join(','));
        fs.writeFile("/Users/SUNHWEI/Documents/BCtest/sar_u_rep.csv", oneLineA.join(',')+'\r', {'flag': 'a'}, function (err) {
            if (err) {
                throw err;
            }


        });
    }
    //console.log(data);
});

/*
fs.open('/Users/SUNHWEI/Documents/BCtest/sar_u_rep.txt', 'r', function(err, fd) {
    if (err) {
        throw err;
    }
    console.log('open file success.');
    var buffer = new Buffer(255);
    // 读取文件
    fs.read(fd, buffer, 0, 254, 0, function(err, bytesRead, buffer) {
        if (err) {
            throw err;
        }
        // 打印出buffer中存入的数据
        console.log(bytesRead, buffer.slice(0, bytesRead).toString());

        // 关闭文件
        fs.close(fd);
    });
});
*/

