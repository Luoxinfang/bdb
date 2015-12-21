{% extends '_common:page/layout.tpl' %}
{% block head %}
	{% require '_common:widget/activity/activity-index.less' %}
{% endblock %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
	{% widget '_common:widget/common/header/header-tab.tpl' %}
{% endblock %}

{% block content %}
	<div class="activity-list ">
		<div class="activity-item">
			<a href="/cus/auction/detail">
				<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="">
			</a>
			<div class="z-1">
				<p class="s-1">宝石专场</p>
			</div>
		</div>
		<div class="activity-item">
			<a href="/cus/auction/detail">
				<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="">
			</a>
			<div class="z-1">
				<p class="s-1">翡翠专场</p>
			</div>
		</div>
		<div class="activity-item">
			<a href="/cus/auction/detail">
				<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="">
			</a>
			<div class="z-1">
				<p class="s-1">国庆专场</p>
			</div>
		</div>
		<div class="activity-item">
			<a href="/cus/auction/detail">
				<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&amp;fm=21" alt="">
			</a>
			<div class="z-1">
				<p class="s-1">小唐专场</p>
			</div>
		</div>
		<div class="activity-item">
			<a href="/cus/auction/detail">
				<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&amp;fm=21" alt="">
			</a>
			<div class="z-1">
				<p class="s-1">珠宝专场</p>
			</div>
		</div>
		<div class="activity-item">
			<a href="/cus/auction/detail">
				<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&amp;fm=21" alt="">
			</a>
			<div class="z-1">
				<p class="s-1">玉石专场</p>
			</div>
		</div>
	</div>
{% endblock %}