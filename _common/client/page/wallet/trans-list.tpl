{% extends '_common:page/layout.tpl' %}

{% block head %}
	{% require "_common:js/plugin/dropload/dropload.less" %}
	{% require "_common:js/plugin/dropload/dropload.js" %}
{% endblock %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
	{% require '_common:widget/wallet/trans.less' %}
	<div class="trans-time">
		<div class="time start input-wrap">
			<span>起</span>
			<i data-role="input">{{ bTime }}</i><input type="date" name="bTime" value="{{ bTime }}">
		</div>
		<div class="time end input-wrap">
			<span>止</span>
			<i data-role="input">{{ eTime }}</i><input type="date" name="eTime" value="{{ eTime }}">
		</div>
	</div>
{% endblock %}

{% block content %}
	{% require '_common:widget/wallet/trans.less' %}
	{% widget '_common:widget/dialog/dialog.tpl' %}
	<div id="trans-list" class="pb20">
		<div class="trans-list mt10" data-page="1">
			{% widget '_common:widget/wallet/trans-list.tpl' %}
		</div>
	</div>
	{% script %}
		require('_common:widget/wallet/trans-list.js').init();
	{% endscript %}
{% endblock %}