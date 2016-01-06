{% extends '_common:page/layout.tpl' %}

{% block header %}
  {% require "_common:less/public/form.less" %}
  {% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}
{%  block content %}
  <div class="form">
    <textarea name="comment" class="textarea" placeholder="问题说明..."></textarea>
    <div class="clearfix mt10">
      <a class="icon-add btn-file mt10 mr10"><input type="file" name="file" class="file" accept="image/*" multiple></a>
    </div>
    <a id="complain" class="btn btn-red btn-disabled mt40">提交</a>
  </div>
  {% script %}
  require('_common:widget/settings/suggestions.js').init();
  {% endscript %}
{% endblock %}