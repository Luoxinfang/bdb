{% extends '_common:page/layout.tpl' %}
{% block head %}
	{% require "_common:less/user/settings.less" %}
{% endblock %}
{%  block body %}
	{% widget '_common:widget/common/header/header.tpl' %}

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