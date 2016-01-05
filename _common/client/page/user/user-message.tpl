{% extends '_common/page/layout.tpl' %}
{% block header %}
	{% require '_common:less/user/settings.less' %}
	{% widget '_common:widget/common/header/header-nav.tpl' %}
{% endblock %}
{% block content %}
	<div class="message-dialog mt10" style="min-height:0">
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
	{% block cus %}
	{% endblock %}
{% endblock %}
