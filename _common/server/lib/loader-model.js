/**
 * @description 根据配置的数据模式来加载数据
 */

var util = require('./util');
module.exports = function () {
  var callerPath = util.getCallerPath();
  var dataPath = process.env.DATA_DEBUG ? 'test' : 'model';
  //获取到相对于module的路径 如home/action/index.js
  callerPath = callerPath.replace(/\S+app\/(\S+)/g, function (str, p1) {
    return p1;
  });
  //把action 替换成对应的路径
  var modulePath = callerPath.replace('action', dataPath);
  //console.log(modulePath);
  return yog.require(modulePath);
  //上面的做法是希望直接返回model 但是modelPath的路径就要yog的module的路径 且在执行期
};