<div class="order-item" data-order-id="{{ order.orderid }}" data-order-no="{{ order.orderno }}" data-money="{{ parseFloat(order.ordermoney).toFixed(2) }}">
	<a href="/order/detail/{{ order.orderno }}">
		<div class="line1">
			<span>成交日期 {{ order.createtime | date('Y-m-d', -480, 'CCT') }}</span>
	    <span>
		    {% set orderStatus = {orderStatus:order.orderstatus,payStatus:order.paystatus,sendFlag:order.sendflag,receiveFlag:order.receiveflag,pointFlag:order.pointflag,revokeStatus:order.revokestatus} %}
		    {{ orderStatus | orderStatus2name }}
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
	{% if '等待买家付款' == orderStatus | orderStatus2name %}
		<div class="line3">
			<a class="btn btn-red payOrder">付款</a>
		</div>
	{% elseif '等待卖家发货' == orderStatus | orderStatus2name %}
		<div class="line3">
			<a class="btn btn-white remindDeliver">提醒发货</a>
		</div>
	{% elseif '卖家已发货' == orderStatus | orderStatus2name %}
		<div class="line3">
			<a class="btn btn-white confirmReceive">确认收货</a>
			<a class="btn btn-white mr20 delayReceive">延迟收货</a>
		</div>
	{% elseif '待评价' == orderStatus | orderStatus2name %}
		<div class="line3">
			<a href="/order/comment/{{ order.orderno }}" class="btn btn-white">去评价</a>
		</div>
	{% elseif '已评价' == orderStatus | orderStatus2name %}
	{% elseif '等待退款' == orderStatus | orderStatus2name %}
	{% elseif '平台介入中' == orderStatus | orderStatus2name %}
		<div class="line3">
			<a href="/order/detail/{{ order.orderno }}" class="btn btn-white">举证</a>
		</div>
	{% elseif '卖家拒绝退货' == orderStatus | orderStatus2name %}
		<div class="line3">
			<a href="/order/detail/{{ order.orderno }}" class="btn btn-red">申请仲裁</a>
		</div>
	{% else %}
	{% endif %}
</div>