{% extends '_common:page/layout.tpl' %}
{% block head %}
	{% require "_common:js/plugin/dropload/dropload.less" %}
	{% require "_common:js/plugin/dropload/dropload.js" %}
{% endblock %}

{% block header %}
	{% require '_common:widget/activity/activity-index.less' %}
	{% widget '_common:widget/common/header/header.tpl' %}
	{% widget '_common:widget/common/header/header-tab.tpl' %}
{% endblock %}

{% block content %}
	<div id="activity-list" class="pb10">
		<div class="activity-list clearfix" data-page="1">
			{% widget '_common:widget/activity/activity-list.tpl' %}
		</div>
	</div>
	{% block bus %}
	{% endblock %}
{% endblock %}
