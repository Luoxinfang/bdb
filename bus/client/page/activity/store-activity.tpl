{% extends '_common:page/activity/activity-list.tpl' %}
{% block bus %}
	{% script %}
	require('bus:widget/activity/store-activity.js').init();
	{% endscript %}
{% endblock %}
{% block footer %}
	<div class="footer-content">
		<a href="/activity/add-activity" class="btn btn-red">新增活动</a>
	</div>
{% endblock %}