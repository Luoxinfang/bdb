/**
 * @description 百多宝基础类库
 *
 */

module.exports = {
	/**
	 *
	 */
	topTips: function (opt) {
		var $dom = $('#top-tip'),iconName = 'warn';
		if ($dom.length) {
			$dom.show();
		}else{
			var html = [];
			html.push('<div id="top-tip" class="top-tip">');
			html.push('<div class="top-tip-wrapper">')
			html.push('<span class="top-tip-icon"></span>');
			html.push('<span class="top-tip-content"></span>');
			html.push('</div></div>')
			$('.wrapper').append(html.join(''));
			$dom = $('#top-tip');
		}
		$dom.find('.top-tip-icon')[0].className = 'top-tip-icon '+ iconName;
		$dom.find('.top-tip-content').html(opt.content);
	},
	topWarn: function (content) {
		this.topTips({
			type: 'warn',
			content: content
		});
	},
	hideTopTips: function () {
		$('#top-tip').hide();
	}
};