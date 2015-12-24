{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	{% require '_common:less/public/form.less' %}
	{% require '_common:widget/store/store.less' %}
	<form action="" id="form" onsubmit="checkForm();">
		<div class="form store-apply">
			<p class="tip">店铺名称（已完成）<span class="error ml5" for="storeName"></span></p>
			<input type="text" class="text" name="storeName" placeholder="请输入您的店铺名称" value="{{ storeName }}" disabled="disabled">
			<p class="tip tr">店铺名称不能修改</p>
			<p class="tip mt20">上传身份证（已上传）<span class="error ml5" for="storeName"></span></p>
			<a class="icon-add btn-file showActionsheet" actionsheet="actionsheet-01"></a>
			<p class="tip mt20">上传营业执照（未上传）</p>
			<a class="icon-add btn-file showActionsheet" actionsheet="actionsheet-02"></a>
			<p class="tip mt20">主营分类（必填，最多可选3种）</p>
			{% require '_common:widget/auction/auction.less' %}
			<div class="category-list pl0 clearfix">
				<div class="category-item"><input type="checkbox" name="catetory" id="emerald"><a>翡翠</a></div>
				<div class="category-item"><input type="checkbox" name="catetory" id="wenwan"><a>文玩</a></div>
				<div class="category-item"><input type="checkbox" name="catetory" id="metal"><a>贵金属</a></div>
				<div class="category-item"><input type="checkbox" name="catetory" id="caiBao"><a>彩宝</a></div>
				<div class="category-item"><input type="checkbox" name="catetory" id="ornaments"><a>饰品</a></div>
				<div class="category-item"><input type="checkbox" name="catetory" id="crystal"><a>水晶</a></div>
			</div>
			<div class="store-agree mt20">
				<label for="agree"><input type="checkbox" id="agree">&nbsp;我已阅读并同意：</label>
				<a>用户协议</a>，<a>免责条款</a>
			</div>
		</div>

		{% widget '_common:widget/common/actionsheet/actionsheet.tpl' %}
		<div class="actionsheet-wrap" id="actionsheet-01">
			<div class="mask mask-transition" style="display: none;"></div>
			<div class="actionsheet">
				<button class="btn btn-white btn-file">通过相机拍照<input type="file" class="file" accept="image/*" capture="camera"></button>
				<button class="btn btn-white mt20 btn-file">通过相册选取<input type="file" class="file" accept="image/*"></button>
				<button class="btn btn-red actionsheet-cancel mt40">取消</button>
			</div>
		</div>
		<div class="actionsheet-wrap" id="actionsheet-02">
			<div class="mask mask-transition" style="display: none;"></div>
			<div class="actionsheet">
				<button class="btn btn-white btn-file">通过相机拍照<input type="file" class="file" accept="image/*" capture="camera"></button>
				<button class="btn btn-white mt20 btn-file">通过相册选取<input type="file" class="file" accept="image/*"></button>
				<button class="btn btn-red actionsheet-cancel mt40">取消</button>
			</div>
		</div>
	</form>
	{% script %}
	require('bus:widget/store/qualification.js').init();
	{% endscript %}
{% endblock %}

{% block footer %}
	<div class="footer-content">
		<a class="btn btn-red" id="btn-complete">完成</a>
	</div>
{% endblock %}