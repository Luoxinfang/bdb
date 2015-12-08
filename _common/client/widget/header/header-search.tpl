{% require '_common:widget/header/header.less' %}

<div class="header-wrap">
	<div class="header">
		{% if header.leftIcon %}
			<a {% if header.leftUrl %}href="{{ header.leftUrl }}" {% endif %}class="left icon-60 icon-back"></a>
		{% endif %}
		<div class="search-box">
			<input type="text" placeholder="关键字">
			<a class="reset"></a>
			<a class="search btn btn-red">搜索</a>
		</div>
	</div>
</div>

{% script %}
	require('header-search.js').init();
{% endscript %}