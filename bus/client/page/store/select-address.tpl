{% extends '_common:page/layout.tpl' %}
{% block head %}
	{% require '_common:js/plugin/distpicker/distpicker.data.js' %}
	{% require '_common:js/plugin/distpicker/distpicker.js' %}
{% endblock %}

{% block header %}
	{% require "_common:less/public/address.less" %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	{#<div id="content">
		<div class="form">
			<ul class="form-ul">
				<li class='form-li-input'>
					<input type="text" id="country" class="bg-f" value="中国" disabled="disabled"/>
				</li>
			</ul>
			<ul class="form-ul input-wrap" data-toggle="distpicker">
				<li class='form-li-input'>
					<i data-role="input">省份</i>
					<select data-province="---- 选择省 ----"></select>
				</li>
				<li class='form-li-input'>
					<i data-role="input">城市</i>
					<select data-city="---- 选择市 ----"></select>
				</li>
			</ul>
			<ul class="form-ul">
				<li class='form-li-input form-li-textarea'>
					<textarea id="street" placeholder="请输入详细街道信息...">{{ street }}</textarea>
				</li>
			</ul>
			<a class="btn btn-red" id="btn-complete">完成</a>
		</div>
	</div>#}
	<div data-toggle="distpicker">
		<select data-province="浙江省"></select>
		<select data-city="杭州市"></select>
		<select data-district="西湖区"></select>
	</div>
	<div data-toggle="distpicker" id="distpicker3">
		<select></select>
		<select></select>
		<select></select>
	</div>
	{% script %}
		require('bus:widget/store/select-address.js').init();
	{% endscript %}
{% endblock %}