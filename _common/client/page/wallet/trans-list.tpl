{% extends '_common:page/layout.tpl' %}

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
	<div class="trans-list mt10">
		{% for trans in transList %}
			<div class="trans-item" data-type-no="{{ trans.tradetype }}" data-type-name="{{ transType[trans.tradetype] }}" data-time="{{ trans.createtime | date('Y-m-d H:i:s') }}" data-money="{{ trans.tradecashmoney.toFixed(2) }}" data-trans-no="{{ trans.tradeno }}">
				<div class="type">{{ transType[trans.tradetype] }}</div>
				<div class="time">{{ trans.createtime | date('Y-m-d H:i:s') }}</div>
				{% if trans.inorout == 0 %}
					<div class="num green">+{{ trans.tradecashmoney.toFixed(2) }}元</div>
				{% elseif trans.inorout == 1 %}
					<div class="num red">-{{ trans.tradecashmoney.toFixed(2) }}元</div>
				{% endif %}
			</div>
		{% endfor %}
	</div>
	{% script %}
		require('_common:widget/wallet/trans-list.js').init();
	{% endscript %}
{% endblock %}