{% extends '_common:page/layout.tpl' %}
{% block head %}
	{% require "_common:less/public/form.less" %}
{% endblock %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	<div id="content">
		<!--注册表单-->
		<div class="form" id="form1">
			<ul class="form-ul">
				<li class='form-li-input'>
					<input type="tel" id="tel" placeholder="请输入你的手机号码"
								 value="18665987656"
								 maxlength="11" autoconmplete='on'/>
				</li>
				<li class="form-li-input has-right-bt">
					<div>
						<input type="tel" id="code" placeholder="请输入验证码"
									 value="123456"
									 maxlength="6"/>
					</div>
					<!--获取验证码按钮不可点增加类btn-disabled即可-->
					<a id="btn-code" class="right-btn btn-disabled">获取验证码</a>
				</li>
			</ul>
			<ul class="form-ul">
				<li class='form-li-input'>
					<input type="text" id="identity" placeholder="请输入身份证号"
								 value="360782198904207030"
								 maxlength="18"/>
				</li>
			</ul>
			<a id="btn-next" class="btn btn-white btn-disabled">下一步</a>
		</div>
		<div class="form hide" id="form2">
			<ul class="form-ul">
				<li class='form-li-input'>
					<input type="password" id="pwd" placeholder="请输入新密码" minlength="4" maxlength="12" autoconmplete='off'/>
				</li>
				<li class="form-li-input">
					<input type="password" id="pwd_again" placeholder="请再次输入新密码" minlength="4" maxlength="12" autoconmplete='off'/>
				</li>
			</ul>
			<a id="btn-submit" class="btn btn-red btn-disabled">确认</a>
		</div>
	</div>
	{% script %}
	require('_common:widget/acc/recovery.js').init();
	{% endscript %}
{% endblock %}