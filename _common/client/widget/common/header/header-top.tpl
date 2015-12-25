{% require '_common:widget/common/header/header.less' %}
<div class="header header-top">
	<div class="header-content">
		{% if header.leftIcon == 'back' %}
			<a href="javascript:history.back();" data-role="btn-back"
				 class="left icon-60 icon-{{ header.leftIcon }}"></a>
		{% elseif header.leftIcon %}
			<a {% if header.leftUrl %} href="{{ header.leftUrl }}" {% endif %}
					class="left icon-60 icon-{{ header.leftIcon }}"></a>
		{% endif %}
		<div class="center fs-1">{{ header.title }}</div>
		{% if header.rightIcons.length == 2 %} {#搜索图标和消息图标#}
			<div class="right s-gup">
				{% for item in header.rightIcons %}
					{% if item.icon=='collect' %}
						<a {% if item.url %}href="{{ item.url }}" {% endif %}class="icon-60 icon-{{ item.icon }} " id="collect"></a>
					{% else %}
						<a {% if item.url %}href="{{ item.url }}" {% endif %}class="icon-60 icon-{{ item.icon }}" id="share"></a>
					{% endif %}
				{% endfor %}
			</div>
		{% endif %}
		{% if header.rightIcon %}
			<div class="right">
				<a {% if header.rightUrl %}href="{{ header.rightUrl }}"
				   {% endif %}class="icon-60 icon-{{ header.rightIcon }}"></a>
			</div>
		{% endif %}
	</div>
</div>

{% script %}
	require('header-top.js').init();
{% endscript %}