{% extends  '_common:page/user/consultation.tpl' %}

{% block cus %}
	{% script %}
	require("cus:widget/user/consultation.js").init();
	{% endscript %}
{% endblock %}