{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	{% widget 'bus:widget/shelves/add.tpl' %}
{% endblock %}