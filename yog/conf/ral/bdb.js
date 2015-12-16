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
		retry: 2,
		timeout: 500,
		server: [
			{host: '192.168.0.105', port: 8080}/*,
			{host: '192.168.0.133', port: 8080},
			{host: '192.168.0.131', port: 8080}*/
		]
	}
};