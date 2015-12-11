{% extends '_common:page/_layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header-search.tpl' %}
	{% require '_common:widget/auction/auction.less' %}
	<div class="category-list mt10 mb10 clearfix">
		<div class="category-item"><input type="checkbox"><a>缅甸玉</a></div>
		<div class="category-item"><input type="checkbox"><a>和田玉</a></div>
		<div class="category-item"><input type="checkbox"><a>XXXX</a></div>
		<div class="category-item"><input type="checkbox"><a>XXXX</a></div>
		<div class="category-item"><input type="checkbox"><a>XXXX</a></div>
		<div class="category-item"><input type="checkbox" checked><a>XXXX</a></div>
		<div class="category-item"><input type="checkbox"><a>XXXX</a></div>
		<div class="category-item"><input type="checkbox"><a>XXXX</a></div>
		<div class="category-item"><input type="checkbox"><a>XXXX</a></div>
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