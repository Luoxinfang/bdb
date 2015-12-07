{% extends '_common:page/_layout.tpl' %}

{% block header %}
	{% widget '_common:widget/header/header.tpl' %}
	{% require '_common:widget/order/order.less' %}
	<div class="order-status">订单状态：待支付</div>
{% endblock %}

{% block body %}
	<div class="order-store">
		{% widget '_common:widget/user/user-photo.tpl' %}
		<div class="tlt">翡翠世家</div>
		<div class="rank-wrap">{% widget '_common:widget/common/rank.tpl' %}</div>
		<a href="/cus/store" class="url btn btn-white btn-inline">进入店铺</a>
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
{% require '_common:widget/footer/footer.less' %}
<div class="footer">
	<a class="btn btn-red btn-inline btn-lg fr">付款</a>
</div>
{% endblock %}