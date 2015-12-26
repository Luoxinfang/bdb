{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	{% require '_common:less/public/form.less' %}
	<div class="recharge">
		<div class="form">
			<ul class="form-ul">
				<li class='form-li-input'>
					<input type="number" name="money" placeholder="请输入充值金额" />
				</li>
			</ul>
			<a id="pay" class="btn btn-red btn-disabled">去付款</a>
		</div>
	</div>
	{% script %}
	require('_common:widget/wallet/recharge.js').init();
	{% endscript %}
{% endblock %}