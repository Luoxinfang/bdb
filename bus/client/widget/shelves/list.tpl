{% require 'bus:widget/auction/auction.less' %}

<div class="auction-list clearfix">
	{% for item in data.dataList %}
		{% widget 'bus:widget/shelves/item.tpl' %}
	{% endfor %}
</div>