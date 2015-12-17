{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
	{% require '_common:widget/order/order.less' %}
	{% if order.status == 'dzf' %}
		<div class="order-status">订单状态：待支付</div>
	{% elseif order.status == 'dfh' %}
		<div class="order-status">订单状态：待发货</div>
	{% elseif order.status == 'dsh' %}
		<div class="order-status">订单状态：待收货</div>
	{% elseif order.status == 'ywc' %}
		<div class="order-status">订单状态：交易完成</div>
	{% elseif order.status == 'dpj' %}
		<div class="order-status">订单状态：待评价</div>
	{% elseif order.status == 'tkz' %}
		<div class="order-status">订单状态：申请退货</div>
	{% endif %}
{% endblock %}

{% block body %}
	<div class="order-store">
		{% widget '_common:widget/user/user-photo.tpl' %}
		<div class="tlt">翡翠世家</div>
		<div class="rank-wrap">{% widget '_common:widget/common/rank.tpl' %}</div>
		<a href="/store" class="url btn btn-white btn-w135 btn-h70 fs-4">进入店铺</a>
	</div>
	<div class="order-auction mt20">
		<div class="order-item">
			<div class="line2">
				<div class="order-img">
					<img src="/static/_common/widget/order/icon/demo.png"/>
				</div>
				<div class="order-content">
					<p>蓝宝石耳钉</p>
					<p>￥8800.00</p>
					<p>X1</p>
				</div>
			</div>
		</div>
		<div class="order-item">
			<div class="line2">
				<div class="order-img">
					<img src="/static/_common/widget/order/icon/demo.png"/>
				</div>
				<div class="order-content">
					<p>满绿翡翠吊坠</p>
					<p>￥48000.00</p>
					<p>X1</p>
				</div>
			</div>
		</div>
	</div>
	<div class="order-price">
		<p class="p-1">运　费：￥12</p>
		<p class="p-1">运费险：￥0.8</p>
		<p class="p-2">实付款：<b>￥48000.00</b></p>
	</div>
	<div class="order-info mt20">
		<div class="tlt">
			<span class="fl">订单编号</span>
			<span class="fr">65235122452665634</span>
		</div>
		<div class="content">
			<p>发货时间：</p>
			<p>确认时间：</p>
		</div>
	</div>
	<div class="order-info mt20">
		<div class="tlt">
			<span class="fl">收货信息</span>
			<a class="fc-2 fr">修改地址</a>
		</div>
		<div class="content">
			<p>姓名：老刘</p>
			<p>电话：18645754541</p>
			<p>地址：广东省深圳市福田区XXXX</p>
		</div>
	</div>
{% endblock %}

{% block footer %}
<div class="footer">
	{% if order.status == 'dfk' %}
		<a class="btn btn-red btn-w135 btn-h70 fs-4 fr showDialog" dialog="payWay">付款</a>
	{% elseif order.status == 'dfh' %}
		<a href="/order/result?status=applyRefundSuccess" class="btn btn-white btn-w135 btn-h70 fs-4 fr">整单退款</a>
		<a class="btn btn-white btn-w135 btn-h70 fs-4 fr mr20">提醒发货</a>
	{% elseif order.status == 'dsh' %}
		<a href="/order/result?status=confirmReceipt" class="btn btn-red btn-w135 btn-h70 fs-4 fr">确认收货</a>
		<a class="btn btn-white btn-w135 btn-h70 fs-4 fr mr20">延迟收货</a>
		<a href="/order/result?status=applyRefundSuccess" class="btn btn-white btn-w135 btn-h70 fs-4 fr mr20">整单退款</a>
	{% elseif order.status == 'dpj' %}
		<a href="/order/comment" class="btn btn-red btn-w135 btn-h70 fs-4 fr">去评论</a>
	{% elseif order.status == 'ywc' %}
		<a href="/order/comment" class="btn btn-white btn-w135 btn-h70 fs-4 fr">申请售后</a>
	{% endif %}
</div>
{% widget '_common:widget/dialog/dialog.tpl' %}
<div class="dialog-wrap order-pay" id="payWay">
	<div class="dialog-mask closeDialog"></div>
	<div class="dialog pb0">
		<div class="dialog-hd">选择支付方式</div>
		<div class="dialog-bd">
			<label for="way-1" class="way">
				<span>使用零钱支付</span>
				<input type="radio" name="payWay" id="way-1" checked>
				<i class="icon-40 icon-radio"></i>
			</label>
			<label for="way-2" class="way">
				<span>使用支付宝支付</span>
				<input type="radio" name="payWay" id="way-2">
				<i class="icon-40 icon-radio"></i>
			</label>
			<label for="way-3" class="way">
				<span>使用网银支付</span>
				<input type="radio" name="payWay" id="way-3">
				<i class="icon-40 icon-radio"></i>
			</label>
			<a class="sure showDialog closeDialog" dialog="pay">确定</a>
		</div>
	</div>
</div>
<div class="dialog-wrap order-pay" id="pay">
	<div class="dialog-mask closeDialog"></div>
	<div class="dialog pb10">
		<div class="dialog-close closeDialog"></div>
		<div class="dialog-hd">确认付款</div>
		<div class="dialog-bd">
			<div class="price">￥1500.00</div>
			{% widget '_common:widget/common/password/password.tpl' %}
			<div class="password-wrap">
				<div class="word"></div>
				<div class="word"></div>
				<div class="word"></div>
				<div class="word"></div>
				<div class="word"></div>
				<div class="word"></div>
				<input type="number" class="password" >
			</div>
			<div class="tip"><a href="/order/result?status=paySuccess" class="fc-i">请输入支付密码</a></div>
		</div>
	</div>
</div>
{% endblock %}