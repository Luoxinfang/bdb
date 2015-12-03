{% extends '_common:page/_layout.tpl' %}

{% block header %}
	{% widget '_common:widget/header/header.tpl' %}
{% endblock %}

{% block body %}
	{% require '_common:widget/auction/auction.less' %}
	<p class="category-tlt">翡翠</p>
	<div class="category-list clearfix">
		<a class="category-item">缅甸玉</a>
		<a class="category-item">和田玉</a>
		<a class="category-item">XXXX</a>
		<a class="category-item">XXXX</a>
		<a class="category-item">XXXX</a>
		<a class="category-item">XXXX</a>
		<a class="category-item">XXXX</a>
		<a class="category-item">XXXX</a>
	</div>
	<p class="category-tlt">贵重金属</p>
	<div class="category-list clearfix">
		<a class="category-item">黄金</a>
		<a class="category-item">铂金</a>
		<a class="category-item choosed">纯银</a>
		<a class="category-item">乌金</a>
	</div>
	<p class="category-tlt">文玩</p>
	<div class="category-list clearfix">
		<a class="category-item">蜜蜡</a>
		<a class="category-item">金刚菩提</a>
		<a class="category-item">小叶紫檀</a>
		<a class="category-item">沉香</a>
		<a class="category-item">象牙</a>
	</div>
{% endblock %}