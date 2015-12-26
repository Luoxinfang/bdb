{% require '_common:widget/order/order.less' %}
<div class="order-list">
	{% for order in orderList %}
		{% widget '_common:widget/order/item.tpl' %}
	{% endfor %}
</div>