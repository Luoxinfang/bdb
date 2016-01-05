<div class="form">
	<div class="form-group">
		{#<div class="item icon-bottom input-wrap">#}
		<div class="item">
			<span class="fl">理由</span>
			{#<span class="fr"><i data-role="input"></i></span>#}
			{#<select name="reason">#}
				{#<option value="">理由</option>#}
			{#</select>#}
		</div>
	</div>
	<textarea name="comment" class="textarea mt20" placeholder="补充说明..."></textarea>
	<div class="clearfix mt10">
		<a class="icon-add btn-file mt10 mr10"><input type="file" name="file" class="file" accept="image/*" multiple></a>
	</div>
	<a id="complain" class="btn btn-red btn-disabled mt40">提交</a>
</div>