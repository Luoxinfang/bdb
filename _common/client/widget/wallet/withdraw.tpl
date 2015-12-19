{% require "_common:less/public/form.less" %}
<div class="withdraw">
	<div class="form">
		<ul class="form-ul">
			<li class='form-li-input has-label has-multi-line'>
				<label for="card_name">银行卡</label>
				<div class="has-label-div">
					<p class="fs-1 pr showDialog" dialog="bankList">
						<i data-role="input">建设银行储蓄卡(1452)</i>
						<i class="icon-select-right"></i>
					</p>
					<span class="fs-3">预计三天内到账</span>
				</div>
			</li>
			<li class='form-li-input has-label'>
				<label for="card_name">金额(￥)</label>
				<input type="tel" name="card_name" id="money" placeholder="请输入金额" minlength="1" maxlength="6"/>
			</li>
		</ul>
		<a class="btn btn-white btn-disabled">下一步</a>
	</div>
</div>
{% widget '_common:widget/dialog/dialog.tpl' %}
<div class="dialog-wrap" id="bankList">
	<div class="dialog pb0">
		<div class="dialog-hd">选择银行卡</div>
		<div class="dialog-bd">
			<div class="select-wrap">
				<div class="option">建设银行储蓄卡(1452)</div>
				<div class="option">建设银行储蓄卡(1452)</div>
				<a href="/wallet/bank/add" class="option fc-2">使用新卡提现</a>
			</div>
			<a class="sure closeDialog">取消</a>
		</div>
	</div>
	<div class="dialog-mask"></div>
</div>