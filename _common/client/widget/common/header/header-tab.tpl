
<div class="header-tab tab-{{ header.tab.length }}">
	{% for item in header.tab %}
		{% if item.default %}
			<a class="on" id="{{ item.id }}">{{ item.val }}</a>
		{% else %}
			<a id="{{ item.id }}">{{ item.val }}</a>
		{% endif %}
	{% endfor %}
</div>