{% require '_common:widget/header/header.less' %}
<div class="header-top">
	<div class="header">
		{% if header.back && !header.me %} {#是否有返回按钮，默认：有#}
			<a class="left icon-60 icon-back" {% if header.backUrl %}href="{{ header.backUrl }}"{% endif %} ></a>
		{% endif %}
		{% if header.me %} {#是否有菜单按钮，默认：无#}
			<a class="left icon-60 icon-me"></a>
		{% endif %}
		<div class="center fs-1">
			{{ header.title }}
		</div>
		{% if header.rGup1 %} {#搜索图标和消息图标#}
		<div class="right s-gup">
			<a href="/cus/auction/search" class="fl icon-60 icon-search"></a>
			<a class="fr icon-60 icon-msg"></a>
		</div>
		{% endif %}
		{% if header.rGup2 %} {#收藏图标和分享图标#}
			<div class="right s-gup">
				<a class="fl icon-60 icon-collect"></a>
				<a class="fr icon-60 icon-share"></a>
			</div>
		{% endif %}
		{#需要可以自己利用参数扩展#}
		{% if header.msg %} {#消息图标，默认：无，需要的话直接配置header.msg为true#}
			<div class="right">
				<span class="icon-60 icon-msg"></span>
			</div>
		{% endif %}
	</div>
</div>

{% script %}
	$(function(){
	require('_common:widget/header/header-top.js').init();
	})
{% endscript %}