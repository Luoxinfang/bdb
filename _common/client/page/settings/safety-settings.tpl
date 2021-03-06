{% extends '_common:page/layout.tpl' %}
{% block header %}
	{% require "_common:less/user/settings.less" %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}
{%  block content %}
	<div class="set-list">
		{% for item in header.settings %}
			{% if item == '修改密码' %}
				<a href="/user/change-pwd" class="set-item"><span >{{ item }}</span></a>
			{% else %}
				<a href="/user/change-tel-info" class="set-item"><span >{{ item }}</span></a>
				{% endif %}
		{% endfor %}
	</div>
{% endblock %}