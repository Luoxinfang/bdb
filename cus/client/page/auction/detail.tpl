{% extends '_common:page/auction/detail.tpl' %}

{% block head %}
	{% require "_common:js/plugin/dropload/dropload.less" %}
	{% require "_common:js/plugin/dropload/dropload.js" %}
{% endblock %}

{% block auctionDialog %}
	<ul id="bid-list" class="clearfix"></ul>
{% endblock %}

{% block footer %}
	{% if auctionStatus == 0 || auctionStatus == 2 %}
		<div class="footer-content">
			<button class="btn btn-red">交保证金参加拍卖</button>
		</div>
	{% endif %}
	{% if auctionStatus == 1 %}
		<div class="footer-content">
			<button class="btn btn-white btn-disabled btn-l">自定出价</button>
			<button class="btn btn-red btn-disabled btn-c ml20">出价100</button>
			<button class="btn btn-white btn-r ml20">托管</button>
		</div>
	{% endif %}
	{% if auctionStatus == 3 %}
		<div class="footer-content">
			<button class="btn btn-white btn-l">自定出价</button>
			<button class="btn btn-red btn-c ml20">出价100</button>
			<button class="btn btn-white btn-r ml20">托管</button>
		</div>
	{% endif %}
	{% script %}
	require("cus:widget/auction/auction-detail.js").init();
	{% endscript %}
{% endblock %}