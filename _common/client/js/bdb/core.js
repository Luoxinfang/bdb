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
			if($('.header').size()){
				$('.body-container').append(html.join(''));
			} else {
				$('.wrapper').append(html.join(''));
			}
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
	 *  表单输入值绑定
	 */
	bindInput: function () {
		$(document).on('change', '.input-wrap select', function () {
			$(this).parent().find('[data-role="input"]').html($(this).val());
		});
		$(document).on('input propertychange', '.input-wrap input', function () {
			if ($(this).attr('type') == 'datetime-local') {
				$(this).parent().find('[data-role="input"]').html($(this).val().replace('T', ' '));
			} else {
				$(this).parent().find('[data-role="input"]').html($(this).val());
			}
		});
	},
	/**
	 * 弹出提示
	 * conf { icon:'图标', title:'标题', content:'内容' }
	 */
	alert: function (conf) {
		var html = [];
		html.push('<div class="alert-wrap">');
		html.push('  <div class="alert-mask"></div>')
		html.push('  <div class="alert">');
		if (conf.icon && conf.icon == 'success') {
			html.push('  <span class="icon-200 icon-suc"></span>');
		} else if (conf.icon && conf.icon == 'warn') {
			html.push('  <span class="icon-200 icon-warn"></span>');
		} else if (conf.icon && conf.icon == 'error') {
			html.push('  <span class="icon-200 icon-fail"></span>');
		}
		if (conf.title) {
			html.push('  <p class="alert-title">' + conf.title + '</p>');
		}
		if (conf.content) {
			html.push('  <p class="alert-content">' + conf.content + '</p>');
		}
		html.push('  </div>');
		html.push('</div>')
		$('.wrapper').append(html.join(''));
	},
	clearAlert: function () {
		$('.alert-wrap').remove();
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