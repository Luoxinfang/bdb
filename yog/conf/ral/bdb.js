/**
 * @description 后端服务配置
 * @author radish
 */
module.exports = {
	'BDB': {
		unpack: 'json',
		protocol: 'http',
		pack: 'querystring',
		method: 'GET',
		encoding: 'utf-8',
		balance: 'random',
		retry: 2,
		timeout: 500,
		server: [
			{host: '127.0.0.1', port: 8080}
		]
	}
};
