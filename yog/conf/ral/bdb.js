/**
 * @description 后端服务配置
 * @author radish
 */
module.exports = {
	'BDB': {
		unpack: 'json',
		protocol: 'http',
		pack: 'querystring',
		method: 'POST',
		encoding: 'utf-8',
		balance: 'random',
		retry: 0,
		timeout: 5000,
		server: [
			//{host: '192.168.0.105', port: 8080}
			//{host: '192.168.0.129', port: 8080},  //王天文
			//{host: '192.168.0.131', port: 8080}  //王勇
			{host: '192.168.0.110', port: 8080}  //周少飞
		]
	}
};