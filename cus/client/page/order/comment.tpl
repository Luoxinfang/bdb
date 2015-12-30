{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	{% require '_common:widget/order/order.less' %}
	<div class="order" data-order-no="{{ detail.order.orderno }}">
		{% widget 'cus:widget/order/comment.tpl' %}
	</div>
	{% script %}
		require('cus:widget/order/comment.js').init();
	{% endscript %}
{% endblock %}