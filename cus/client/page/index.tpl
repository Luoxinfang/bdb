{% extends '_common/page/_layout.tpl' %}

{% block head %}
	{% require "_common:widget/header/header.css" %}
	<style>body{background-color:#666;}</style>
{% endblock %}

{% block body %}
<div class="header">
	
</div>
<div class="header-pa">
	<div class="header header-top">
		<div class="left"></div>
		<span class="fs-1">标题</span>
		<div class="right s-gup">
			<span class="fl icon-search"></span>
			<span class="fr icon-msg"></span>
		</div>
	</div>
</div>
<div class="header">
	<div class="left"></div>
	<span class="fs-1">标题</span>
	<div class="right">
		<span class="fs-2 fc-1">时间排序</span>
	</div>
</div>
<div class="header header-top">
	<div class="left"></div>
	<span class="fs-1">标题</span>
	<div class="right s-gup">
		<span class="fl icon-search"></span>
		<span class="fr icon-msg"></span>
	</div>
</div>
{% endblock %}