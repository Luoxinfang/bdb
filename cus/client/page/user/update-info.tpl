{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% require "_common:less/public/form.less" %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	<div id="content">
		<div class="form">
			<ul class="form-ul">
				<li class='form-li-input'>
					<input type="text" id="update-name" value="{{ updateVal }}"/>
				</li>
			</ul>
		</div>
	</div>
	{% script %}
	require("cus:widget/user/update-info.js").init();
	{% endscript %}
{% endblock %}