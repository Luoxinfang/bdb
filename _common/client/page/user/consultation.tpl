{% extends '_common:page/layout.tpl' %}

{% block head %}
	{% require "_common:js/plugin/dropload/dropload.less" %}
	{% require "_common:js/plugin/dropload/dropload.js" %}
{% endblock %}

{% block header %}
	{% require '_common:less/user/consultation.less' %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
		<div class="consultation-dialog clearfix" style="display: none">
			<a href="/user/consultation?username=15989387109" class="li">
				<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="" class="user-img">
					<div class="text-content">
						<p>满绿翡翠吊坠</p>
						<div class="info">翡翠吊坠泊金钻石0.43克拉，阳绿翡翠 宝石吊坠 精工质多少</div>
					</div>
				<img src="/static/_common/icon/enter.png" alt="" class="enter-img">
			</a>
		</div>
		<div class="consultation-ul" id="chat-list" data-total="{{ total }}"  data-shopid="{{ consultInfo[0].shopid }}" data-userid="{{ consultInfo[0].userid }}">
			{% widget '_common:widget/user/consult-list.tpl' %}
		</div>
	{% block _common %}
	{% endblock %}
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
{% endblock %}

