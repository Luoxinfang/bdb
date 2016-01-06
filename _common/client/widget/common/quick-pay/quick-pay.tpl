<!--快捷支付组件-->
<link rel="stylesheet" href="quick-pay.less?__inline">
<input type="hidden" name="price" id="price" value="{{ price }}">
<input type="hidden" name="serial-number" id="serial-number" value="{{ serialNumber }}">
<div class="dialog pb10" id="quick-pay">
	<div class="dialog-close closeDialog"></div>
	<div id="pwd-input">
		<div class="dialog-hd">{{ title }}</div>
		<div class="dialog-bd">
			<div class="price">￥{{ price }}</div>
			<div class="password-wrap">
				<span class="word"></span>
				<span class="word"></span>
				<span class="word"></span>
				<span class="word"></span>
				<span class="word"></span>
				<span class="word"></span>

				<div class="cover-cursor">
					<input type="number" class="password">
				</div>
			</div>
			<div class="tip">请输入支付密码</div>
		</div>
	</div>
	<div id="way-pay" class="hide">
		<div class="dialog-hd">选择支付方式</div>
		<div class="dialog-bd">
			<label for="way-1" class="way">
				<span>使用零钱支付</span>
				<input type="radio" value="1" name="payWay" id="way-1" checked>
				<i class="icon-40 icon-radio"></i>
			</label>
			<label for="way-2" class="way">
				<span>使用京东支付</span>
				<input type="radio" value="4" name="payWay" id="way-2">
				<i class="icon-40 icon-radio"></i>
			</label>
			<label for="way-3" class="way">
				<span>使用易宝支付</span>
				<input type="radio" value="3" name="payWay" id="way-3">
				<i class="icon-40 icon-radio"></i>
			</label>
			<a class="sure">确定</a>
		</div>
	</div>
	<div class="result-tip"></div>
</div>


<script src="quick-pay.js?__inline"></script>
<script>
	!function () {
		require('quick-pay.js').init();
	}()
</script>
