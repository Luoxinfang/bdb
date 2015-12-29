{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
	{% widget '_common:widget/common/header/header-tab.tpl' %}
{% endblock %}

{% block content %}
	<div id="content">
		{% require '_common:widget/order/order.less' %}
		{% widget '_common:widget/dialog/dialog.tpl' %}
		{% widget '_common:widget/common/password/password.tpl' %}
		<div class="order-list">
			{% widget '_common:widget/order/list.tpl' %}
		</div>
	</div>
	{% script %}
		require('cus:widget/order/list.js').init();
	{% endscript %}
{% endblock %}

