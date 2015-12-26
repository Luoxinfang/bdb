{% extends '_common:page/layout.tpl' %}
{% block head %}

{% endblock %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
	{% widget '_common:widget/common/header/header-tab.tpl' %}
{% endblock %}

{% block content %}
	<div id="content">
		{% widget '_common:widget/order/list.tpl' %}
	</div>
{% endblock %}