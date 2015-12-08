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
		<a href="/store" class="url btn btn-white btn-w135 btn-h70">进入店铺</a>
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
	<a class="btn btn-red btn-w135 btn-h70 fr showDialog" dialog="payWay">付款</a>
</div>
{% widget '_common:widget/dialog/dialog.tpl' %}
<div class="dialog-wrap order-pay" id="payWay">
	<div class="dialog-mask"></div>
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
	<div class="dialog-mask"></div>
	<div class="dialog pb10">
		<div class="dialog-close closeDialog"></div>
		<div class="dialog-hd">确认付款</div>
		<div class="dialog-bd">
			<div class="price">￥1500.00</div>
			{% widget '_common:widget/password/password.tpl' %}
			<div class="password-wrap">
				<div class="word"></div>
				<div class="word"></div>
				<div class="word"></div>
				<div class="word"></div>
				<div class="word"></div>
				<div class="word"></div>
				<input type="number" class="password" >
			</div>
			<div class="tip">请输入支付密码</div>
		</div>
	</div>
</div>
{% endblock %}