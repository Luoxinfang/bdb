/**
 * Created by chenzhenhua on 2015/12/22.
 */

var B = require('_common:js/bdb/core.js');
var Cash = require('_common:js/bdb/cash.js');
module.exports = {
	init: function () {
		require('_common:widget/common/header/header-sort.js').init();
		B.bindInput();
		this.event();
	},
	showDetail: function (e) {
		var item = $(e.currentTarget);
		var html = [];
		html.push('<div class="dialog-wrap trans-dialog" style="display:block;">');
		html.push('	<div class="dialog-mask closeDialog"></div>');
		html.push('	<div class="dialog">');
		html.push('		<div class="dialog-hd">账单</div>');
		html.push('		<div class="dialog-bd">');
		html.push('			<div class="clearfix">');
		html.push('				<span class="fl">时间</span>');
		html.push('				<span class="fr">' + item.data('time') + '</span>');
		html.push('			</div>');
		html.push('			<div class="clearfix">');
		html.push('				<span class="fl">类型</span>');
		html.push('				<span class="fr">' + item.data('typeName') + '</span>');
		html.push('			</div>');
		html.push('			<div class="clearfix">');
		html.push('				<span class="fl">金额</span>');
		html.push('				<span class="fr">￥' + item.data('money') + '</span>');
		html.push('			</div>');
		html.push('			<div class="clearfix">');
		html.push('				<span class="fl">流水号</span>');
		html.push('				<span class="fr">' + item.data('transNo') + '</span>');
		html.push('			</div>');
		html.push('		</div>');
		html.push('	</div>');
		html.push('</div>');
		$('.page>.content').append(html.join(''));
	},
	jump: function (e) {
		var url = '/wallet/trans-list?';
		var bTime = $('.trans-time input[name="bTime"]').val() + ' 00:00:00';
		var eTime = $('.trans-time input[name="eTime"]').val() + ' 23:59:59';
		location.href = url + 'bTime=' + bTime + '&eTime=' + eTime;
	},
	event: function () {
		$('.page>.content').on('click', '.trans-list .trans-item', this.showDetail.bind(this));
		$('.trans-time').on('change', 'input[name="bTime"]', this.jump.bind(this));
		$('.trans-time').on('change', 'input[name="eTime"]', this.jump.bind(this));
	}
}
