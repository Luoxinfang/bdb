{% require "_common:less/public/form.less" %}
{% require "_common:widget/wallet/bank/bank.less" %}
{% widget '_common:widget/common/password/password.tpl' %}
{% if validPayPwd %}
	<div class="bank">
		<div class="form">
			<ul class="form-ul">
				<li class='form-li-input'>
					<input type="text" id="card_no" placeholder="请输入你的银行卡号" minlength="8" maxlength="26"/>
					<span id="bankName" class="bank-name">中国民生银行</span>
				</li>
				<li class='form-li-input'>
					<input type="text" id="card_bank" placeholder="请输入开户支行" minlength="4" maxlength="18"/>
				</li>
				<li class='form-li-input'>
					<input type="text" id="card_name" placeholder="请输入持卡人姓名" minlength="2" maxlength="4"/>
				</li>
			</ul>
			<a class="btn btn-red btn-disabled" id="addBank">保存</a>
		</div>
	</div>
{% else %}
	<div class="bg-f ht100 p20" id="validPayPwd">
		<p class="fs-2 fc-3 mt100 tc">请输入支付密码，以确认身份</p>
		<div class="password-wrap mt100">
			<div class="word"></div>
			<div class="word"></div>
			<div class="word"></div>
			<div class="word"></div>
			<div class="word"></div>
			<div class="word"></div>
			<input type="number" class="password" id="payPwd" >
		</div>
	</div>
	<div class="bank" style="display: none">
		<div class="form">
			<ul class="form-ul">
				<li class='form-li-input'>
					<input type="text" id="card_no" placeholder="请输入你的银行卡号" minlength="8" maxlength="26"/>
					<span id="bankName" class="bank-name">中国民生银行</span>
				</li>
				<li class='form-li-input'>
					<input type="text" id="card_bank" placeholder="请输入开户支行" minlength="4" maxlength="18"/>
				</li>
				<li class='form-li-input'>
					<input type="text" id="card_name" placeholder="请输入持卡人姓名" minlength="2" maxlength="4"/>
				</li>
			</ul>
			<a class="btn btn-red btn-disabled" id="addBank">保存</a>
		</div>
	</div>
{% endif %}
{% script %}
	require('_common:widget/wallet/bank/bank.js').init();
{% endscript %}