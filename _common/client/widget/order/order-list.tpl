{% require '_common:widget/order/order-list.less' %}
<div class="order-list">
    <ul>
    {% for item in data.dataList %}
        <li>
            <div class="line1">
                <span>成交日期{{ item.date }}</span>
                <span>
                    {% if data.status == 'dfh' %}
                        待发货
                    {% endif %}
                    {% if data.status == 'dfk' %}
                        待付款
                    {% endif %}
                    {% if data.status == 'yfh' %}
                        已发货
                    {% endif %}
                    {% if data.status == 'tkz' %}
                        退款中
                    {% endif %}
                </span>
                <a>订单详情</a>
            </div>
            <div class="line2">
                <div class="order-img">
                    <img src="icon/demo.png"/>
                </div>
                <div class="order-content">
                    <p>{{ item.name }}</p>
                    <p>￥{{ item.money }}</p>
                    <p>×{{ item.num }}</p>
                    <p>实付款:<span class="fc-1">￥{{ item.pay }}</span></p>
                </div>
                <div class="order-small-icon">
                    <span class="icon-jpmj"></span>
                    <span class="icon-qtth"></span>
                    <span class="icon-xxpf"></span>
                </div>
            </div>
            {% if data.status != 'ygb' %}
            <div class="line3">
                {% if data.status == 'dfh' %}
                    <a class="btn btn-red">确定发货</a>
                {% endif %}
                {% if data.status == 'dfk' %}
                    <a class="btn btn-white">提醒买家付款</a>
                {% endif %}
                {% if data.status == 'yfh' %}
                    <a class="btn btn-white">延迟收货</a>
                {% endif %}
                {% if data.status == 'tkz' %}
                    <a class="btn btn-red">确定退款</a>
                {% endif %}
                {% if data.status == 'ywc' %}
                    <a class="btn btn-red">评价</a>
                {% endif %}
            </div>
            {% endif %}
        </li>
    {% endfor %}
     </ul>
</div>