{% extends '_common:page/layout.tpl' %}
{% block head %}
	{% require "_common:less/public/address.less" %}
{% endblock %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	<div id="content">
		<div class="form">
			<ul class="form-ul">
				<li class='form-li-input'>
					<input type="text" id="email" placeholder="请输入邮箱地址" value="{{ email }}"/>
				</li>
			</ul>
			<a class="btn btn-red" id="btn-complete">完成</a>
		</div>
	</div>
	{% script %}
	require('bus:widget/store/input-email.js').init();
	{% endscript %}
{% endblock %}