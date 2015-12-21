{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	{% widget 'bus:widget/shelves/list.tpl' %}
{% endblock %}

{% block footer %}
	<div class="footer">
		<a class="btn btn-red">完成</a>
	</div>
{% endblock %}