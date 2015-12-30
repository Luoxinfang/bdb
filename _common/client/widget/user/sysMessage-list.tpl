{% for items in sysInfo %}
	<ul class="item">
		<li class="message_text">{{ items.msgcontent }}</li>
	</ul>
{% endfor %}