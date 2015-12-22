{% extends '_common:page/layout.tpl' %}
{% block header %}
	{% require "_common:less/user/settings.less" %}
	{% require "_common:less/public/form.less" %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}
{% block content %}
	<div class="push-list form pl0 pr0">
		<div href="" class="push-item"><span>信息提醒</span>
			<div class="checkbox-wrap">
				<input type="checkbox" id="checkbox-1" class="checkbox" checked>
				<label for="checkbox-1"></label>
			</div>
		</div>
		<div class="mt">
			<div href="" class="push-item"><span>声音</span>
				<div class="checkbox-wrap">
					<input type="checkbox" id="checkbox-2" class="checkbox" checked>
					<label for="checkbox-2"></label>
				</div>
			</div>
			<div href="" class="push-item"><span>震动</span>
				<div class="checkbox-wrap">
					<input type="checkbox" id="checkbox-3" class="checkbox" checked>
					<label for="checkbox-3"></label>
				</div>
			</div>
		</div>
		<div href="" class="push-item mt"><span>勿扰模式</span>
			<div class="checkbox-wrap">
				<input type="checkbox" id="checkbox-4" class="checkbox" checked>
				<label for="checkbox-4"></label>
			</div>
		</div>
		<div class="mt clearfix">
			<div href="" class="push-item"><span>开始时间</span>
				<span class="detailed-time">晚上10:00</span><input type="time" value="10:00"></div>
			<div href="" class="push-item"><span>结束时间</span>
				<span class="detailed-time">早上09:00</span><input type="time" value="10:00"></div>
		</div>
	</div>
{% endblock %}