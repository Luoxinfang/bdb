{% extends '_common/page/layout.tpl' %}

{% block head %}
	{% require 'cus:widget/index/index.less' %}
	{% require 'cus:widget/index/order.js' %}
{% endblock %}

{% block header %}
	{% widget '_common:widget/common/header/header-top.tpl' %}
{% endblock %}
{% block drawer %}
	<div class="drawer-user">
		<a class="photo" href="/user/personal">
			{% set photo = {notEditable : true, url:user.imgurl} %}
			{% widget '_common:widget/common/photo/photo.tpl' %}
		</a>
		{% if user %}
			<p class="name">{{ user.username }}</p>
			<div class="rank-wrap">{% widget '_common:widget/common/level/level.tpl' %}</div>
		{% endif %}
	</div>
	<div class="drawer-menu">
		<a href="/wallet">我的钱包</a>
		<a href="/order/list">我的订单</a>
		<a href="javascript:void(0);" class="">穿越到卖家版</a>
		<a href="/sys-settings">系统设置</a>
		<a href="javascript:void(0);" class="logout">退出登陆</a>
	</div>
{% endblock %}

{% block content %}
	<div class="index">
		<div class="banner-wrapper">
			{% widget '_common:widget/common/banner/banner.tpl' %}
		</div>
		<div class="category clearfix">
			<a href="/auction/list">
				<i class="icon icon-01"></i><br/>
				<span>翡翠</span>
			</a>
			<a href="/auction/list">
				<i class="icon icon-02"></i><br/>
				<span>黄金</span>
			</a>
			<a href="/auction/list">
				<i class="icon icon-03"></i><br/>
				<span>钻石</span>
			</a>
			<a href="/auction/list">
				<i class="icon icon-04"></i><br/>
				<span>更多</span>
			</a>
		</div>
		<div class="list">
			<div class="title">
				<span class="sl">平台活动</span>
				<a href="" class="sr">更多</a>
			</div>
			<div class="content clearfix">
				<div class="fl">
					<div class="col col-1">
						<a href="/auction/activity/10012">
							<img src="http://img5.imgtn.bdimg.com/it/u=261850186,726264967&fm=21&gp=0.jpg" alt="">
						</a>
						<div class="d-1">
							<p class="s-1">百多宝蓝宝石专场</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">723</span>
					</div>
					<div class="col col-1">
						<img src="http://img0.imgtn.bdimg.com/it/u=1116480518,1199756188&fm=21&gp=0.jpg" alt="">

						<div class="d-1">
							<p class="s-1">百多宝珍珠专场</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">431</span>
					</div>
				</div>
				<div class="fr">
					<div class="col col-2">
						<img src="http://img5.imgtn.bdimg.com/it/u=3841004861,3160684942&fm=21&gp=0.jpg" alt="">

						<div class="d-1">
							<p class="s-1">高端首饰拍卖专场</p>

							<p class="s-2 mb5">来自各国奢侈品牌的拍卖盛宴</p>

							<p class="s-2 bdt pt10">01/01-01/05</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">579</span>
					</div>
				</div>
			</div>
		</div>
		<div class="list list-02">
			<div class="title">
				<span class="sl">秒杀专场</span>
				<a href="" class="sr">更多</a>
			</div>
			<div class="content clearfix">
				<div class="fl">
					<div class="col col-1">
						<img src="http://img5.imgtn.bdimg.com/it/u=261850186,726264967&fm=21&gp=0.jpg" alt="">

						<div class="d-1">
							<p class="s-1">百多宝蓝宝石专场</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">723</span>
					</div>
					<div class="col col-1">
						<img src="http://img0.imgtn.bdimg.com/it/u=1116480518,1199756188&fm=21&gp=0.jpg" alt="">

						<div class="d-1">
							<p class="s-1">百多宝珍珠专场</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">431</span>
					</div>
				</div>
				<div class="fr">
					<div class="col col-2">
						<img src="http://img5.imgtn.bdimg.com/it/u=3841004861,3160684942&fm=21&gp=0.jpg" alt="">

						<div class="d-1">
							<p class="s-1">高端首饰拍卖专场</p>

							<p class="s-2 mb5">来自各国奢侈品牌的拍卖盛宴</p>

							<p class="s-2 bdt pt10">01/01-01/05</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">579</span>
					</div>
				</div>
			</div>
		</div>
		<div class="list list-03">
			<div class="title">
				<span class="sl">秒杀专场</span>
				<a href="" class="sr">更多</a>
			</div>
			<div class="content clearfix">
				<div class="fl">
					<div class="col col-1">
						<img src="http://img5.imgtn.bdimg.com/it/u=261850186,726264967&fm=21&gp=0.jpg" alt="">

						<div class="d-1">
							<p class="s-1">百多宝蓝宝石专场</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">723</span>
					</div>
					<div class="col col-1">
						<img src="http://img0.imgtn.bdimg.com/it/u=1116480518,1199756188&fm=21&gp=0.jpg" alt="">

						<div class="d-1">
							<p class="s-1">百多宝珍珠专场</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">431</span>
					</div>
				</div>
				<div class="fr">
					<div class="col col-2">
						<img src="http://img5.imgtn.bdimg.com/it/u=3841004861,3160684942&fm=21&gp=0.jpg" alt="">

						<div class="d-1">
							<p class="s-1">高端首饰拍卖专场</p>

							<p class="s-2 mb5">来自各国奢侈品牌的拍卖盛宴</p>

							<p class="s-2 bdt pt10">01/01-01/05</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">579</span>
					</div>
				</div>
			</div>
		</div>
		<div class="list list-04">
			<div class="title">
				<span class="sl">秒杀专场</span>
				<a href="" class="sr">更多</a>
			</div>
			<div class="content clearfix">
				<div class="fl">
					<div class="col col-1">
						<img src="http://img5.imgtn.bdimg.com/it/u=261850186,726264967&fm=21&gp=0.jpg" alt="">

						<div class="d-1">
							<p class="s-1">百多宝蓝宝石专场</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">723</span>
					</div>
					<div class="col col-1">
						<img src="http://img0.imgtn.bdimg.com/it/u=1116480518,1199756188&fm=21&gp=0.jpg" alt="">

						<div class="d-1">
							<p class="s-1">百多宝珍珠专场</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">431</span>
					</div>
				</div>
				<div class="fr">
					<div class="col col-2">
						<img src="http://img5.imgtn.bdimg.com/it/u=3841004861,3160684942&fm=21&gp=0.jpg" alt="">

						<div class="d-1">
							<p class="s-1">高端首饰拍卖专场</p>

							<p class="s-2 mb5">来自各国奢侈品牌的拍卖盛宴</p>

							<p class="s-2 bdt pt10">01/01-01/05</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">579</span>
					</div>
				</div>
			</div>
		</div>
		<div class="list list-05">
			<div class="title">
				<span class="sl">秒杀专场</span>
				<a href="" class="sr">更多</a>
			</div>
			<div class="content clearfix">
				<div class="fl">
					<div class="col col-1">
						<img src="http://img5.imgtn.bdimg.com/it/u=261850186,726264967&fm=21&gp=0.jpg" alt="">

						<div class="d-1">
							<p class="s-1">百多宝蓝宝石专场</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">723</span>
					</div>
					<div class="col col-1">
						<img src="http://img0.imgtn.bdimg.com/it/u=1116480518,1199756188&fm=21&gp=0.jpg" alt="">

						<div class="d-1">
							<p class="s-1">百多宝珍珠专场</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">431</span>
					</div>
				</div>
				<div class="fr">
					<div class="col col-2">
						<img src="http://img5.imgtn.bdimg.com/it/u=3841004861,3160684942&fm=21&gp=0.jpg" alt="">

						<div class="d-1">
							<p class="s-1">高端首饰拍卖专场</p>

							<p class="s-2 mb5">来自各国奢侈品牌的拍卖盛宴</p>

							<p class="s-2 bdt pt10">01/01-01/05</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">579</span>
					</div>
				</div>
			</div>
		</div>
		<div class="list list-06">
			<div class="title">
				<span class="sl">秒杀专场</span>
				<a href="" class="sr">更多</a>
			</div>
			<div class="content clearfix">
				<div class="fl">
					<div class="col col-1">
						<img src="http://img5.imgtn.bdimg.com/it/u=261850186,726264967&fm=21&gp=0.jpg" alt="">

						<div class="d-1">
							<p class="s-1">百多宝蓝宝石专场</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">723</span>
					</div>
					<div class="col col-1">
						<img src="http://img0.imgtn.bdimg.com/it/u=1116480518,1199756188&fm=21&gp=0.jpg" alt="">

						<div class="d-1">
							<p class="s-1">百多宝珍珠专场</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">431</span>
					</div>
				</div>
				<div class="fr">
					<div class="col col-2">
						<img src="http://img5.imgtn.bdimg.com/it/u=3841004861,3160684942&fm=21&gp=0.jpg" alt="">

						<div class="d-1">
							<p class="s-1">高端首饰拍卖专场</p>

							<p class="s-2 mb5">来自各国奢侈品牌的拍卖盛宴</p>

							<p class="s-2 bdt pt10">01/01-01/05</p>
						</div>
						<span class="collect-cnt icon-collect-cnt">579</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	{% script %}
	$(function(){
	require('cus:widget/index/index.js').init();
	})
	{% endscript %}
{% endblock %}

{% block drawer %}
	<div class="drawer-user">
		<a class="photo" href="/user/personal">
			{% widget '_common:widget/common/photo/photo.tpl' %}
		</a>

		<p class="name">大魔王</p>

		<div class="rank-wrap">{% widget '_common:widget/common/level/level.tpl' %}</div>
	</div>
	<div class="drawer-menu">
		<a href="/wallet">我的钱包</a>
		<a href="/order/list">我的订单</a>
		<a href="/bus">穿越到卖家版</a>
		<a href="/sys-settings">系统设置</a>
		<a href="javascript:void(0);" class="logout">退出登陆</a>
	</div>
{% endblock %}