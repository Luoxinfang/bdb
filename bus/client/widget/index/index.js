/**
 * @author pulang.
 */
var B = require('_common:js/bdb/core.js');

module.exports = {
	init: function () {
		$(function () {
			var mySwiper = new Swiper('.swiper-container', {
				/*autoplay: 5000,*///可选选项，自动滑动
				pagination: '.swiper-pagination'
			})
		});
	},
};
