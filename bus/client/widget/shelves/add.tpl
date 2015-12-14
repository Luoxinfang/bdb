{% require '_common:less/public/form.less' %}
<div class="form">
	<input type="text" placeholder="商品名称" class="text">
	<a class="icon-add btn-file mt20"><input type="file" class="file" accept="image/*"></a>
	<textarea class="textarea mt20" placeholder="请输入介绍信息"></textarea>
	<div class="form-group mt20">
		<div class="item icon-right input-wrap">
			<span class="fl">类别</span>
			<span class="fr"><i data-role="input">翡翠</i></span>
			<select name="category">
				<option value="翡翠">翡翠</option>
				<option value="黄金">黄金</option>
				<option value="宝石">宝石</option>
			</select>
		</div>
	</div>
	<div class="form-group mt20">
		<div class="item icon-right input-wrap">
			<span class="fl">市场价</span>
			<span class="fr">￥<i data-role="input">5000</i></span>
			<input type="number" value="5000">
		</div>
		<div class="item icon-right input-wrap">
			<span class="fl">保证金</span>
			<span class="fr">￥<i data-role="input">100</i></span>
			<input type="number" value="100">
		</div>
		<div class="item icon-right input-wrap">
			<span class="fl">起拍价</span>
			<span class="fr">￥<i data-role="input">500</i></span>
			<input type="number" value="500">
		</div>
		<div class="item icon-right input-wrap">
			<span class="fl">加价幅度</span>
			<span class="fr">￥<i data-role="input">200</i></span>
			<input type="number" value="200">
		</div>
	</div>
	<div class="form-group mt20">
		<div class="item input-wrap">
			<span class="fl">开始时间</span>
			<span class="fr"><i data-role="input">2015-10-08 18:00</i></span>
			<input type="datetime-local" value="2015-10-08T18:00">
		</div>
		<div class="item input-wrap">
			<span class="fl">结束时间</span>
			<span class="fr"><i data-role="input">2015-10-09 18:00</i></span>
			<input type="datetime-local" value="2015-10-09T18:00">
		</div>
	</div>
	<div class="form-group mt20">
		<div class="item">
			<span class="fl">7天无条件退货</span>
			<div class="checkbox-wrap">
				<input type="checkbox" id="checkbox-1" class="checkbox">
				<label for="checkbox-1"></label>
			</div>
		</div>
		<div class="item">
			<span class="fl">包邮</span>
			<div class="checkbox-wrap">
				<input type="checkbox" id="checkbox-2" class="checkbox" checked>
				<label for="checkbox-2"></label>
			</div>
		</div>
	</div>
	<a href="/shelves/list" class="btn btn-red mt20">确定</a>
</div>
{% script %}
require('_common:js/bdb/core.js').bindInput();
{% endscript %}