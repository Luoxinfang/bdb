{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header-top.tpl' %}
{% endblock %}

{% block content %}
	{% require '_common:widget/auction/detail/detail.less' %}
	<div class="auction-detail" data-auction-id="{{ data.id }}">
		<div class="banner-wrapper">
			{% set banner={showNav:true,images:data.images}; %}
			{% widget '_common:widget/common/banner/banner.tpl' %}
		</div>
		<div class="store">
			<div class="photo">
				{% set photo = {notEditable : true, url:data.shopphoto} %}
				{% widget '_common:widget/common/photo/photo.tpl' %}
			</div>
			<a href="/store" class="name">{{ data.shopname }}</a>
			<span class="time" data-time="{{ }}">开始时间 04:36</span>
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
	{% script %}
		require('_common:widget/auction/detail/detail.js').init();
	{% endscript %}
{% endblock %}

