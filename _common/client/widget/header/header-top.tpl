{% require '_common:widget/header/header.less' %}
<div class="header-top">
	<div class="header">
		{% if header.leftIcon %}
			<a  {% if header.leftUrl %}href="{{ header.leftUrl }}" {% endif %}class="left icon-60 icon-{{ header.leftIcon }}"></a>
		{% endif %}
		<div class="center fs-1">
			{{ header.title }}
		</div>
		{% if header.rightIcons.length == 2 %} {#搜索图标和消息图标#}
		<div class="right s-gup">
			{% for item in header.rightIcons %}
				<a {% if item.url %}href="{{ item.url }}" {% endif %}class="icon-60 icon-{{ item.icon }}"></a>
			{% endfor %}
		</div>
		{% endif %}
		{% if header.rightIcon %}
			<div class="right">
				<a {% if header.rightUrl %}href="{{ header.rightUrl }}"{% endif %}class="icon-60 icon-{{ header.rightIcon }}"></a>
			</div>
		{% endif %}
	</div>
</div>

{% script %}
	$(function(){
	require('_common:widget/header/header-top.js').init();
	})
{% endscript %}