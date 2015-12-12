{% require '_common:widget/user/user.less' %}
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
	<div class="li">
		<span class="fl">地址</span>
		<span class="fr">广东省 深圳市 福田区</span>
	</div>
	<div class="li">
		<span class="fl">邮箱</span>
		<span class="fr">124578963@qq.com</span>
	</div>
</div>
<div class="info-group mt20">
	<a class="li icon-right">
		<span class="fl">展示模版</span>
	</a>
</div>
<div class="info-group mt20">
	<a class="li" href="/store/category">
		<span class="fl">经验分类</span>
		<span class="fr">翡翠、文玩</span>
	</a>
	<a class="li">
		<span class="fl">审核资料</span>
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