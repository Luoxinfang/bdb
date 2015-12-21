{% extends '_common:page/layout.tpl' %}
{% block head %}
	{% require '_common:less/public/form.less' %}
{% endblock %}
{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}
{% block content %}
	{% widget '_common:widget/wallet/bank/index.tpl' %}
{% endblock %}