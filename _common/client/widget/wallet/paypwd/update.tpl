{% widget '_common:widget/common/password/password.tpl' %}
{% require '_common:widget/wallet/paypwd/paypwd.less' %}
{% if validPayPwd %}
	<div class="bg-f p20" id="payPwdStep1">
		<p class="fs-2 fc-3 mt100 tc">请输入新的支付密码</p>
		<div class="password-wrap mt100">
			<div class="word"></div>
			<div class="word"></div>
			<div class="word"></div>
			<div class="word"></div>
			<div class="word"></div>
			<div class="word"></div>
			<input type="number" class="password" id="newPayPwd1" >
		</div>
	</div>
{% else %}
	<div class="bg-f p20" id="payPwdStep0">
		<p class="fs-2 fc-3 mt100 tc">请输入旧密码，以验证身份</p>
		<div class="password-wrap mt100">
			<div class="word"></div>
			<div class="word"></div>
			<div class="word"></div>
			<div class="word"></div>
			<div class="word"></div>
			<div class="word"></div>
			<input type="number" class="password" id="oldPayPwd" >
		</div>
		<p class="mt80 tc">
			<a href="/wallet/paypwd/forget" class="inherit underline fs-3 fc-2">忘记支付密码？</a>
		</p>
	</div>
	<div class="bg-f p20" id="payPwdStep1" style="display: none;">
		<p class="fs-2 fc-3 mt100 tc">请输入新的支付密码</p>
		<div class="password-wrap mt100">
			<div class="word"></div>
			<div class="word"></div>
			<div class="word"></div>
			<div class="word"></div>
			<div class="word"></div>
			<div class="word"></div>
			<input type="number" class="password" id="newPayPwd1" >
		</div>
	</div>
{% endif %}
<div class="bg-f p20" id="payPwdStep2" style="display: none;">
	<p class="fs-2 fc-3 mt100 tc">请再次输入新的支付密码</p>
	<div class="password-wrap mt100">
		<div class="word"></div>
		<div class="word"></div>
		<div class="word"></div>
		<div class="word"></div>
		<div class="word"></div>
		<div class="word"></div>
		<input type="number" class="password" id="newPayPwd2" >
	</div>
</div>
{% require '_common:widget/result/result.less' %}
<div class="result" id="result" style="display: none">
	<div class="content">
		<div class="tc mt70"><div class="icon-200 icon-suc"></div></div>
		<div class="tip-suc mt40">支付密码修改成功！</div>
		<div class="tip">{{ rs.msg }}</div>
	</div>
	<div class="tc">
		<a href="/wallet" class="btn btn-white btn-w240">返回我的钱包</a>
	</div>
</div>
{% script %}
	require('_common:widget/wallet/paypwd/paypwd.js').init();
{% endscript %}
