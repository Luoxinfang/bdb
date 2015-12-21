{% extends '_common:page/layout.tpl' %}

{% block head %}
	{% require "_common:less/public/form.less" %}
	{% require "cus:widget/wallet/index/index.less" %}
{% endblock %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	{% widget '_common:widget/wallet/index.tpl' %}
{% endblock %}