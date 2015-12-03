{% extends '_common:page/_layout.tpl' %}

{% block header %}
	{% widget '_common:widget/header/header-top.tpl' %}
	{% widget '_common:widget/banner/banner.tpl' %}
	{% require '_common:widget/store/store.less' %}
	<div class="store-head">
		{% widget '_common:widget/user/user-photo.tpl' %}
		<div class="rank"></div>
		<i class="icon-22 icon-gold"></i>
		<i class="icon-22 icon-pei"></i>
	</div>
{% endblock %}