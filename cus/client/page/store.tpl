{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header-top.tpl' %}

{% endblock %}

{% block body %}
	{% widget '_common:widget/banner/banner.tpl' %}
	{% require '_common:widget/store/store.less' %}
	<div class="store-head">
		<a href="/user/personal">
			{% widget '_common:widget/user/user-photo.tpl' %}
		</a>
		<div class="rank-wrap">{% widget '_common:widget/common/rank.tpl' %}</div>
		<i class="icon-22 icon-gold"></i>
		<i class="icon-22 icon-7day"></i>
		<i class="icon-22 icon-pei"></i>
	</div>
	{% require '_common:widget/auction/auction.less' %}
	<div class="auction-nav">
		<a href="/auction/category" class="category">全部分类</a>
		<a class="sort">默认排序</a>
		<a class="msg"></a>
	</div>

	<div class="auction-list clearfix">
		<div class="auction-item">
			<a href="/auction/detail">
				<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="">
			</a>
			<a href="/store" class="store mt10">
				<span>小唐的店铺</span>
				<i class="fr icon-22 icon-pei"></i>
				<i class="fr icon-22 icon-7day"></i>
				<i class="fr icon-22 icon-gold"></i>
			</a>
			<a href="" class="tlt">满绿翡翠吊坠</a>
			<p class="desc">翡翠吊坠铂金镶嵌 钻石0.43克拉</p>
			<p class="time mt10">01/01-01/05</p>
			<a class="collect-cnt icon-collect-cnt">431</a>
		</div>
		<div class="auction-item">
			<a href="/auction/detail?status=1">
				<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="">
			</a>
			<a href="/store" class="store mt10">
				<span>小唐的店铺</span>
				<i class="fr icon-22 icon-pei"></i>
				<i class="fr icon-22 icon-7day"></i>
				<i class="fr icon-22 icon-gold"></i>
			</a>
			<a href="" class="tlt">满绿翡翠吊坠</a>
			<p class="desc">翡翠吊坠铂金镶嵌 钻石0.43克拉</p>
			<p class="time mt10">01/01-01/05</p>
			<a class="collect-cnt icon-collect-cnt">431</a>
		</div>
		<div class="auction-item">
			<a href="/auction/detail?status=2">
				<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="">
			</a>
			<a href="/store" class="store mt10">
				<span>小唐的店铺</span>
				<i class="fr icon-22 icon-pei"></i>
				<i class="fr icon-22 icon-7day"></i>
				<i class="fr icon-22 icon-gold"></i>
			</a>
			<a href="" class="tlt">满绿翡翠吊坠</a>
			<p class="desc">翡翠吊坠铂金镶嵌 钻石0.43克拉</p>
			<p class="time mt10">01/01-01/05</p>
			<a class="collect-cnt icon-collect-cnt">431</a>
		</div>
		<div class="auction-item">
			<a href="/auction/detail?status=3">
				<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="">
			</a>
			<a href="/store" class="store mt10">
				<span>小唐的店铺</span>
				<i class="fr icon-22 icon-pei"></i>
				<i class="fr icon-22 icon-7day"></i>
				<i class="fr icon-22 icon-gold"></i>
			</a>
			<a href="" class="tlt">满绿翡翠吊坠</a>
			<p class="desc">翡翠吊坠铂金镶嵌 钻石0.43克拉</p>
			<p class="time mt10">01/01-01/05</p>
			<a class="collect-cnt icon-collect-cnt">431</a>
		</div>
		<div class="auction-item">
			<a href="/auction/detail">
				<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="">
			</a>
			<a href="/store" class="store mt10">
				<span>小唐的店铺</span>
				<i class="fr icon-22 icon-pei"></i>
				<i class="fr icon-22 icon-7day"></i>
				<i class="fr icon-22 icon-gold"></i>
			</a>
			<a href="" class="tlt">满绿翡翠吊坠</a>
			<p class="desc">翡翠吊坠铂金镶嵌 钻石0.43克拉</p>
			<p class="time mt10">01/01-01/05</p>
			<a class="collect-cnt icon-collect-cnt">431</a>
		</div>
		<div class="auction-item">
			<a href="/auction/detail">
				<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="">
			</a>
			<a href="/store" class="store mt10">
				<span>小唐的店铺</span>
				<i class="fr icon-22 icon-pei"></i>
				<i class="fr icon-22 icon-7day"></i>
				<i class="fr icon-22 icon-gold"></i>
			</a>
			<a href="" class="tlt">满绿翡翠吊坠</a>
			<p class="desc">翡翠吊坠铂金镶嵌 钻石0.43克拉</p>
			<p class="time mt10">01/01-01/05</p>
			<a class="collect-cnt icon-collect-cnt">431</a>
		</div>
	</div>
{% endblock %}
