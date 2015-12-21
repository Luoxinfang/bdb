{% block content %}
	{% widget 'cus:widget/auction/auction-detail.tpl' %}
	{% script %}
	require("cus:widget/auction/auction-detail.js").init();
	{% endscript %}
{% endblock %}
