{% require '_common:widget/user/user.less' %}
<div class="personal-bg"></div>
<div class="personal-head">
	<div class="showActionsheet" actionsheet="actionsheet-01">{% widget '_common:widget/user/user-photo.tpl' %}</div>
	<div class="rank-wrap">{% widget '_common:widget/common/rank.tpl' %}</div>
</div>
<div class="info-group">
	<div class="li icon-right">
		<span class="fl">实名认证</span>
	</div>
</div>
<div class="info-group mt">
	<div class="li">
		<span class="fl">昵称</span>
		<span class="fr">{{ userInfo.nickname }}</span>
	</div>
	<div class="li">
		<span class="fl">帐号</span>
		<span class="fr">{{ userInfo.username }}</span>
	</div>
	<div class="li">
		<span class="fl">生日</span>
		<span class="fr">{{ userInfo.birthday }}</span>
	</div>
	<div class="li">
		<span class="fl">性别</span>
		<span class="fr">
			{% if userInfo.sex == 'F' %}
					男
			{% else  %}
					女
			{% endif %}
		</span>
	</div>
	<div class="li">
		<span class="fl">QQ账号</span>
		<span class="fr">{{ userInfo.othercount }}</span>
	</div>
</div>
<div class="address-list clearfix">
	{#{% for item in addressInfo %}#}
	<a href="/user/receipt-address?type=delete&addressId={{ addressInfo.addressid }}" class="address-item">
		<div class="tlt">
			<span class="sl">家</span>
			<span class="sr">收货地址1</span>
		</div>
		<div class="content">
			收件人：{{ addressInfo.username }}<br>
			电话：{{ addressInfo.mobile }}<br>
			邮编：{{ addressInfo.post }}
		</div>
		<div class="desc">
			{{ addressInfo.address }}
		</div>
	</a>
{#	{% endfor %}#}
	{#<div class="address-item">
		<div class="tlt">
			<span class="sl">公司</span>
			<span class="sr">收货地址1</span>
		</div>
		<div class="content">
			收件人：大魔王<br>
			电话：13423141235<br>
			邮编：51800
		</div>
		<div class="desc">
			广东省 深圳市 龙岗区 布吉科技园路慢城7-4号16F.
		</div>
	</div>#}
	<a href="/user/receipt-address?type=update" class="address-item address-add">
		<div class="add">+</div>
		<div class="tip">添加收货地址</div>
	</a>
</div>
{% widget '_common:widget/common/actionsheet/actionsheet.tpl' %}
<div class="actionsheet-wrap" id="actionsheet-01">
	<div class="mask mask-transition" style="display: none;"></div>
	<div class="actionsheet">
		<button class="btn btn-white">通过相机拍照</button>
		<button class="btn btn-white mt20">通过相册选取</button>
		<button class="btn btn-red actionsheet-cancel mt40">取消</button>
	</div>
</div>