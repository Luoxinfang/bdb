{% extends '_common:page/_layout.tpl' %}

{% block header %}
	{% widget '_common:widget/header/header-search.tpl' %}
	{% require '_common:widget/auction/auction.less' %}
	<div class="category-list mt10 mb10 clearfix">
		<a class="category-item">缅甸玉</a>
		<a class="category-item">和田玉</a>
		<a class="category-item">XXXX</a>
		<a class="category-item">XXXX</a>
		<a class="category-item">XXXX</a>
		<a class="category-item choosed">XXXX</a>
		<a class="category-item">XXXX</a>
		<a class="category-item">XXXX</a>
		<a class="category-item">XXXX</a>
	</div>
{% endblock %}

{% block body %}
	<div class="search-list">
		<a>翡翠菩萨</a>
		<a>满绿翡翠菩萨</a>
		<a>翡翠菩萨</a>
		<a>满绿翡翠菩萨</a>
		<a>翡翠菩萨</a>
		<a>满绿翡翠菩萨</a>
		<a>翡翠菩萨</a>
		<a>满绿翡翠菩萨</a>
	</div>
{% endblock %}