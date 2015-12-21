{% require "_common:less/public/form.less" %}
<div class="withdraw">
	<div class="form">
		<ul class="form-ul">
			<li class='form-li-input has-label has-multi-line'>
				<label for="card_name">银行卡</label>
				<div class="has-label-div">
					<p class="fs-1 pr showDialog" dialog="bankList">
						{% if bankList[0] %}
							<i data-role="input" id="bankNo">{{ bankList[0].bankname }}({{ bankList[0].bankno | replace("^.*(.{4})$", "$1") }})</i>
							<input type="hidden" name="bankNo" value="{{ bankList[0].bankno }}">
						{% else %}
							<a href="/wallet/bank/add" class="fc-h4">请先新增银行卡</a>
							<input type="hidden" name="bankNo">
						{% endif %}
						<i class="icon-select-right"></i>
					</p>
					<span class="fs-3">预计三天内到账</span>
				</div>
			</li>
			<li class='form-li-input has-label'>
				<label>金额(￥)</label>
				<input type="number" name="money" placeholder="请输入金额" />
			</li>
		</ul>
		<a id="nextStep" class="btn btn-red btn-disabled">下一步</a>
	</div>
</div>
{% widget '_common:widget/dialog/dialog.tpl' %}
<div class="dialog-wrap" id="bankList">
	<div class="dialog pb0">
		<div class="dialog-hd">选择银行卡</div>
		<div class="dialog-bd">
			<div class="select-wrap">
				{% for bank in bankList %}
					{% if loop.index == 1 %}
						<div class="option input-wrap">{{ bank.bankname }}({{ bank.bankno | replace("^.*(.{4})$", "$1") }})<input type="radio" name="bank" value="{{ bank.bankno }}" checked><i class="icon-40 icon-radio"></i></div>
					{% else %}
						<div class="option input-wrap">{{ bank.bankname }}({{ bank.bankno | replace("^.*(.{4})$", "$1") }})<input type="radio" name="bank" value="{{ bank.bankno }}"><i class="icon-40 icon-radio"></i></div>
					{% endif %}
				{% endfor %}
				<a href="/wallet/bank/add" class="option fc-h4">使用新卡提现</a>
			</div>
			<a class="sure closeDialog">取消</a>
		</div>
	</div>
	<div class="dialog-mask"></div>
</div>
{% script %}
	require('_common:widget/wallet/withdraw.js').init();
{% endscript %}