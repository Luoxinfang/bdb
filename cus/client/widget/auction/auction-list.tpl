{% require 'cus:widget/auction/auction.less' %}

<div class="auction-list clearfix">
	{% for item in data.dataList %}
		{% widget 'cus:widget/auction/auction-item.tpl' %}
	{% endfor %}
</div>