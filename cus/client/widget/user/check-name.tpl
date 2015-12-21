{% require "_common:less/public/form.less" %}
{%  block body %}
	{% widget '_common:widget/common/header/header.tpl' %}

	<div id="content">
		<div class="form">
			<ul class="form-ul">
				<li class='form-li-input'>
					<input type="text" id="name" placeholder="请输入真实姓名" minlength="2" maxlength="4"/>
				</li>
				<li class='form-li-input'>
					<input type="text" id="name" placeholder="请输入身份证号" minlength="2" maxlength="4"/>
				</li>
			</ul>
			<a class="icon-add btn-file mt-40"></a>
		</div>
	</div>
{% endblock %}





