{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	{% widget 'cus:widget/user/update-info.tpl' %}
	{% script %}
	require("cus:widget/user/update-info.js").init();
	{% endscript %}
{% endblock %}