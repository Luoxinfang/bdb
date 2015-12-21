{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
	{% widget '_common:widget/common/header/header-tab.tpl' %}
{% endblock %}

{% block content %}
	{% widget 'bus:widget/shelves/list.tpl' %}
{% endblock %}

{% block footer %}
	<div class="footer-content">
		<a href="/shelves/shelve" class="btn btn-red">上架</a>
	</div>
{% endblock %}