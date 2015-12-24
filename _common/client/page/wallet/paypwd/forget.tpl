{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	{% require "_common:less/public/form.less" %}
	{% widget "_common:widget/common/password/password.tpl" %}
	<div class="form" id="form1">
		<ul class="form-ul">
			<li class='form-li-input'>
				<input type="tel" id="tel" class="fc-4" value="{{ telphone | replace("^(.{7}).*$", "$1") }}****（不可修改）" data-value="{{ telphone }}" disabled />
			</li>
			<li class="form-li-input has-right-bt">
				<div>
					<input type="tel" id="code" placeholder="请输入验证码" />
				</div>
				<a id="btn-code" class="right-btn">获取验证码</a>
			</li>
			<li class='form-li-input'>
				<input type="password" id="loginPwd" placeholder="请输入登录密码" />
			</li>
		</ul>
		<a id="btn-next" class="btn btn-red btn-disabled">下一步</a>
	</div>
	<div class="bg-f ht100 p20 hide" id="form2">
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
	<div class="bg-f ht100 p20 hide" id="form3">
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
	<div class="result hide" id="result">
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
	require('_common:widget/wallet/paypwd/forget.js').init();
	{% endscript %}
{% endblock %}