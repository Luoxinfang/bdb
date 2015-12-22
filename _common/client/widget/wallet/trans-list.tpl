{% require '_common:widget/wallet/trans.less' %}
{% widget '_common:widget/dialog/dialog.tpl' %}
<div class="trans-list">
	{% for tran in transList %}
		<div class="trans-item">
			<input type="hidden" name="transType" value="{{ tran.tradetype }}">
			<div class="type">{{ transType[tran.tradetype] }}</div>
			<div class="time">{{ tran.createtime | date('Y-m-d H:i:s') }}</div>
			{% if tran.inorout == 0 %}
				<div class="num green">+{{ tran.tradecashmoney.toFixed(2) }}元</div>
			{% elseif tran.inorout == 1 %}
				<div class="num red">-{{ tran.tradecashmoney.toFixed(2) }}元</div>
			{% endif %}
		</div>
	{% endfor %}
</div>
{% script %}
	require('_common:widget/wallet/trans-list.js').init();
{% endscript %}
