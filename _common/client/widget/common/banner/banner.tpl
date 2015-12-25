<!--
  banner ui 组件
  @author radish
  @require '_common:js/plugin/swiper/swiper.less'
-->
<div class="swiper-container banner">
	<div class="swiper-wrapper img">
		{% for item in banner.images %}
			<div class="swiper-slide">
				<a class="li" style="background-image: url('{{ item.imgUrl }}');"></a>
			</div>
		{% endfor %}
	</div>
	{% if banner.showNav != false %}
	<div class="swiper-pagination nav"></div>
	{% endif %}
</div>
{%require "_common:js/plugin/swiper/swiper.jquery.js"%}
{% script %}
	new Swiper('.swiper-container', {
		autoplay: 5000,
		pagination: '.swiper-pagination'
	});
{% endscript %}
