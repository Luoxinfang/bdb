{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% require '_common:widget/user/user.less' %}
	{% widget '_common:widget/common/header/header-top.tpl' %}
{% endblock %}

{% block content %}
	<div class="personal-bg"></div>
	<div class="personal-head">
		<div class="showActionsheet" actionsheet="actionsheet-01">{% widget '_common:widget/user/user-photo.tpl' %}</div>
		<div class="rank-wrap">{% widget '_common:widget/common/rank.tpl' %}</div>
	</div>
	<div class="info-group">
		<a class="li">
			<span class="fl">我的二维码</span>
			<i class="icon-ewm"></i>
		</a>
		<div class="li">
			<span class="fl">店名</span>
			<span class="fr">小唐的店铺</span>
		</div>
		<a href="/address/select-address" class="li">
			<span class="fl">地址</span>
			<span class="fr">广东省 深圳市 福田区</span>
		</a>
		<a href="/address/input-email" class="li">
			<span class="fl">邮箱</span>
			<span class="fr">124578963@qq.com</span>
		</a>
	</div>
	<div class="info-group mt20">
		<a class="li icon-right" href="/store/show-template">
			<span class="fl">展示模版</span>
		</a>
	</div>
	<div class="info-group mt20">
		<a href="/store/qualification" class="li">
			<span class="fl">资质认证</span>
		</a>
	</div>
	<div class="mt40"></div>
	{% widget '_common:widget/common/actionsheet/actionsheet.tpl' %}
	<div class="actionsheet-wrap" id="actionsheet-01">
		<div class="mask mask-transition" style="display: none;"></div>
		<div class="actionsheet">
			<button class="btn btn-white">通过相机拍照</button>
			<button class="btn btn-white mt20">通过相册选取</button>
			<button class="btn btn-red actionsheet-cancel mt40">取消</button>
		</div>
	</div>
{% endblock %}