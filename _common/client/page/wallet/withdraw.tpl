{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block body %}
	{% widget '_common:widget/wallet/withdraw.tpl' %}
{% endblock %}