{% for trans in data.data %}
	<div class="trans-item" data-type-no="{{ trans.tradetype }}" data-type-name="{{ transType[trans.tradetype] }}" data-time="{{ trans.createtime | date('Y-m-d H:i:s', -480, 'CCT') }}" data-money="{{ trans.tradecashmoney.toFixed(2) }}" data-trans-no="{{ trans.tradeno }}">
		<div class="type">{{ transType[trans.tradetype] }}</div>
		<div class="time">{{ trans.createtime | date('Y-m-d H:i:s', -480, 'CCT') }}</div>
		{% if trans.inorout == 0 %}
			<div class="num green">+{{ trans.tradecashmoney.toFixed(2) }}元</div>
		{% elseif trans.inorout == 1 %}
			<div class="num red">-{{ trans.tradecashmoney.toFixed(2) }}元</div>
		{% endif %}
	</div>
{% endfor %}