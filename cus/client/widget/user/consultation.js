/**
 * @author pulang.
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		this.event();
	},
	//用户咨询
	consult: function () {
		var content = $('#content').val();
		//修改个人信息
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/user/consultion',
			data: {
				content: content,
				shopid:'1111',
				touserid:'2'
			},
			success: function (data) {
				if (0 == data.status) {
					var html = [];
					html.push('<div class="consultation-sTime">12:02</div>');
					html.push('<div class="consultation-li other clearfix">');
					html.push('<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="" class="img fl ml20">');
					html.push('<div class="info">'+content+'</div>');
					html.push('</div>');
					$('.page>.content>.consultation-ul').append(html.join(''));
					$('.consultation-ul').scrollTop($('.consultation-ul').height());
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
		$(".page>.footer").on('click','#btn-send',this.consult.bind(this));
	}
};
