<div class="header-wrap">
	<div class="header">
		{% if headerBack %} {#是否有返回按钮，默认：有#}
		<div class="left icon-60 icon-back"></div>
		{% endif %}
		<span class="fs-1 fc-3">
			{{ headerTitle }} {#标题，默认：百多宝#}
		</span>
		{% if headerSort %} {#排序，默认：无，需要的话直接配置headerSort值#}
		<div class="right sort fs-2 fc-2">{{ headerSort }}</div>
		{% endif %}
		{#需要可以自己利用参数扩展#}
		{% if headerMsg %} {#消息图标，默认：无，需要的话直接配置headerMsg为true#}
			<div class="right">
				<span class="icon-60 icon-msg"></span>
			</div>
		{% endif %}
	</div>
</div>