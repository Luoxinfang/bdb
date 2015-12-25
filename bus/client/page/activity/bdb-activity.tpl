{% extends '_common:page/activity/activity-list.tpl' %}
{% block bus %}
	{% script %}
		require('bus:widget/activity/bdb-activity.js').init();
	{% endscript %}
{% endblock %}

