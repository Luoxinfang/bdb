{% require '_common:widget/wallet/wallet.less' %}

<div class="wallet">
	<div class="wallet-head">
		<p>￥{{ cashMoney }}</p>
	</div>
	<div class="info-group">
		<a href="/wallet/trans-list" class="li">交易明细</a>
		<a href="/wallet/recharge" class="li">充值</a>
		<a href="/wallet/withdraw" class="li">提现</a>
	</div>
	<div class="info-group mt20 mb40">
		<a href="/wallet/bank" class="li">银行卡管理</a>
		{% if payPwdRecomplete == 1 %}
			<a href="/wallet/paypwd/update" class="li">修改支付密码</a>
		{% endif %}
	</div>
</div>

{% if payPwdRecomplete == 0 %}
	{% widget '_common:widget/dialog/dialog.tpl' %}
	{% widget '_common:widget/common/password/password.tpl' %}
	<div class="dialog-wrap" id="payPwdStep1" dialog="payPwdStep2" style="display: block">
		<div class="dialog pb0">
			<div class="dialog-hd">请设置支付密码</div>
			<div class="dialog-bd">
				<div class="password-wrap mt40">
					<div class="word"></div>
					<div class="word"></div>
					<div class="word"></div>
					<div class="word"></div>
					<div class="word"></div>
					<div class="word"></div>
					<input type="number" class="password" id="payPwd1" >
				</div>
				<div class="tip mt20">请输入支付密码</div>
				<a class="sure mt20" id="nextPayPwd">下一步</a>
			</div>
		</div>
		<div class="dialog-mask"></div>
	</div>
	<div class="dialog-wrap" id="payPwdStep2">
		<div class="dialog-mask"></div>
		<div class="dialog pb0">
			<div class="dialog-hd">再次输入支付密码</div>
			<div class="dialog-bd">
				<div class="password-wrap mt40">
					<div class="word"></div>
					<div class="word"></div>
					<div class="word"></div>
					<div class="word"></div>
					<div class="word"></div>
					<div class="word"></div>
					<input type="number" class="password" id="payPwd2" >
				</div>
				<div class="tip mt20">请输入支付密码</div>
				<a class="sure mt20" id="setPayPwd">完成</a>
			</div>
		</div>
	</div>
{% endif %}

{% script %}
	require('_common:widget/wallet/index.js').init();
{% endscript %}