{% extends '_common:page/layout.tpl' %}
{% block header %}
	{% require "_common:less/user/settings.less" %}
	{% require "_common:less/public/form.less" %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}
{% block content %}
	<div class="push-list form pl0 pr0">
		<div class="push-item"><span>信息提醒</span>
			<div class="checkbox-wrap">
				<input type="checkbox" id="info" class="checkbox" checked>
				<label for="info"></label>
			</div>
		</div>
		<div class="mt">
			<div class="push-item"><span>声音</span>
				<div class="checkbox-wrap">
					<input type="checkbox" id="sound" class="checkbox" checked>
					<label for="sound"></label>
				</div>
			</div>
			<div href="" class="push-item"><span>震动</span>
				<div class="checkbox-wrap">
					<input type="checkbox" id="shock" class="checkbox" checked>
					<label for="shock"></label>
				</div>
			</div>
		</div>
		<div class="push-item mt"><span>勿扰模式</span>
			<div class="checkbox-wrap">
				<input type="checkbox" id="disturb" class="checkbox" checked>
				<label for="disturb"></label>
			</div>
		</div>
		<div class="mt clearfix">
			<div href="" class="push-item input-wrap"><span>开始时间</span>
				<span class="detailed-time"><i data-role="input">21:00</i></span><input id="staTime" type="time" value="10:00"></div>
			<div href="" class="push-item input-wrap"><span>结束时间</span>
				<span class="detailed-time"><i data-role="input">09:00</i></span><input id="endTime" type="time" value="09:00"></div>
		</div>
	</div>
	{% script %}
	require('_common:widget/settings/push-settings.js').init();
	{% endscript %}
{% endblock %}