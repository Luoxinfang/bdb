{% extends '_common/page/layout.tpl' %}
{% block head%}
  {% require "_common:less/user/settings.less" %}
{% endblock %}
{% block header %}
  {% widget '_common:widget/common/header/header-nav.tpl' %}
{% endblock %}
{% block content %}
  <div class="message-list">
    {% for items in sysInfo %}
        <ul class="item">
          <li class="message_text">{{ items.msgcontent }}</li>
        </ul>
    {% endfor %}
  </div>
{% endblock %}

