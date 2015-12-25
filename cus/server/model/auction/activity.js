
var server = yog.require('_common/lib/server.js');
var serverId = server.getServerId();

module.exports = {
	//获取活动的数据
	getData: function (data) {
    data = server.parserQuery(data);
		return yog.ral(serverId, {
      method: 'get',
			path: '/interface/auction/***',
			query: data
		});
	}
};