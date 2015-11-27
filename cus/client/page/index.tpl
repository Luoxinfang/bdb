{% extends '_common/page/_layout.tpl' %}

{% block head %}
	{% require "_common:widget/header/header.css" %}
	<style>body{background-color:#666;}</style>
{% endblock %}

{% block body %}
<div style="height: 0.9375rem; padding: 0.234375rem 0; border-bottom: 2px solid transparent; background-color: rgba(0,0,0,.2);"></div>
{% widget '_common:widget/header/header-top.tpl' %}
{% widget '_common:widget/header/header.tpl' %}

{% endblock %}