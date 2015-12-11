/**
 * @description 百多宝基础类库
 *
 */

module.exports = {
	/**
	 *  页面顶部提示组件
	 */
	topTips: function (opt) {
		var $dom = $('#top-tip'), iconName = 'warn';
		if ($dom.length) {
			$dom.show();
		} else {
			var html = [];
			html.push('<div id="top-tip" class="top-tip">');
			html.push('<div class="top-tip-wrapper">')
			html.push('<span class="top-tip-icon"></span>');
			html.push('<span class="top-tip-content"></span>');
			html.push('</div></div>')
			$('.wrapper').append(html.join(''));
			$dom = $('#top-tip');
		}
		$dom.find('.top-tip-icon')[0].className = 'top-tip-icon ' + iconName;
		$dom.find('.top-tip-content').html(opt.content);
	},
	topWarn: function (content, lasting) {
		this.topTips({
			type: 'warn',
			content: content
		});
		if (!lasting) {
			setTimeout(this.hideTopTips.bind(this), 3000);
		}
	},
	hideTopTips: function () {
		$('#top-tip').hide();
	},

	/**
	 * 是不是ios设备
	 */
	isIOS: function () {
		return navigator.userAgent.indexOf('iPhone') > -1
				|| navigator.userAgent.indexOf('iPad') > -1;
	},
	/**
	 * 是不是android设备
	 */
	isAndroid: function () {
		return navigator.userAgent.indexOf('Android') > -1
				|| navigator.userAgent.indexOf('Linux') > -1;
	}
};