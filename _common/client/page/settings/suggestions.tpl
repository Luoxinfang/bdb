{% extends '_common:page/layout.tpl' %}

{% block head %}
  {% require "_common:less/public/address.less" %}
{% endblock %}

{% block header %}
  {% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}
{%  block content %}
  <div id="content">
    <div class="form">
      <ul class="form-ul">
        <li class='form-li-input form-li-textarea'>
          <textarea id="problem" placeholder="问题说明..."></textarea>
        </li>
      </ul>
      <a class="icon-add btn-file mt-40 mb60"><input type="file" class="file" accept="image/*"></a>
      <a class="btn btn-red" id="btn-submit">提交</a>
    </div>
  </div>
  {% script %}
  require('_common:widget/settings/suggestions.js').init();
  {% endscript %}
{% endblock %}