{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header-top.tpl' %}
{% endblock %}

{% block content %}
	{% widget '_common:widget/banner/banner.tpl' %}
	<div class="info-group">
		<div class="li texts">活动描述：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX。</div>
		<div class="li">
			<span class="fl">送拍保证金</span>
			<span class="fr color2">￥2000</span>
		</div>
		<div class="li">
			<span class="fl">交易佣金</span>
			<span class="fr color2">成交额5%</span>
		</div>
	</div>
	<div class="info-group mt20">
		<div class="li">
			<span class="fl">拍品类型</span>
			<span class="fr">翡翠</span>
		</div>
		<div class="li">
			<span class="fl">起拍价</span>
			<span class="fr">不限</span>
		</div>
		<div class="li">
			<span class="fl">竞拍保证金</span>
			<span class="fr">不限</span>
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
			<span class="fr">2015-10-08 18：00</span>
		</div>
		<div class="li">
			<span class="fl">结束时间</span>
			<span class="fr">2015-10-12 18：00</span>
		</div>
	</div>
	<div class="bottom">
		<a href="" class="btn btn-red">报名参加</a>
	</div>
{% endblock %}
