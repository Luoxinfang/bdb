{% require '_common:widget/order/order.less' %}
<div class="order-list">
    {% for item in data.dataList %}
        {% widget '_common:widget/order/order-item.tpl' %}
    {% endfor %}
</div>