{% extends '_common:page/layout.tpl' %}

{% block head %}
	<link rel="stylesheet" href="../../less/session/login.less?__inline"/>
{% endblock %}

{% block content %}
	<div class="container" id="container">
		<div class="logo"></div>
		<div class="slogan">百多宝 好多宝</div>
		<div class="login-wrap">
			{% widget '_common:widget/session/login/login.tpl' %}
		</div>
		<div class="login-other">
			<a href="/login-wx">通过微信登录></a>
		</div>
		{% block login %}{% endblock %}
	</div>
{% endblock %}
