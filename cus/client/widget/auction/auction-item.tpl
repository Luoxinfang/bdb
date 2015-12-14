{% require 'cus:widget/auction/auction.less' %}

{% extends '_common:widget/auction/auction-item.tpl' %}
{% block auctionTime %}
	<p class="time">{{ item.date }}</p>
	<a class="collect-cnt icon-collect-cnt">{{ item.num }}</a>
{% endblock %}