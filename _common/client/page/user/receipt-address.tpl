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
				<li class='form-li-input bs'>
					<input type="text" id="name" placeholder="备注名称/如:家,公司等" value="{{ address.address }}"/>
				</li>
				<li class='form-li-input bs' style="display: none">
					<input type="text" id="addressid"  value="{{ address.addressid }}" />
				</li>
				<li class='form-li-input mt'>
					<input type="text" id="name" placeholder="姓名" value="{{ address.username }}" />
				</li>
				<li class='form-li-input'>
					<input type="tel" id="tel" placeholder="电话" value="{{ address.telphone }}" />
				</li>
				<li class='form-li-input'>
					<input type="tel" id="code" placeholder="邮政编码" value="{{ address.post }}" />
				</li>
			</ul>
			<ul class="form-ul">
				<li class='form-li-input form-li-textarea'>
					<textarea id="address" placeholder="详细地址...">{{ address.address }}</textarea>
				</li>
				<div class="set-default">
					<input type="checkbox" class="btn-default" id="btn-default">
					<label for="btn-default">设为默认收货地址</label>
				</div>
			</ul>
			<a class="btn btn-red" id="btn-save">保存</a>
		</div>
	</div>
	{% block cus %}
	{% endblock %}
{% endblock %}


