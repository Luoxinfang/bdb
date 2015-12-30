{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	<div id="content">
		{% require '_common:widget/order/order.less' %}
		{% widget '_common:widget/dialog/dialog.tpl' %}
		{% widget '_common:widget/common/password/password.tpl' %}
		{% widget '_common:widget/order/detail.tpl' %}
	</div>
	{% script %}
		require('cus:widget/order/detail.js').init();
	{% endscript %}
{% endblock %}

{% block footer %}
	<div class="footer-content order-footer clearfix">
		{% if '等待买家付款' == orderStatus | orderStatus2name %}
			<a class="btn btn-red payOrder">付款</a>
		{% elseif '等待卖家发货' == orderStatus | orderStatus2name %}
			<a class="btn btn-red remindDeliver">提醒发货</a>
			<a class="btn btn-white mr20">整单退款</a>
		{% elseif '卖家已发货' == orderStatus | orderStatus2name %}
			<a class="btn btn-red confirmReceive">确认收货</a>
			<a class="btn btn-white mr20 delayReceive">延迟收货</a>
			<a href="/order/result?status=applyRefundSuccess" class="btn btn-white mr20">整单退款</a>
		{% elseif '待评价' == orderStatus | orderStatus2name %}
			<a href="/order/comment/{{ detail.order.orderno }}" class="btn btn-red">去评论</a>
		{% else %}
			<a href="/order/comment" class="btn btn-white">申请售后</a>
		{% endif %}
	</div>
{% endblock %}