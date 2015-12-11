{% extends '_common:page/_layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block body %}
	{% require '_common:widget/result/result.less' %}
	<div class="result">
		{% if result.status == 'paySuccess' %}
			<div class="content">
				<div class="tc mt70"><div class="icon-200 icon-suc"></div></div>
				<div class="tip-suc mt40">支付成功，请耐心等待商家发货！</div>
				<div class="tip">我们会以短信的方式通知您订单发货，<br>请注意查收！</div>
			</div>
			<div class="tc">
				<a href="/order" class="btn btn-white btn-w240 fc-3">完成</a>
			</div>
		{% elseif result.status == 'applyRefundSuccess' %}
			<div class="content">
				<div class="tc mt70"><div class="icon-200 icon-warn"></div></div>
				<div class="tip-suc mt40">您的退款申请已经提交，请等待处理！</div>
				<div class="tip">处理结果将会以短信的方式通知您，<br>请注意查收！</div>
			</div>
			<div class="tc">
				<a href="/order" class="btn btn-white btn-w240 fc-3">完成</a>
			</div>
		{% elseif result.status == 'confirmReceipt' %}
			<div class="content">
				<div class="tc mt70"><div class="icon-200 icon-suc"></div></div>
				<div class="tip-suc mt40">订单：4039345394，已确认收货！</div>
			</div>
			<div class="tc">
				<a href="/order/comment" class="btn btn-white btn-w240 fc-3">去评论</a>
			</div>
		{% endif %}
	</div>
{% endblock %}