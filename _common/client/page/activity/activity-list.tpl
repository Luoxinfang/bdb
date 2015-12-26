{% extends '_common:page/layout.tpl' %}
{% block head %}
	{% require '_common:widget/activity/activity-index.less' %}
{% endblock %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
	{% widget '_common:widget/common/header/header-tab.tpl' %}
{% endblock %}

{% block content %}
	<div class="activity-list ">
		{% for item in activityList %}
			<div class="activity-item">
				<a href="/activity/detail?activename={{ item.activename }}">
					<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="">
				</a>
				<div class="z-1">
					<p class="s-1">{{ item.activename }}</p>
				</div>
			</div>
		{% endfor %}
	</div>
	{% block bus %}
	{% endblock %}
{% endblock %}
