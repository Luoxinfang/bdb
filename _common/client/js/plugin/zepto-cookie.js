
/**
 * 扩展cookies
 */
;
(function($) {
	$.cookie = {
		/**
		 * 设置一个cookie
		 *
		 * @param {String}
		 *          name cookie名称
		 * @param {String}
		 *          value cookie值
		 * @param {String}
		 *          domain 所在域名 默认为window.location.host的值
		 * @param {String}
		 *          path 所在路径 默认为是"\"
		 * @param {Number}
		 *          hour 存活时间，单位:小时
		 * @return {Boolean} 是否成功
		 */
		set: function(name, value, domain, path, hour) {
			if (hour) {
				var today = new Date();
				var expire = new Date();
				expire.setTime(today.getTime() + 3600000 * hour);
			}
			document.cookie = name + "=" + value + "; " + (hour ? ("expires=" + expire.toGMTString() + "; ") : "") + (path ? ("path=" + path + "; ") : "path=/; ") + (domain ? ("domain=" + domain + ";") : ("domain=" + window.location.host + ";"));
			return true;
		},

		/**
		 * 获取指定名称的cookie值
		 *
		 * @param {String}
		 *          name cookie名称
		 * @return {String} 获取到的cookie值
		 */
		get: function(name) {
			var r = new RegExp("(?:^|;+|\\s+)" + name + "=([^;]*)");
			var m = document.cookie.match(r);
			return (!m ? "" : m[1]);
		},

		/**
		 * 删除指定cookie,复写为过期
		 *
		 * @param {String}
		 *          name cookie名称
		 * @param {String}
		 *          domain 所在域 默认为 window.location.host的值
		 * @param {String}
		 *          path 所在路径 默认为是"\"
		 */
		del: function(name, domain, path) {
			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			document.cookie = name + "=; expires=" + exp.toGMTString() + ";" + (path ? ("path=" + path + "; ") : "path=/; ") + (domain ? ("domain=" + domain + ";") : ("domain=" + window.location.host + ";"));
		}
	}
})(Zepto)