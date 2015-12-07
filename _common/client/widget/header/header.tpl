<div class="header-wrap">
	<div class="header">
		{% if header.leftIcon %}
		<a {% if header.leftUrl %}href="{{ header.leftUrl }}" {% endif %}class="left icon-60 icon-back"></a>
		{% endif %}
		<div class="center fs-1 fc-3">
			{{ header.title }} {#标题，默认：百多宝#}
		</div>
		{% if header.sort %} {#排序，默认：无，需要的话直接配置header.sort值#}
		<div class="right sort fs-2 fc-2">{{ header.sort }}</div>
		{% endif %}
		{% if header.rightIcon %}
			<div class="right">
				<a {% if header.rightUrl %}href="{{ header.rightUrl }}"{% endif %}class="icon-60 icon-{{ header.rightIcon }}"></a>
			</div>
		{% endif %}
	</div>
</div>