<!--
	用户头像的组件
	photo:{
		imgurl: 头像的地址 默认是无
		notEditable: 不可以编辑? 默认是false
	}
-->
<div class="user-photo">
	<img id="photo" src="{{ photo.url }}" alt="">
	{% if !photo.notEditable %}
	<input type="file" class="input-file" accept="image/*">
	{% endif %}
</div>
{% script %}
require('photo.js').init();
{% endscript %}
