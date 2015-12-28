{% require '_common:widget/order/order.less' %}
<div class="order-item">
	<a href="/order/detail/{{ order.orderno }}">
		<div class="line1">
			<span>成交日期 {{ order.createtime | date('Y-m-d', -480, 'CCT') }}</span>
	    <span>
		    {% set orderstatus = order.orderstatus+order.paystatus+order.sendflag+order.receiveflag+order.pointflag %}
		    {{ orderStatus[orderstatus] }}
	    </span>
			<span class="sr">订单详情</span>
		</div>
		{% for product in order.itemlist %}
		<div class="line2">
			<div class="order-img">
				<img src="icon/demo.png"/>
			</div>
			<div class="order-content">
				<p>{{ product.proname }}</p>
				<p>￥{{ parseFloat(product.price).toFixed(2) }}</p>
				<p>X{{ product.count }}</p>
				<p>实付款：<span class="fc-1">￥{{ parseFloat(product.itemmoney).toFixed(2) }}</span></p>
			</div>
			<div class="order-small-icon">
				<span class="icon-22 icon-free-post"></span>
				<span class="icon-22 icon-7days"></span>
			</div>
		</div>
		{% endfor %}
	</a>
	<div class="line3">
		{% if '00000' == orderstatus %}
			<a class="btn btn-red btn-w135 btn-h70 fs-3">确认付款</a>
		{% elseif '01000' == orderstatus %}
			<a class="btn btn-white btn-w135 btn-h70 fs-3">提醒发货</a>
			<a class="btn btn-white btn-w135 btn-h70 fs-3 mr20">整单退款</a>
		{% elseif '01100' == orderstatus %}
			<a class="btn btn-red btn-w135 btn-h70 fs-3">确认收货</a>
			<a class="btn btn-white btn-w135 btn-h70 fs-3 mr20">延迟收货</a>
			<a class="btn btn-white btn-w135 btn-h70 fs-3 mr20">整单退款</a>
		{% elseif '11110' == orderstatus %}
			<a class="btn btn-red btn-w135 btn-h70 fs-3">去评论</a>
		{% elseif '11111' == orderstatus %}
			<a class="btn btn-white btn-w135 btn-h70 fs-3">申请售后</a>
		{% else %}
		{% endif %}
		{#{% if item.status == 'dfh' && data.form == 'bus' %}
			<a href="/order/detail?status={{ item.status }}" class="btn btn-red btn-w135 btn-h70 fs-3">确定发货</a>
		{% endif %}
		{% if item.status == 'dfh' && data.form == 'cus' %}
			<a href="/order/detail?status={{ item.status }}" class="btn btn-red btn-w135 btn-h70 fs-3">提醒发货</a>
		{% endif %}
		{% if item.status == 'dfk' && data.form == 'bus' %}
			<a href="/order/detail?status={{ item.status }}" class="btn btn-white btn-w135 btn-h70 fs-3">提醒买家付款</a>
		{% endif %}
		{% if item.status == 'dfk' && data.form == 'cus' %}
			<a href="/order/detail?status={{ item.status }}" class="btn btn-red btn-w135 btn-h70 fs-3">确定付款</a>
		{% endif %}
		{% if item.status == 'yfh' %}
			<a href="/order/detail?status={{ item.status }}" class="btn btn-white btn-w135 btn-h70 fs-3">延迟收货</a>
		{% endif %}
		{% if item.status == 'tkz' %}
			<a href="/order/detail?status={{ item.status }}" class="btn btn-red btn-w135 btn-h70 fs-3">确定退款</a>
		{% endif %}
		{% if item.status == 'dsh' %}
			<a href="/order/detail?status={{ item.status }}" class="btn btn-white btn-w135 btn-h70 fs-3">确定收货</a>
		{% endif %}
		{% if item.status == 'dpj' %}
			<a href="/order/detail?status={{ item.status }}" class="btn btn-red btn-w135 btn-h70 fs-3">去评论</a>
		{% endif %}
		{% if item.status == 'ywc' %}
			<a href="/order/detail?status={{ item.status }}" class="btn btn-white btn-w135 btn-h70 fs-3">申请售后</a>
		{% endif %}#}
	</div>
</div>