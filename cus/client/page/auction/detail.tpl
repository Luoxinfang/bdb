{% extends '_common:page/auction/detail.tpl' %}

{% block toolbar %}
	{% widget '_common:widget/common/keyboard/keyboard.tpl' %}
{% endblock %}

{% block head %}
	{% require "_common:js/plugin/dropload/dropload.less" %}
	{% require "_common:js/plugin/dropload/dropload.js" %}
{% endblock %}

{% block auctionDialog %}
	<ul id="bid-list" class="clearfix"></ul>
{% endblock %}

{% block footer %}
	{% if bail.complete == 0 %}
		<div class="footer-content" id="group-bail">
			<button class="btn btn-red" id="btn-bail">交保证金参加拍卖</button>
		</div>
	{% else %}
		<div class="footer-content" id="group-bid">
			<button class="btn btn-white btn-l" id="btn-custom">自定出价</button>
			<button class="btn btn-red btn-c ml20" id="btn-increase"></button>
			<button class="btn btn-white btn-r ml20" id="btn-entrust">托管</button>
		</div>
	{% endif %}
	{% script %}
	require("cus:widget/auction/auction-detail.js").init();
	{% endscript %}
{% endblock %}