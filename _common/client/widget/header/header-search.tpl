{% require '_common:widget/header/header.less' %}

<div class="header-wrap">
	<div class="header">
		{% if header.back %} {#是否有返回按钮，默认：有#}
			<a class="left icon-60 icon-back" {% if header.backUrl %}href="{{ header.backUrl }}"{% endif %} ></a>
		{% endif %}
		<div class="search-box">
			<input type="text" placeholder="关键字">
			<a class="reset"></a>
			<a class="search btn btn-red">搜索</a>
		</div>
	</div>
</div>

{% script %}
$(function(){
	require('_common:widget/header/header-search.js').init();
})
{% endscript %}