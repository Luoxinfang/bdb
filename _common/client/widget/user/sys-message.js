/**
 * @author pulang.
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.$sysInfoList = $('#sysInfo');
		this.pageSize = 10;//默认页大小
		this.pageNum = 1;//默认页码
		this.total = this.$sysInfoList.data('total');;
		this.bindScroll();
	},
	//系统消息列表的滑动
	bindScroll: function () {
		var that = this;
		$('.message-list').dropload({
			loadUpFn: function (me) {
				that.pageNum = 1;
				that.getsysInfoList.bind(that)('refresh', me);
			},
			loadDownFn: function (me) {
				that.pageNum = that.pageNum + 1;
				that.getsysInfoList.bind(that)('append', me);
			}
		});
	},
	//获取系统消息列表
	getsysInfoList: function (type, dropLoad) {
		var that = this;
		$.ajax({
			type: 'get',
			dataType: 'html',
			url: '/user/sys-message',
			data: {
				type: 'page',
				page: that.pageNum,
				pageSize: that.pageSize
			},
			success: function (html) {
				if (type === 'append') {
					that.$sysInfoList.append(html);
					var maxPage = Math.ceil(that.total / that.pageSize);
					if (that.pageNum >= maxPage) {
						dropLoad.lock();
						dropLoad.noData();
					}
				} else {
					that.total = +that.$sysInfoList.data('total')
							|| that.pageSize;
					that.$sysInfoList.html(html);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				B.topWarn(B.tips.networkError);
			},
			complete: function () {
				if (dropLoad) {
					dropLoad.resetload();
				}
			}
		});
	}
};
