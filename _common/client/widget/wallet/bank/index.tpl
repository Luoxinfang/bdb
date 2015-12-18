{% require '_common:widget/wallet/bank/bank.less' %}
<div class="bank">
	<div class="form bank-list">
		{% for bank in bankList %}
		<ul class="form-ul">
			<li class='form-li-text'>
				<a class="icon-delete deleteBank"></a>
				<div class="clearfix"><span class="fl card-name">{{ bank.bankname }}</span><span class="fr card-type">储蓄卡</span></div>
				<p class="tr">**** **** **** {{ bank.bankno | replace("^.*(.{4})$", "$1") }}</p>
				<input type="hidden" value="{{ bank.bankno }}" class="bankNo">
			</li>
		</ul>
		{% endfor %}
		<a href="/wallet/bank/add" class="btn btn-red" id="addBank">添加银行卡</a>
	</div>
</div>
{% widget '_common:widget/dialog/dialog.tpl' %}
{% widget '_common:widget/common/password/password.tpl' %}
<div class="dialog-wrap" id="payPwdDialog">
	<div class="dialog pb0">
		<div class="dialog-hd">删除银行卡</div>
		<div class="dialog-bd">
			<a class="dialog-close closeDialog"></a>
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
			<a class="sure mt20">确定</a>
		</div>
	</div>
	<div class="dialog-mask"></div>
</div>
{% script %}
	require('_common:widget/wallet/bank/bank.js').init();
{% endscript %}