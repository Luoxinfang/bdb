{% require '_common:widget/order/order.less' %}
<div class="order">
	<div class="order-detail">
		<div class="line1">
			<span>订单状态：</span>
      <span>
        {% set orderStatus = {orderStatus:order.orderstatus,payStatus:order.paystatus,sendFlag:order.sendflag,reveiveFlag:order.receiveflag,pointFlag:order.pointflag,revokeStatus:order.revokestatus} %}
	      {{ orderStatus | orderStatus2name }}
      </span>
		</div>
		{% for item in order.product %}
		<div class="line2">
			<div class="order-img">
				<img src="icon/demo.png"/>
			</div>
			<div class="order-content">
				<p>{{ item.name }}</p>
				<p>￥{{ item.money }}</p>
				<p>×{{ item.num }}</p>
			</div>
			<div class="order-btn">
				{% if '待付款' == orderStatus | orderStatus2name && form=='bus'%}
					<a class="btn btn-white">修改价格</a>
				{% endif %}
			</div>
		</div>
		{% endfor %}
		<div class="line3  clearfix">
			<div class="line3-info fc-4 fs-3">
				<p>
					<span>运费：</span><span>￥{{ order.sendmoney }}</span>
				</p>
				<p>
					<span>运费险：</span><span>￥0.8</span>
				</p>
			</div>
			{% if data.status == 'dfk'&& data.from=='bus'%}
			<div class="line3-btn fc-4 fs-3">
				<a class="btn btn-white">修改运费</a>
			</div>
			{% endif %}
		</div>

		{#订单信息#}
		<div class="line-info fs-3 fc-4">
			<div class="line-info-div">
				<p class="title">
					<span>订单编号</span><span id="order_no" class="order_no">{{ data.orderNo }}</span>
				</p>
				<p>
					<span>成交时间：</span><span id="payTime">{{ data.dealTime }}</span>
				</p>
				<p>
					<span>付款时间：</span><span id="payTime">{{ data.payTime }}</span>
				</p>
				<p>
					<span>发货时间：</span><span id="payTime">{{ data.deliverTime }}</span>
				</p>
				<p>
					<span>确定时间：</span><span id="payTime">{{ data.confirmTime }}</span>
				</p>
			</div>
			<div class="line-info-div">
				<p class="title">
					<span>收货信息</span>
				</p>
				<p>
					<span>姓名：</span><span id="receiptName">{{ data.receiptName }}</span>
				</p>
				<p>
					<span>电话：</span><span id="receiptTel">{{ data.receiptTel }}</span>
				</p>
				<p>
					<span>地址：</span><span id="receiptAddress">{{ data.receiptAddress }}</span>
				</p>
			</div>
		</div>
	</div>
</div>