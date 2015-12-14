{% extends '_common:widget/auction/auction-item.tpl' %}

{% block beforeItem %}
	{% if shelvesEditable %}
		<input type="checkbox" name="shelves">
		<div class="mask"></div>
	{% endif %}
{% endblock %}

