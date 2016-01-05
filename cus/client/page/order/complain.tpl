{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	<div id="order" data-order-no="{{ detail.order.orderno }}" data-order-item-id="{{ detail.list[0].orderitemid }}" data-touser-id="{{ detail.order.touserid }}">
		{% require '_common:less/public/form.less' %}
		{% widget '_common:widget/order/complain.tpl' %}
	</div>
	{% script %}
		require('cus:widget/order/complain.js').init();
	{% endscript %}
{% endblock %}