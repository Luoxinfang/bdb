{% extends '_common:page/layout.tpl' %}
{% block head %}
	<link rel="stylesheet" href="../less/result.less?__inline">
{% endblock %}
{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}
{% block content %}
{# type: success error warn #}
<div class="result {{ type }}">
	<div class="pt70">
		<div class="icon"></div>
	</div>
	l
	<div class="txt mt40">
		{% if content.tit %}
			<div class="tit">{{ content.tit }}</div>
		{% endif %}
		<div class="msg">{{ content.msg }}</div>
	</div>
	<div class="btn ">
		<div class="tc">
			<a href="{{ btn.href||'/' }}" class="btn btn-white btn-w240">
				{{ btn.txt||'返回首页' }}
			</a>
		</div>
	</div>
	<script>
		{% if autoJump %}
		setTimeout(function () {
			location.replace("{{ btn.href||'/' }}");
		}, 3000);
		{%  endif %}
	</script>
	{% block result-content %}{% endblock %}
</div>
{% endblock %}