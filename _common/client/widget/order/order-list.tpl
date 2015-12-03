{% require '_common:widget/order/order-list.less' %}
<div class="order-list">
    <ul>
    {% for item in data.dataList %}
        {#{{ item.date }}#}
        <li>
            <div class="line1">
                <span>成交日期{{ item.date }}</span>
                <span>{{ data.status }}</span>
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
            <div class="line3">
                <a class="btn btn-red">确定发货</a>
            </div>
        </li>
    {% endfor %}
     </ul>
</div>