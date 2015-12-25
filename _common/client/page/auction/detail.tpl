{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header-top.tpl' %}
{% endblock %}

{% block content %}
	{% widget '_common:widget/common/banner/banner.tpl' %}
	{% require '_common:widget/auction/auction.less' %}
	<div class="auction-detail">
		<div class="store">
			<div class="photo">
				{% widget '_common:widget/common/photo/photo.tpl' %}
			</div>
			<a href="/store" class="name">{{ data.shopname }}</a>
			<span class="time" data-time="{{  }}">开始时间 04:36</span>
		</div>
		<div class="desc">
			<p>{{ data.descs }}</p>
		</div>
		<div class="price">
			<div class="item"><span class="qi">￥{{ data.price }}</span></div>
			<div class="item"><span class="jia">￥{{ data.addprice }}</span></div>
			<div class="item"><span class="bao">￥{{ data.bound }}</span></div>
		</div>
		<a class="collect-cnt icon-collect-cnt">{{ data.browers }}</a>
	</div>
	{% block auctionDialog %}

	{% endblock %}
{% endblock %}