<div class="header-wrap">
	<div class="header">
		{% if header.back %} {#是否有返回按钮，默认：有#}
		<a class="left icon-60 icon-back" {% if header.backUrl %}href="{{ header.backUrl }}"{% endif %} ></a>
		{% endif %}
		<span class="fs-1 fc-3">
			{{ header.title }} {#标题，默认：百多宝#}
		</span>
		{% if header.sort %} {#排序，默认：无，需要的话直接配置header.sort值#}
		<div class="right sort fs-2 fc-2">{{ header.sort }}</div>
		{% endif %}
		{#需要可以自己利用参数扩展#}
		{% if header.msg %} {#消息图标，默认：无，需要的话直接配置header.msg为true#}
			<div class="right">
				<span class="icon-60 icon-msg"></span>
			</div>
		{% endif %}
	</div>
</div>