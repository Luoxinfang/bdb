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
			<span class="fl icon-60 icon-search"></span>
			<span class="fr icon-60 icon-msg"></span>
		</div>
		{% endif %}
		{% if header.rGup2 %} {#收藏图标和分享图标#}
			<div class="right s-gup">
				<span class="fl icon-60 icon-collect"></span>
				<span class="fr icon-60 icon-share"></span>
			</div>
		{% endif %}
	</div>
</div>

{% script %}
	$(function(){
	require('_common:widget/header/header-top.js').init();
	})
{% endscript %}