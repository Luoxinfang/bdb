<div class="banner">
	<div class="img">
		{% for item in banner %}
			<a class="li" style="background-image: url('{{ item.imgUrl }}');"></a>
		{% endfor %}
	</div>
	{% if banner.length > 1 %}
		<div class="nav">
			{% for item in banner -%}{% if loop.index == 1 -%}<a class="li cur"></a>{% else %}<a class="li"></a>{%- endif %}{%- endfor %}
		</div>
	{% endif %}
</div>