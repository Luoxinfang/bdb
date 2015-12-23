<div class="header-wrap">
	<div class="header-content">
		{% if header.leftIcon %}
			{% if header.leftUrl %}
				<a href="{{ header.leftUrl }}" class="left icon-60 icon-back"></a>
			{% else %}
				<a href="javascript:history.back();" class="left icon-60 icon-back"></a>
			{% endif %}
		{% endif %}
		<div class="center fs-1 fc-3">{{ header.title }}</div>{#标题，默认：百多宝#}
		{% if header.rightText %}{#右侧文字或连接，默认：无#}
			<a {% if header.rightUrl %}href="{{ header.rightUrl }}"{% endif %}class="right fs-2 fc-2 rightText">{{ header.rightText }}</a>
		{% endif %}
		{% if header.rightSort %} {#排序，默认：无，需要的话直接配置header.rightSort值#}
			<a class="right sort fs-2 fc-2">
				<span>{{ header.rightSort.default }}</span>
			</a>
			<div class="header-sort">
				<div class="sort-mask"></div>
				<div class="sort-list">
					{% for item in header.rightSort.sorts %}
						<a>{{ item }}</a>
					{% endfor %}
				</div>
			</div>
		{% endif %}
		{% if header.rightFilter %} {#筛选，默认：无，需要的话直接配置header.rightSort值#}
			<a class="right filter fs-2 fc-2">
				<span data-filter="{{ header.rightFilter.cur.val }}">{{ header.rightFilter.cur.text }}</span>
			</a>
			<div class="header-filter">
				<div class="filter-mask"></div>
				<div class="filter-list">
					{% for item in header.rightFilter.filters %}
						<a data-filter="{{ item.val }}">{{ item.text }}</a>
					{% endfor %}
				</div>
			</div>
		{% endif %}
		{% if header.rightIcon %}
			<div class="right">
				<a {% if header.rightUrl %}href="{{ header.rightUrl }}"{% endif %}class="icon-60 icon-{{ header.rightIcon }}"></a>
			</div>
		{% endif %}
	</div>
</div>