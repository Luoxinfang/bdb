<!--
  banner ui 组件
  @author radish
  @require '_common:js/plugin/swiper/swiper.less'
-->
<div class="swiper-container">
	<div class="swiper-wrapper">
		{% for item in banner.images %}
			<div class="swiper-slide">
				<a class="li" style="background-image: url('{{ item }}');"></a>
			</div>
		{% endfor %}
	</div>
	{% if banner.showNav != false %}
	<div class="swiper-pagination nav"></div>
	{% endif %}
</div>
{%require "_common:js/plugin/swiper/swiper.jquery.js"%}
{% script %}
	$(function(){
		new Swiper('.swiper-container', {
		autoplay: 5000,
		pagination: '.swiper-pagination'
		});
	});
{% endscript %}
