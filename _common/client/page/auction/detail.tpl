{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header-top.tpl' %}
{% endblock %}

{% block content %}
	{% require '_common:widget/auction/detail/detail.less' %}
	<div class="auction-detail" data-auction-id="{{ data.id }}"
			 data-start-time="{{ data.salestarttime }}"
			 data-end-time="{{ data.saleendtime }}"
			 data-sale-time="{{ data.saletime }}">
		<div class="banner-wrapper">
			{% set banner={showNav:false,images:data.images}; %}
			{% widget '_common:widget/common/banner/banner.tpl' %}
		</div>
		<div class="store">
			<div class="photo">
				{% set photo = {notEditable : true, url:data.shopphoto} %}
				{% widget '_common:widget/common/photo/photo.tpl' %}
			</div>
			<a href="/store" class="name">{{ data.shopname }}</a>
			<span class="time">
				<em id="time-txt">开始时间</em>
				<em id="countdown"></em>
			</span>
		</div>

		<a class="collect-cnt icon-collect-cnt" id="collect-num">{{ data.browers }}</a>
	</div>

	<div class="auction-dialog">
		<div class="desc">
			<p>{{ data.descs }}</p>
		</div>
		<div class="prices">
			<div class="prices-item"><span class="qi">￥{{ data.price }}</span></div>
			<div class="prices-item"><span class="jia">￥{{ data.addprice }}</span></div>
			<div class="prices-item"><span class="bao">￥{{ data.bound }}</span></div>
		</div>
		{% block auctionDialog %}{% endblock %}
	</div>

	{% script %}
	require('_common:widget/auction/detail/detail.js').init();
	{% endscript %}
{% endblock %}

