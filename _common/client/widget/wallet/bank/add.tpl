{% require "_common:less/public/form.less" %}
{% require "_common:widget/wallet/bank/bank.less" %}
{% widget '_common:widget/common/password/password.tpl' %}
{% if validPayPwd %}
	<div class="bank" id="addBankDiv">
		<form id="form">
			<div class="form">
				<ul class="form-ul">
					<li class='form-li-input'>
						<input type="hidden" name="realName" value="{{ realInfo.realname }}"/>
						<span class="fl">{{ realInfo.realname }}</span>
						<span class="fl fc-4">（实名认证姓名，不能更改）</span>
					</li>
					<li class='form-li-input'>
						<input type="number" name="bankNo" placeholder="请输入您的银行卡卡号" />
						<span id="bankName" class="bank-name"></span>
					</li>
					<li class='form-li-input'>
						<input type="text" name="openAddress" placeholder="请输入开户支行" />
					</li>
				</ul>
				<a class="btn btn-red btn-disabled" id="addBank">保存</a>
			</div>
		</form>
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
	<div class="bank" id="addBankDiv" style="display: none;">
		<form id="form">
			<div class="form">
				<ul class="form-ul">
					<li class='form-li-input'>
						<input type="hidden" name="realName" value="陈振华"/>
						<span class="fl">{{ realInfo.realname }}</span>
						<span class="fl fc-4">(实名认证姓名，不能更改)</span>
					</li>
					<li class='form-li-input'>
						<input type="text" name="bankNo" placeholder="请输入您的银行卡卡号" />
						<span id="bankName" class="bank-name"></span>
					</li>
					<li class='form-li-input'>
						<input type="text" name="openAddress" placeholder="请输入开户支行" />
					</li>
				</ul>
				<a class="btn btn-red btn-disabled" id="addBank">保存</a>
			</div>
		</form>
	</div>
{% endif %}
{% script %}
	require('_common:widget/wallet/bank/add.js').init();
{% endscript %}