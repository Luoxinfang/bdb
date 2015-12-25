{% extends '_common:page/activity/detail.tpl' %}

{% block bus %}
	{% script %}
		require('bus:widget/activity/detail.js').init();
	{% endscript %}
{% endblock %}