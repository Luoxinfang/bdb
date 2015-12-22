{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header-top.tpl' %}
{% endblock %}

{% block content %}
	{% require '_common:widget/user/user.less' %}
	<div class="personal-bg"></div>

	<div class="personal-head">
		<div class="user-photo-wrap">
			{% widget '_common:widget/user/user-photo.tpl' %}
		</div>
		<div class="rank-wrap">
			{% widget '_common:widget/common/rank.tpl' %}
		</div>
	</div>
	<div class="info-group">
		<a href="/user/check-name" class="li icon-right">
			<span class="fl">实名认证</span>
		</a>
	</div>
	<div class="info-group mt20">
		<a href="/user/update-info?type=nick&updateVal={{ userInfo.nickname }}" class="li">
			<span class="fl">昵称</span>
			<span class="fr">{{ userInfo.nickname }}</span>
		</a>

		<div class="li">
			<span class="fl">帐号</span>
			<span class="fr">{{ userInfo.username }}</span>
		</div>
		<div class="li">
			<span class="fl">生日</span>
			<span class="fr">{{ userInfo.birthday }}</span>
		</div>
		<div class="li input-wrap">
			<span class="fl">性别</span>
			<span class="fr"><i data-role="input">{% if userInfo.sex == 'F' %}女{% else %}男{% endif %}</i></span>
			<select id="sex">
				<option value="M">男</option>
				<option value="F">女</option>
			</select>
		</div>
		<a href="/user/update-info?type=qq&updateVal={{ userInfo.othercount }}" class="li">
			<span class="fl">QQ账号</span>
			<span class="fr">{{ userInfo.othercount }}</span>
		</a>
	</div>
	<div class="address-list clearfix">
		{% for item in addressInfo %}
			<a href="/user/receipt-address?type=delete&addressId={{ item.addressid }}" class="address-item">
				<div class="tlt">
					<span class="sl">家</span>
					<span class="sr">收货地址1</span>
				</div>
				<div class="content tl">
					收件人：{{ item.username }}<br>
					电话：{{ item.mobile }}<br>
					邮编：{{ item.post }}
				</div>
				<div class="desc tl">
					{{ item.address }}
				</div>
			</a>
		{% endfor %}
		<a href="/user/receipt-address?type=update" class="address-item address-add">
			<div class="add">+</div>
			<div class="tip">添加收货地址</div>
		</a>
	</div>
	{% script %}
		require('cus:widget/user/personal.js').init();
	{% endscript %}
{% endblock %}