<div class="order" data-order-id="{{ detail.order.orderid }}" data-order-no="{{ detail.order.orderno }}" data-money="{{ parseFloat(detail.order.ordermoney).toFixed(2) }}">
	{% set orderStatus = {orderStatus:detail.order.orderstatus,payStatus:detail.order.paystatus,sendFlag:detail.order.sendflag,receiveFlag:detail.order.receiveflag,pointFlag:detail.order.pointflag,revokeStatus:detail.order.revokestatus} %}
	<div class="order-status">订单状态：{{ orderStatus | orderStatus2name }}</div>
	<div class="order-store">
		{% set photo = {notEditable : true, url:detail.shop.shopimg} %}
		{% widget '_common:widget/common/photo/photo.tpl' %}
		<div class="tlt">{{ detail.shop.shopname }}</div>
		<div class="rank-wrap">{% widget '_common:widget/common/level/level.tpl' %}</div>
		<a href="/store/{{ detail.shop.id }}" class="url btn btn-white btn-w135 btn-h70 fs-4">进入店铺</a>
	</div>
	<div class="order-auction mt20">
		{% for product in detail.list %}
			<div class="order-item">
				<a href="/auction/detail/{{ product.orderitemid }}" class="line2">
					<div class="order-img">
						<img src="./icon/demo.png"/>
					</div>
					<div class="order-content">
						<p>{{ product.proname }}</p>
						<p>￥{{ parseFloat(product.price).toFixed(2) }}</p>
						<p>X{{ product.count }}</p>
					</div>
				</a>
			</div>
		{% endfor %}
	</div>
	<div class="order-price">
		<p class="p-1">运　费：￥{{ detail.order.sendmoney }}</p>
		{#<p class="p-1">运费险：￥0.8</p>#}
		<p class="p-2">实付款：<b>￥{{ detail.order.ordermoney }}</b></p>
	</div>
	<div class="order-info mt20">
		<div class="tlt">
			<span class="fl">订单编号</span>
			<span class="fr">{{ detail.order.orderno }}</span>
		</div>
		<div class="content">
			<p>发货时间：{% if detail.order.sendtime %}{{ detail.order.sendtime | date('Y-m-d H:i:s', -480, 'CCT') }}{% endif %}</p>
			<p>确认时间：{% if detail.order.receivetime %}{{ detail.order.receivetime | date('Y-m-d H:i:s', -480, 'CCT') }}{% endif %}</p>
		</div>
	</div>
	<div class="order-info mt20">
		<div class="tlt">
			<span class="fl">收货信息</span>
			{#<a class="fc-2 fr">修改地址</a>#}
		</div>
		<div class="content">
			<p>姓名：{{ detail.address.username }}</p>
			<p>电话：{{ detail.address.telphone }}</p>
			<p>地址：{#{{ detail.address.province }}{{ detail.address.city }}#}{{ detail.address.address }}</p>
		</div>
	</div>
</div>