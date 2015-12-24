{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header-top.tpl' %}
{% endblock %}

{% block content %}
	{% widget '_common:widget/banner/banner.tpl' %}
	{% require '_common:widget/auction/auction.less' %}
	<div class="auction-detail">
		<div class="store">
			<div class="photo">{% widget '_common:widget/common/photo/photo.tpl' %}</div>
			<a href="/store" class="name">小唐的店铺</a>
			<span class="time">开始时间 04:36</span>
		</div>
		<div class="desc"><p>老坑冰种飘绿如意吊坠，尺寸：46*35*6.5mm。重量：23.8g，品相：完美，无裂痕。身检证书编号：6918563211。市场参考价：33000元...</p></div>
		<div class="price">
			<div class="item"><span class="qi">￥1000</span></div>
			<div class="item"><span class="jia">￥100</span></div>
			<div class="item"><span class="bao">￥200</span></div>
		</div>
		<a class="collect-cnt icon-collect-cnt">423</a>
	</div>
	{% block auctionDialog %}{% endblock %}
{% endblock %}