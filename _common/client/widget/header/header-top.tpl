{% require '_common:widget/header/header.css' %}
<div class="header header-top">
	{% if headerBack && !headerMe %} {#是否有返回按钮，默认：有#}
		<div class="left icon-60 icon-back"></div>
	{% endif %}
	{% if headerMe %} {#是否有菜单按钮，默认：无#}
		<div class="left icon-60 icon-me"></div>
	{% endif %}
	<span class="fs-1">
		{{ headerTitle }}
	</span>
	{% if headerRGup1 %} {#搜索图标和消息图标#}
	<div class="right s-gup">
		<span class="fl icon-60 icon-search"></span>
		<span class="fr icon-60 icon-msg"></span>
	</div>
	{% endif %}
	{% if headerRGup2 %} {#收藏图标和分享图标#}
		<div class="right s-gup">
			<span class="fl icon-60 icon-collect"></span>
			<span class="fr icon-60 icon-share"></span>
		</div>
	{% endif %}
</div>