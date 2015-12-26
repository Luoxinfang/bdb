{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header-top.tpl' %}
{% endblock %}

{% block content %}
	<div class="banner-wrapper">
		{% widget '_common:widget/common/banner/banner.tpl' %}
	</div>
	{% require '_common:widget/activity/detail.less' %}
	{% require '_common:less/public/form.less' %}
	<div class="info-group">
		<div class="li texts">活动描述：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX。</div>
		<div class="li">
			<span class="fl">送拍保证金</span>
			<span class="fr color2">￥{{ detailInfo.joinmoney }}</span>
		</div>
		<div class="li">
			<span class="fl">交易佣金</span>
			<span class="fr color2">成交额{{ detailInfo.frousermoney }}</span>
		</div>
	</div>
	<div class="info-group mt20">
		<div class="li">
			<span class="fl">拍品类型</span>
			<span class="fr">翡翠</span>
		</div>
		<div class="li">
			<span class="fl">起拍价</span>
			<span class="fr">{{ detailInfo.price }}</span>
		</div>
		<div class="li">
			<span class="fl">竞拍保证金</span>
			<span class="fr">{{ detailInfo.joinmoney }}</span>
		</div>
		<div class="li">
			<span class="fl">打赏方式</span>
			<span class="fr">竞拍保证金等额打赏</span>
		</div>
	</div>
	<div class="info-group mt20">
		<div class="li">
			<span class="fl">报名截止日期</span>
			<span class="fr">2015-10-07 18：00</span>
		</div>
		<div class="li">
			<span class="fl">开始时间</span>
			<span class="fr">{{ detailInfo.starttime }}</span>
		</div>
		<div class="li">
			<span class="fl">结束时间</span>
			<span class="fr">{{ detailInfo.endtime }}</span>
		</div>
	</div>
	<div class="bottom">
		<a class="btn btn-red" id="btn-join">报名参加</a>
	</div>
	{% block bus %}
	{% endblock %}
{% endblock %}
