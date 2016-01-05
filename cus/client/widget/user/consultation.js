/**
 * @author pulang.
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		/*$(function () {
			$('.consultation-ul').scrollTop($('.consultation-ul').height());
		});*/
		this.$chatList = $('#chat-list');
		this.shopid = this.$chatList.data('shopid');
		this.userid = this.$chatList.data('userid');
		this.touserid = this.$chatList.data('touserid');
		this.pageSize = 10;//默认页大小
		this.pageNum = 1;//默认页码
		this.total = this.$chatList.data('total');;
		this.bindScroll();
		this.event();
	},
	//补位 当某个字段不是两位数时补0
	fnW: function (str) {
		var num;
		str > 10 ? num = str : num = "0" + str;
		return num;
	},
	//绑定聊天列表的滑动
	bindScroll: function () {
		var that = this;
		$('.consultation-ul').dropload({
			loadUpFn: function (me) {
				that.pageNum = that.pageNum + 1;
				that.getConsultList.bind(that)('append', me);
			},
			loadDownFn: function (me) {
				console.log('--------------------------');
				that.pageNum = 1;
				that.getConsultList.bind(that)('refresh', me);
			}
		});
	},
	//获取聊天列表
	getConsultList: function (type, dropLoad) {
		var that = this;
		$.ajax({
			type: 'get',
			dataType: 'html',
			url: '/user/consultation',
			data: {
				type: 'page',
				userid:that.userid,
				shopid:that.shopid,
				page: that.pageNum,
				pageSize: that.pageSize
			},
			success: function (html) {
				if (type === 'append') {
					that.$chatList.prepend(html);
					var maxPage = Math.ceil(that.total / that.pageSize);
					if (that.pageNum >= maxPage) {
						dropLoad.lock();
						dropLoad.noData();
					}
				} else {
					that.total = +that.$chatList.data('total')
							|| that.pageSize;
					that.$chatList.html(html);
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
	},
	//用户咨询
	consult: function () {
		var that = this;
		var myDate = new Date();
		var hours = myDate.getHours();//小时
		var minute = myDate.getMinutes();//分
		var time = "" + this.fnW(hours) + ":" + this.fnW(minute);
		var content = $('#content').val();
		//发送信息
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/_common/consultation',
			data: {
				content: content,
				shopid: that.shopid
			},
			success: function (data) {
				if (0 == data.status) {
					$('#content').val('');
					var html = [];
					html.push('<div class="consultation-sTime">' + time + '</div>');
					html.push('<div class="consultation-li self clearfix">');
					html.push('   <img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="" class="img fr ml20">');
					html.push('   <div class="info">' + content + '</div>');
					html.push('</div>');
					$('.page>.content>.consultation-ul').append(html.join(''));
				} else {
					var msg = data.msg || '服务器异常，请稍后再试';
					B.topWarn(msg);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				B.topWarn('服务器异常，请稍后再试');
			}
		});
	},
	event: function () {
		$(".page>.footer").on('click', '#btn-send', this.consult.bind(this));
	}
};
