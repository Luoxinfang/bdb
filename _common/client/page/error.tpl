{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	{% require '_common:widget/result/result.less' %}
	<div class="result">
		{% if rs.status == '60040' %}
			<div class="content">
				<div class="tc mt70"><div class="icon-200 icon-fail"></div></div>
				<div class="tip-error mt40">因为20分钟内连续3次密码错误，<br>请120分钟后再尝试</div>
				<div class="tip">{{ rs.msg }}</div>
			</div>
			<div class="tc">
				<a href="/" class="btn btn-white btn-w240">返回首页</a>
			</div>
		{% elseif rs.status == '' %}

		{% else %}
			<div class="content">
				<div class="tc mt70"><div class="icon-200 icon-fail"></div></div>
				<div class="tip-error mt40">{{ rs.msg }}</div>
			</div>
			<div class="tc">
				<a href="javascript:history.back();" class="btn btn-white btn-w240">返回</a>
			</div>
		{% endif %}
	</div>
{% endblock %}