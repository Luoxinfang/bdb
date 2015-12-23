/**
 * Created by chenzhenhua on 2015/12/22.
 */

var B = require('_common:js/bdb/core.js');
var Cash = require('_common:js/bdb/cash.js');
module.exports = {
	init: function () {
		require('_common:widget/common/header/header-filter.js').init();
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
		var bTime = $('.trans-time input[name="bTime"]').val();
		var eTime = $('.trans-time input[name="eTime"]').val();
		var tradeType = $('.header .filter span').data('filter');
		if (bTime != '') {
			url = url + 'bTime=' + bTime + ' 00:00:00&';
		} else {
			url = url + 'bTime=&';
		}
		if (eTime != '') {
			url = url + 'eTime=' + eTime + ' 23:59:59&';
		} else {
			url = url + 'eTime=&';
		}
		if ('undefined' != typeof tradeType) {
			url = url + 'tradeType=' + tradeType + '&';
		}
		if ('&' == url.substr(url.length - 1, 1)) {
			url = url.substr(0, url.length - 1);
		}
		location.href = url;
	},
	filter: function (e) {
		var $this = $(e.currentTarget);
		$('.header .filter span').text($this.text());
		$('.header .filter span').data('filter', $this.data('filter'));
		this.jump();
	},
	dropLoad: function (){
		var dropload = $('.page>.content').dropload({
			domUp : {
				domClass   : 'dropload-up',
				domRefresh : '<div class="dropload-refresh">↓下拉刷新</div>',
				domUpdate  : '<div class="dropload-update">↑释放更新</div>',
				domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>'
			},
			domDown : {
				domClass   : 'dropload-down',
				domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
				domUpdate  : '<div class="dropload-update">↓释放加载</div>',
				domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>'
			},
			loadUpFn: function (me) {
				setTimeout(function () {
					$('.trans-list').html('');
					$('.trans-list').append('新内容');
					me.resetload();
				}, 1000);
			},
			loadDownFn: function (me) {
				setTimeout(function () {
					$('.trans-list').append('新加载');
					me.resetload();
				}, 1000);
			}
		});
	},
	event: function () {
		$('.page>.content').on('click', '.trans-list .trans-item', this.showDetail.bind(this));
		$('.trans-time').on('change', 'input[name="bTime"]', this.jump.bind(this));
		$('.trans-time').on('change', 'input[name="eTime"]', this.jump.bind(this));
		$('.header').on('click', '.filter-list a', this.filter.bind(this));
		this.dropLoad();
	}
}
