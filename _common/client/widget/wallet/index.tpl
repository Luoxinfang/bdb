{% require '_common:widget/wallet/wallet.less' %}

<div class="wallet">
	<div class="wallet-head">
		<p>￥0.00</p>
	</div>
	<div class="info-group">
		<a href="/wallet/trans-list" class="li">交易明细</a>
		<a href="/wallet/recharges" class="li">充值</a>
		<a href="/wallet/withdrawals" class="li">提现</a>
	</div>
	<div class="info-group mt20 mb40">
		<a href="" class="li">银行卡管理</a>
		<a href="" class="li">安全</a>
	</div>
</div>

{% if cashPwdRecomplete == 0 %}
	{% widget '_common:widget/dialog/dialog.tpl' %}
	{% widget '_common:widget/password/password.tpl' %}
	<div class="dialog-wrap" id="cashPwdStep1" dialog="cashPwdStep2" style="display: block">
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
					<input type="number" class="password" id="cashPwd1" >
				</div>
				<div class="tip mt20">请输入支付密码</div>
				<a class="sure mt20 showDialog closeDialog" dialog="cashPwdStep2">下一步</a>
			</div>
		</div>
		<div class="dialog-mask"></div>
	</div>
	<div class="dialog-wrap" id="cashPwdStep2">
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
					<input type="number" class="password" id="cashPwd2" >
				</div>
				<div class="tip mt20">请输入支付密码</div>
				<a class="sure mt20" id="setCashPwd">完成</a>
			</div>
		</div>
	</div>
{% endif %}

{% script %}
	require('_common:widget/wallet/index.js').init();
{% endscript %}