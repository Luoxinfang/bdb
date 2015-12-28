<div class="header-tab">
	<div class="clearfix tab-{{ header.tab.list.length }}">
		{% for item in header.tab.list %}
			{% if header.tab.cur == item.id %}
				<a class="on" id="{{ item.id }}">{{ item.val }}</a>
			{% else %}
				<a id="{{ item.id }}">{{ item.val }}</a>
			{% endif %}
		{% endfor %}
	</div>
</div>