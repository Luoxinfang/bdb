/**
 * @description
 */
var md5 = require('md5');
var _ = require('lodash');
module.exports = {
  //把数据转换成后台需要的数据格式
  parserQuery: function (data, service) {
    var sign = '1234567890!@#$%^&*';
    data = _.mapKeys(data, function (v, k) {
      return k.toLowerCase();
    });
    var dataString = JSON.stringify(data);
    var temp = {
      partnerId: 'bdbvip',
      time: '0',
      version: '1.0',
      service: service
    };
    //生成加密串
    var key = md5(dataString + temp.partnerId +
        service + temp.time + temp.version + sign);
    //将所有的key转成小写
    temp = _.mapKeys(temp, function (v, k) {
      return k.toLowerCase();
    });
    var string = 'data=' + dataString;
    temp.key = key;
    _.map(temp, function (v, k) {
      string += '&' + k + '=' + v;
    });
    return string;
  },
  //把数据转换成后台需要的数据格式
  parserData: function (data, service) {
    var obj = {}, sign = '1234567890!@#$%^&*', key = '';
    data = _.mapKeys(data, function (v, k) {
      return k.toLowerCase();
    });
    obj = {
      partnerId: 'bdbvip',
      time: '0',
      version: '1.0',
      service: service,
      data: JSON.stringify(data)
    };
    //生成加密串
    key = md5(JSON.stringify(data) + obj.partnerId + service +
        obj.time + obj.version + sign);
    //将所有的key转成小写
    obj = _.mapKeys(obj, function (v, k) {
      return k.toLowerCase();
    });
    obj.key = key;
    return obj;
  },
  //获取serverId
  getServerId: function () {
    return 'BDB';
  }
};