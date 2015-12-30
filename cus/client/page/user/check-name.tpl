{% extends '_common:page/layout.tpl' %}

{% block header %}
	{% require "_common:less/user/check.less" %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
	<div id="content">
		<div class="form">
			<ul class="form-ul">
				<li class='form-li-input'>
					<input type="text" id="realname" placeholder="请输入真实姓名" minlength="2" maxlength="4"/>
				</li>
				<li class='form-li-input'>
					<input type="text" id="cardno" placeholder="请输入身份证号" />
				</li>
			</ul>
			<div class="remind mb30">请正确输入相关信息,该信息是找回用户名和密码的关键信息。</div>
			<div class="cardno">
				<p class="mb10">请上传身份证照片</p>
				<div class="cardno-img">
					<div class="collet">示例图</div>
					<div class="upload"></div>
				</div>
			</div>
			<div class="form-text">
				注意事项：<br>
				1,白色背景,本人持身份证免冠照;<br>
				2,持证人面部清晰,身份证文字清晰;<br>
			</div>
	</div>
	{% script %}
	require("cus:widget/user/check-name.js").init();
	{% endscript %}
{% endblock %}