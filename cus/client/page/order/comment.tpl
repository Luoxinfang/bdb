{% extends '_common:page/_layout.tpl' %}

{% block header %}
	{% widget '_common:widget/header/header.tpl' %}
	{% require '_common:widget/order/order.less' %}
	{% if order.status == 'dzf' %}
		<div class="order-status">订单状态：待支付</div>
	{% elseif order.status == 'dfh' %}
		<div class="order-status">订单状态：待发货</div>
	{% elseif order.status == 'dsh' %}
		<div class="order-status">订单状态：待收货</div>
	{% endif %}
{% endblock %}

{% block body %}
	<div class="order-store">
		{% widget '_common:widget/user/user-photo.tpl' %}
		<div class="tlt">翡翠世家</div>
		<div class="rank-wrap">{% widget '_common:widget/common/rank.tpl' %}</div>
		<a href="/store" class="url btn btn-white btn-w135 btn-h70 fs-4">进入店铺</a>
	</div>
	<div class="order-auction order-comment mt20">
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
		<div class="comment">
			<div class="dt"></div>
			<div class="ml20 mr20"><textarea name="" id="" placeholder="说点什么"></textarea></div>
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
		<div class="comment">
			<div class="dt"></div>
			<div class="ml20 mr20"><textarea name="" id="" placeholder="说点什么"></textarea></div>
		</div>
	</div>

{% endblock %}

{% block footer %}
{% require '_common:widget/footer/footer.less' %}
<div class="footer">
	<a class="btn btn-red">提交评论</a>
</div>
{% endblock %}