{% extends '_common:page/_layout.tpl' %}

{% block header %}
	{% widget '_common:widget/header/header.tpl' %}
{% endblock %}

{% block body %}
	{% require '_common:widget/auction/auction.less' %}
	<p class="category-tlt">翡翠</p>
	<div class="category-list clearfix">
		<div class="category-item"><input type="checkbox"><a>缅甸玉</a></div>
		<div class="category-item"><input type="checkbox"><a>和田玉</a></div>
		<div class="category-item"><input type="checkbox"><a>XXXX</a></div>
		<div class="category-item"><input type="checkbox"><a>XXXX</a></div>
		<div class="category-item"><input type="checkbox"><a>XXXX</a></div>
		<div class="category-item"><input type="checkbox"><a>XXXX</a></div>
		<div class="category-item"><input type="checkbox"><a>XXXX</a></div>
		<div class="category-item"><input type="checkbox"><a>XXXX</a></div>
	</div>
	<p class="category-tlt">贵重金属</p>
	<div class="category-list clearfix">
		<div class="category-item"><input type="checkbox"><a class="category-item">黄金</a></div>
		<div class="category-item"><input type="checkbox"><a class="category-item">铂金</a></div>
		<div class="category-item"><input type="checkbox"><a class="category-item choosed">纯银</a></div>
		<div class="category-item"><input type="checkbox"><a class="category-item">乌金</a></div>
	</div>
	<p class="category-tlt">文玩</p>
	<div class="category-list clearfix">
		<div class="category-item"><input type="checkbox"><a>蜜蜡</a></div>
		<div class="category-item"><input type="checkbox"><a>金刚菩提</a></div>
		<div class="category-item"><input type="checkbox"><a>小叶紫檀</a></div>
		<div class="category-item"><input type="checkbox"><a>沉香</a></div>
		<div class="category-item"><input type="checkbox"><a>象牙</a></div>
	</div>
{% endblock %}