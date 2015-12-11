{% extends '_common:page/_layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
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
			<div class="dt">
				<div class="item"><label for="radio-1-1"><input type="radio" name="comment-1" id="radio-1-1" checked><span class="good">好评</span></label></div>
				<div class="item tc"><label for="radio-1-2"><input type="radio" name="comment-1" id="radio-1-2"><span class="mid">中评</span></label></div>
				<div class="item tr"><label for="radio-1-3"><input type="radio" name="comment-1" id="radio-1-3"><span class="bad">差评</span></label></div>
			</div>
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
			<div class="dt">
				<div class="item"><label for="radio-2-1"><input type="radio" name="comment-2" id="radio-2-1" checked><span class="good">好评</span></label></div>
				<div class="item tc"><label for="radio-2-2"><input type="radio" name="comment-2" id="radio-2-2"><span class="mid">中评</span></label></div>
				<div class="item tr"><label for="radio-2-3"><input type="radio" name="comment-2" id="radio-2-3"><span class="bad">差评</span></label></div>
			</div>
			<div class="ml20 mr20"><textarea name="" id="" placeholder="说点什么"></textarea></div>
		</div>
	</div>

	<div class="order-rate mb20">
		<div class="item">
			<span class="sl">描述相符：</span>
			<div class="dr">
				<div class="stars stars-0">
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
				</div>
				<input type="radio" name="rate-1" class="radio" checked>
				<div class="stars stars-1">
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
				</div>
				<input type="radio" name="rate-1" class="radio">
				<div class="stars stars-2">
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
				</div>
				<input type="radio" name="rate-1" class="radio">
				<div class="stars stars-3">
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
				</div>
				<input type="radio" name="rate-1" class="radio">
				<div class="stars stars-4">
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star"></i>
				</div>
				<input type="radio" name="rate-1" class="radio">
				<div class="stars stars-5">
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
				</div>
			</div>
		</div>
		<div class="item">
			<span class="sl">服务态度：</span>
			<div class="dr">
				<div class="stars stars-0">
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
				</div>
				<input type="radio" name="rate-2" class="radio" checked>
				<div class="stars stars-1">
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
				</div>
				<input type="radio" name="rate-2" class="radio">
				<div class="stars stars-2">
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
				</div>
				<input type="radio" name="rate-2" class="radio">
				<div class="stars stars-3">
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
				</div>
				<input type="radio" name="rate-2" class="radio">
				<div class="stars stars-4">
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star"></i>
				</div>
				<input type="radio" name="rate-2" class="radio">
				<div class="stars stars-5">
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
				</div>
			</div>
		</div>
		<div class="item">
			<span class="sl">物流服务：</span>
			<div class="dr">
				<div class="stars stars-0">
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
				</div>
				<input type="radio" name="rate-3" class="radio" checked>
				<div class="stars stars-1">
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
				</div>
				<input type="radio" name="rate-3" class="radio">
				<div class="stars stars-2">
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
				</div>
				<input type="radio" name="rate-3" class="radio">
				<div class="stars stars-3">
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star"></i>
					<i class="icon-40 icon-star"></i>
				</div>
				<input type="radio" name="rate-3" class="radio">
				<div class="stars stars-4">
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star"></i>
				</div>
				<input type="radio" name="rate-3" class="radio">
				<div class="stars stars-5">
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
					<i class="icon-40 icon-star-full"></i>
				</div>
			</div>
		</div>
	</div>

	<div class="ml20 mb20">
		<a class="icon-add btn-file"><input type="file" class="file" accept="image/*"></a>
	</div>
{% endblock %}

{% block footer %}
{% require '_common:widget/footer/footer.less' %}
<div class="footer">
	<a class="btn btn-red">确定</a>
</div>
{% endblock %}