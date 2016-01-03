{% extends '_common:page/layout.tpl' %}

{% block head %}
	{% require '_common:js/plugin/swiper/swiper.jquery.js' %}
	{% require '_common:js/plugin/swiper/swiper.less' %}
{% endblock %}

{% block header %}
	{% require '_common:widget/auction/auction.less' %}
	{% require 'bus:widget/index/index.less' %}
	{% widget '_common:widget/common/header/header-top.tpl' %}
{% endblock %}
{% block content %}
	<div class="swiper-container swiper">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<div class="bdb-list clearfix">
					<a href=""><i class="icon icon-01"></i>

						<div class="w-1">拍卖行</div>
					</a>
					<a href="/activity/store-activity"><i class="icon icon-02"></i>

						<div class="w-1">店铺活动</div>
					</a>
					<a href="/activity/bdb-activity">
						<i class="icon icon-03"></i>

						<div class="w-1">平台活动</div>
					</a>
					<a href="/store/manage">
						<i class="icon icon-04"></i>

						<div class="w-1">店铺</div>
					</a>
					<a href="">
						<i class="icon icon-05"></i>

						<div class="w-2">货架</div>
					</a>
					<a href="">
						<i class="icon icon-06"></i>
						<div class="w-2">订单管理</div>
					</a>
				</div>
			</div>
			<div class="swiper-slide">
				<div class="bdb-list clearfix">
					<a href="/wallet"><i class="icon icon-07"></i>

						<div class="w-1">财务中心</div>
					</a>
					<a href="/activity/store-activity"><i class="icon icon-08"></i>

						<div class="w-1">客服中心</div>
					</a>
					<a href="/settings/sys-settings"><i class="icon icon-09"></i>

						<div class="w-1">系统设置</div>
					</a>
				</div>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
	{% script %}
	require('../widget/index/index.js').init();
	{% endscript %}
{% endblock %}