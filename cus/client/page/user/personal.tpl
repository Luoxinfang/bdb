{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header-top.tpl' %}
{% endblock %}

{% block body %}
	{% widget 'cus:widget/user/personal.tpl' %}
{% endblock %}