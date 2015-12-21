{% extends '_common:page/layout.tpl' %}
{% block head %}

{% endblock %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
	{% widget '_common:widget/common/header/header-tab.tpl' %}
{% endblock %}

{% block content %}
	{% widget '_common:widget/auction/auction-list.tpl' %}
	{% script %}
		require('_common:widget/common/header/header-sort.js').init();
	{% endscript %}
{% endblock %}