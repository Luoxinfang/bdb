{% extends '_common:page/layout.tpl' %}
{% block head %}
	{% require "_common:less/public/form.less" %}
{% endblock %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	<div id="content">
		<div class="form">
			<ul class="form-ul">
				<li class='form-li-input'>
					<input type="number" id="tel" placeholder="请输入你的手机号码"
								 maxlength="11" autoconmplete='on'/>
				</li>
				<li class='form-li-input'>
					<input type="password" id="pwd" placeholder="请输入你的密码"
								 minlength="6" maxlength="15" autoconmplete='off'/>
				</li>
				<li class="form-li-input has-right-bt">
					<div>
						<input type="number" id="code" placeholder="请输入验证码"
									 maxlength="6"/>
					</div>
					<!--获取验证码按钮不可点增加类btn-disabled即可-->
					<a id="btn-code" class="right-btn btn-disabled">获取验证码</a>
				</li>
			</ul>
			<a class="btn btn-red btn-disabled" id="btn-submit">完成</a>
		</div>
	</div>
	{% script %}
		require('_common:widget/acc/reg.js').init();
	{% endscript %}
{% endblock %}