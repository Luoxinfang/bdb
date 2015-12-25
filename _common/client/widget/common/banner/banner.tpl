<!--
  banner ui 组件
  @author radish
  @require '_common:js/plugin/swiper/swiper.less'
-->
<div class="swiper-container banner">
	<div class="swiper-wrapper img">
		{% for item in banner %}
			<div class="swiper-slide">
				<a class="li" style="background-image: url('{{ item.imgUrl }}');"></a>
			</div>
		{% endfor %}
	</div>
	<div class="swiper-pagination nav"></div>
</div>
{% script %}
	var Swiper = require('_common:js/plugin/swiper/swiper.js');
	new Swiper('.swiper-container', {
		autoplay: 5000,
		pagination: '.swiper-pagination'
	});
{% endscript %}
