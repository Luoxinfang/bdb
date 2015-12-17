{% extends '_common:page/user/receipt-address.tpl' %}

{% block cus %}
	{% script %}
		require("cus:widget/user/receipt-address.js").init();
	{% endscript %}
{% endblock %}