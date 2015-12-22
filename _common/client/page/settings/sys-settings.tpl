{% extends '_common:page/layout.tpl' %}
{% block header %}
	{% require "_common:less/user/settings.less" %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}
{% block content %}
	<div class="set-list">
		{% for item in header.settings %}
			{% if item == '安全' %}
				<a href="/settings/safety-settings" class="set-item"><span>{{ item }}</span></a>
			{% elseif item == '推送设置' %}
				<a href="/settings/push-settings" class="set-item"><span>{{ item }}</span></a>
			{% elseif item == '更新版本' %}
				<a href="/settings/version-update" class="set-item"><span>{{ item }}</span></a>
			{% elseif item == '关于百多宝' %}
				<a href="/settings/about-bdb" class="set-item"><span>{{ item }}</span></a>
			{% elseif item == '投诉建议' %}
				<a href="/settings/suggestions" class="set-item"><span>{{ item }}</span></a>
			{% endif %}
		{% endfor %}
	</div>
{% endblock %}