{% extends  '_common:page/user/consultation.tpl' %}

{% block _common %}
	{% script %}
	require("cus:widget/user/consultation.js").init();
	{% endscript %}
{% endblock %}