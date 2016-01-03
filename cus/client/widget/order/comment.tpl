<div class="order-store">
	{% set photo = {notEditable : true, url:detail.shop.shopimg} %}
	{% widget '_common:widget/common/photo/photo.tpl' %}
	<div class="tlt">{{ detail.shop.shopname }}</div>
	<div class="rank-wrap">{% widget '_common:widget/common/level/level.tpl' %}</div>
	<a href="/store/{{ detail.shop.id }}" class="url btn btn-white btn-w135 btn-h70 fs-4">进入店铺</a>
</div>
<div class="order-auction order-comment mt20">
	{% for product in detail.list %}
		<div class="orderItem" data-order-item-id="{{ product.orderitemid }}">
			<div class="order-item">
				<div class="line2">
					<div class="order-img">
						<img src="{{ product.imgurl || '/static/_common/widget/order/icon/demo.png' }}"/>
					</div>
					<div class="order-content">
						<p>{{ product.proname }}</p>
						<p>￥{{ parseFloat(product.price).toFixed(2) }}</p>
						<p>X{{ product.count }}</p>
					</div>
				</div>
			</div>
			<div class="comment">
				<div class="dt">
					<div class="item"><label for="{{ product.orderitemid }}-1"><input type="radio" name="{{ product.orderitemid }}" id="{{ product.orderitemid }}-1" value="0" checked><span class="good">好评</span></label></div>
					<div class="item tc"><label for="{{ product.orderitemid }}-2"><input type="radio" name="{{ product.orderitemid }}" id="{{ product.orderitemid }}-2" value="1"><span class="mid">中评</span></label></div>
					<div class="item tr"><label for="{{ product.orderitemid }}-3"><input type="radio" name="{{ product.orderitemid }}" id="{{ product.orderitemid }}-3" value="2"><span class="bad">差评</span></label></div>
				</div>
				<div class="ml20 mr20"><textarea name="{{ product.orderitemid }}" id="" placeholder="说点什么"></textarea></div>
			</div>
			<div class="clearfix ml20 mt-10 mb20">
				<a class="icon-add btn-file mr10 mt10"><input name="file" type="file" class="file" accept="image/*" multiple></a>
			</div>
		</div>
	{% endfor %}
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
			<input type="radio" name="qualityStar" class="radio" value="1">
			<div class="stars stars-1">
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
			</div>
			<input type="radio" name="qualityStar" class="radio" value="2">
			<div class="stars stars-2">
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
			</div>
			<input type="radio" name="qualityStar" class="radio" value="3">
			<div class="stars stars-3">
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
			</div>
			<input type="radio" name="qualityStar" class="radio" value="4" checked>
			<div class="stars stars-4">
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star"></i>
			</div>
			<input type="radio" name="qualityStar" class="radio" value="5">
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
			<input type="radio" name="serviceStar" class="radio" value="1">
			<div class="stars stars-1">
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
			</div>
			<input type="radio" name="serviceStar" class="radio" value="2">
			<div class="stars stars-2">
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
			</div>
			<input type="radio" name="serviceStar" class="radio" value="3">
			<div class="stars stars-3">
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
			</div>
			<input type="radio" name="serviceStar" class="radio" value="4" checked>
			<div class="stars stars-4">
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star"></i>
			</div>
			<input type="radio" name="serviceStar" class="radio" value="5">
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
			<input type="radio" name="sendStar" class="radio" value="1">
			<div class="stars stars-1">
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
			</div>
			<input type="radio" name="sendStar" class="radio" value="2">
			<div class="stars stars-2">
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
			</div>
			<input type="radio" name="sendStar" class="radio" value="3">
			<div class="stars stars-3">
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star"></i>
				<i class="icon-40 icon-star"></i>
			</div>
			<input type="radio" name="sendStar" class="radio" value="4" checked>
			<div class="stars stars-4">
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star-full"></i>
				<i class="icon-40 icon-star"></i>
			</div>
			<input type="radio" name="sendStar" class="radio" value="5">
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
<div class="bottom">
	<a class="btn btn-red commentOrder">确定</a>
</div>