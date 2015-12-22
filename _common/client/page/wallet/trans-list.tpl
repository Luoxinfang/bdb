{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
	{% require '_common:widget/wallet/trans.less' %}
	<div class="trans-time pb10">
		<div class="time start input-wrap"><span>起</span><i data-role="input">2015-10-07</i><input type="date" value="2015-10-07"></div>
		<div class="time end input-wrap"><span>止</span><i data-role="input">2015-10-07</i><input type="date" value="2015-10-07"></div>
	</div>
	{% script %}
		var B = require('_common:js/bdb/core.js');
		B.bindInput();
	{% endscript %}
{% endblock %}

{% block content %}
	{% widget '_common:widget/wallet/trans-list.tpl' %}
{% endblock %}