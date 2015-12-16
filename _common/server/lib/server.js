/**
 * @description
 */
var md5 = require('md5');
var _ = require('lodash');
module.exports = {
	//把数据转换成后台需要的数据格式
	parserData: function (data, service) {
		//console.log('server->parserData,params:',data, service);
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
		//console.log('query->'+service+':',string);
		return string;
	},
	//获取serverId
	getServerId: function () {
		return 'BDB';
	}
};