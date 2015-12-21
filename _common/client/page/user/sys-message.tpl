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
      {% if items.msgcontent.length >40 %}
        <ul class="item">
          <li class="message_text">{{ items.msgcontent | replace("^(.{37}).*$", "$1") }}</li>
        </ul>
      {% elseif items.msgcontent.length >20 && items.msgcontent.length <40 %}
      <ul class="item">
        <li class="message_text">{{ items.msgcontent }}</li>
      </ul>
      {% else %}
        <ul class="item" style="text-align:center">
          <li class="message_text" >{{ items.msgcontent }}</li>
        </ul>
      {% endif %}
    {% endfor %}
  </div>
{% endblock %}

