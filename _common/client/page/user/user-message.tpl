{% extends '_common/page/layout.tpl' %}

{% block head %}
	{% require "_common:js/plugin/dropload/dropload.less" %}
	{% require "_common:js/plugin/dropload/dropload.js" %}
{% endblock %}
{% block header %}
	{% require '_common:less/user/settings.less' %}
	{% block _common %}
	{% endblock %}
{% endblock %}
{% block content %}
	<div class="message-dialog mt10" id="userInfo">
		{% for item in userMsg %}
			<a href="/user/consultation?shopname={{ item.shopname }}&&userid={{ item.userid }}&&shopid={{ item.shopid }}" class="li">
				<img src="http://img2.imgtn.bdimg.com/it/u=1341923083,1900907467&fm=23&gp=0.jpg" alt="" class="user-img">
				<div class="d-t ml20">
					<div class="clearfix">
						<span class="d-l u-name">{{ item.shopname }}</span>
						<span class="d-n u-time">{{ item.createtime | date('Y-m-d H:i:s', -480, 'CCT') }}</span>
					</div>
					<div class="clearfix mt10">
						<span class="info">{{ item.content }}</span>
					</div>
				</div>
				<img src="../../icon/enter.png" alt="" class="enter-img">
			</a>
		{% endfor %}
	</div>
{% endblock %}
