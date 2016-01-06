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
    <div class="message-list" id="sysInfo" data-total="{{ total }}">
      {% widget '_common:widget/user/sysInfo-list.tpl' %}
    </div>
  {% script %}
  require('_common:widget/user/sys-message.js').init();
  {% endscript %}
{% endblock %}

