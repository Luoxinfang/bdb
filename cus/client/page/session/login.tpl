{#继承common的登录组件#}
{% extends '_common:page/session/login.tpl' %}
{% block content %}
  {#{%require "cus:widget/session/login.less"%}#}
{% endblock %}