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
					<input type="text" id="country" class="bg-f" value="中国" disabled="disabled"/>
				</li>
			</ul>
			<ul class="form-ul">
				<li class='form-li-input'>
					<input type="text" id="province" placeholder="广东" value="{{ province }}"/>
				</li>
				<li class='form-li-input'>
					<input type="text" id="city" placeholder="深圳" value="{{ city }}"/>
				</li>
			</ul>
			<ul class="form-ul">
				<li class='form-li-input form-li-textarea'>
					<textarea id="street" placeholder="请输入详细街道信息...">{{ street }}</textarea>
				</li>
			</ul>
			<a class="btn btn-red" id="btn-complete">完成</a>
		</div>
	</div>
	{% script %}
	require('bus:widget/store/select-address.js').init();
	{% endscript %}
{% endblock %}