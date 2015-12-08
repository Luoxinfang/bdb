{% require '_common:widget/order/order.less' %}
<div class="order-item">
	<div class="line1">
		<span>成交日期{{ item.date }}</span>
      <span>
        {% if item.status == 'dfh' %}
          待发货
        {% elseif item.status == 'dsh' %}
          待收货
        {% elseif item.status == 'dfk' %}
          待付款
        {% elseif item.status == 'yfh' %}
          已发货
        {% elseif item.status == 'tkz' %}
          退款中
        {% elseif item.status == 'dpj' %}
		      待评价
	      {% endif %}
      </span>
		<a href="/order/detail?status={{ item.status }}">订单详情</a>
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
		{% if item.status == 'dfh' && data.form == 'bus' %}
		<a class="btn btn-red btn-w135 btn-h70 fs-3">确定发货</a>
		{% endif %}
		{% if item.status == 'dfh' && data.form == 'cus' %}
		<a class="btn btn-red btn-w135 btn-h70 fs-3">提醒发货</a>
		{% endif %}
		{% if item.status == 'dfk' && data.form == 'bus' %}
		<a class="btn btn-white btn-w135 btn-h70 fs-3">提醒买家付款</a>
		{% endif %}
		{% if item.status == 'dfk' && data.form == 'cus' %}
		<a class="btn btn-red btn-w135 btn-h70 fs-3">确定付款</a>
		{% endif %}
		{% if item.status == 'yfh' %}
			<a class="btn btn-white btn-w135 btn-h70 fs-3">延迟收货</a>
		{% endif %}
		{% if item.status == 'tkz' %}
			<a class="btn btn-red btn-w135 btn-h70 fs-3">确定退款</a>
		{% endif %}
		{% if item.status == 'dsh' %}
			<a class="btn btn-white btn-w135 btn-h70 fs-3">确定收货</a>
		{% endif %}
		{% if item.status == 'dpj' %}
			<a class="btn btn-red btn-w135 btn-h70 fs-3">去评论</a>
		{% endif %}
		{% if item.status == 'ywc' %}
			<a class="btn btn-white btn-w135 btn-h70 fs-3">申请售后</a>
		{% endif %}
	</div>
</div>