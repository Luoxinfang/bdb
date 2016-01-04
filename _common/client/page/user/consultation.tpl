{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% require '_common:less/user/consultation.less' %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
		<div class="consultation-dialog clearfix">
			<a href="/user/consultation?username=15989387109" class="li">
				<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="" class="user-img">
					<div class="text-content">
						<p>满绿翡翠吊坠</p>
						<div class="info">翡翠吊坠泊金钻石0.43克拉，阳绿翡翠 宝石吊坠 精工质多少</div>
					</div>
				<img src="/static/_common/icon/enter.png" alt="" class="enter-img">
			</a>
		</div>
	<div class="consultation-ul">
	<div class="consultation-sTime">12:02</div>
	<div class="consultation-li other clearfix">
		<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="" class="img fl ml20">
		<div class="info">掌柜你好！</div>
	</div>
	<div class="consultation-sTime">12:02</div>
	<div class="consultation-li self clearfix">
		<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="" class="img fr mr20">
		<div class="info">你好！请问有什么可以帮到您？</div>
	</div>
	<div class="consultation-sTime">12:02</div>
	<div class="consultation-li other clearfix">
		<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="" class="img fl ml20">
		<div class="info">请问你的千年古玉有证书吗？</div>
	</div>
	<div class="consultation-sTime">12:02</div>
	<div class="consultation-li self clearfix">
		<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="" class="img fr mr20">
		<div class="info">亲！我们家的商品全部都有证书的</div>
	</div>
	</div>
{% endblock %}
{% block footer %}
		<div class="footer-content clearfix">
		<img src="/static/_common/icon/add.png" alt="" class="add-img"/>
		<img src="/static/_common/icon/iocn-express.png" alt="" class="express-img"/>
		<div class="send-text">
			<textarea class="area" id="content"></textarea>
		</div>
		<button class="btn btn-red send-out" id="btn-send">发送</button>
	</div>
	{% block cus %}
	{% endblock %}
{% endblock %}

