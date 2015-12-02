{% extends '_common/page/_layout.tpl' %}

{% block header %}
	{% widget '_common:widget/header/header.tpl' %}
	{% widget '_common:widget/header/header-tab.tpl' %}
{% endblock %}

{% block body %}
	{% require '_common:widget/auction/auction.less' %}
	<div class="auction-list clearfix">
		<div class="auction-item">

		</div>
		<div class="auction-item"></div>
		<div class="auction-item"></div>
		<div class="auction-item"></div>
		<div class="auction-item"></div>
		<div class="auction-item"></div>
	</div>
{% endblock %}