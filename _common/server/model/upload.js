/*session model*/

var server = require('../lib/server.js');
var serverId = server.getServerId();

module.exports = {
	//上传图片
	upload: function (data) {
		return yog.ral(serverId, {
			path: '/interface/file/baseupload',
			data: data
		});
	}
};
