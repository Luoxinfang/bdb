{% extends '_common/page/layout.tpl' %}
{% block head %}
  {% require "_common:js/plugin/dropload/dropload.less" %}
  {% require "_common:js/plugin/dropload/dropload.js" %}
{% endblock %}

{% block header %}
  {% require "_common:less/user/settings.less" %}
  {% widget '_common:widget/common/header/header-nav.tpl' %}
{% endblock %}
{% block content %}
  <div id="sys-message" class="pb10">
    <div class="message-list" data-page="1">
      {% widget '_common:widget/user/sysMessage-list.tpl' %}
    </div>
  </div>
  {% script %}
  require('_common:widget/user/sys-message.js').init();
  {% endscript %}
{% endblock %}

