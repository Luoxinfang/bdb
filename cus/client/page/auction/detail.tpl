{% extends '_common:page/auction/detail.tpl' %}

{% block auctionDialog %}
	<div class="auction-dialog">
			<ul id="bid-list"></ul>
	</div>
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