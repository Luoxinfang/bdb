/**
 * Created by chenzhenhua on 2015/12/22.
 */

var B = require('_common:js/bdb/core.js');
var Cash = require('_common:js/bdb/cash.js');
module.exports = {
	init: function () {
		this.event();
	},
	showDetail: function (e) {
		var item = $(e.currentTarget);
		var html = [];
		html.push('<div class="dialog-wrap"');
		html.push('	<div class="dialog-mask closeDialog"></div>');
		html.push('	<div class="dialog">');
		html.push('		<div class="dialog-hd">账单</div>');
		html.push('		<div class="dialog-bd">');
		html.push('			<div class="clearfix">');
		html.push('				<span class="fl">时间</span>');
		html.push('				<span class="fr">2015-10-27</span>');
		html.push('			</div>');
		html.push('			<div class="clearfix">');
		html.push('				<span class="fl">类型</span>');
		html.push('				<span class="fr">提现</span>');
		html.push('			</div>');
		html.push('			<div class="clearfix">');
		html.push('				<span class="fl">金额</span>');
		html.push('				<span class="fr">￥10</span>');
		html.push('			</div>');
		html.push('			<div class="clearfix">');
		html.push('				<span class="fl">流水号</span>');
		html.push('				<span class="fr">2102155201120</span>');
		html.push('			</div>');
		html.push('			<div class="clearfix">');
		html.push('				<span class="fl">资金流向</span>');
		html.push('				<span class="fr">XXX银行卡</span>');
		html.push('			</div>');
		html.push('		</div>');
		html.push('	</div>');
		html.push('</div>');
		html.join('');
		$('.page>.content').append(html).show();
	},
	event: function () {
		$('.page>.content').on('click', '.trans-list .trans-item', this.showDetail.bind(this));
	}
}
