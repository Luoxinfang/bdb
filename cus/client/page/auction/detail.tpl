{% extends '_common:page/_layout.tpl' %}

{% block header %}
	{% widget '_common:widget/header/header-top.tpl' %}
	{% widget '_common:widget/banner/banner.tpl' %}
	{% require '_common:widget/auction/auction.less' %}
	<div class="auction-detail">
		<div class="store">
			<div class="user-img"></div>
			<span class="name">小唐的店铺</span>
			<span class="time">开始时间 04:36</span>
		</div>
	</div>
{% endblock %}