{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	<div id="content">
		{% require '_common:less/public/form.less' %}
		{% widget '_common:widget/order/complain.tpl' %}
	</div>
	{% script %}
		require('cus:widget/order/complain.js').init();
	{% endscript %}
{% endblock %}