{% extends '_common/page/layout.tpl' %}
{% block head%}
  {% require "_common:less/user/settings.less" %}
{% endblock %}
{% block header %}
  {% widget '_common:widget/common/header/header-nav.tpl' %}
{% endblock %}
{% block content %}
  <div class="message-list">
    <ul class="item">
      <li class="message_text">亲爱的用户，你关注的xxx拍品现在已始拍卖，不要错过哦!</li>
    </ul>
    <ul class="item">
      <li><li class="message_text">亲爱的用户，你关注的xxx拍品现在已始拍卖，不要错过哦!</li></li>
    </ul>
    <ul class="item">
      <li><li class="message_text">亲爱的用户，你关注的xxx拍品现在已始拍卖，不要错过哦!</li></li>
    </ul>
    <ul class="item">
      <li><li class="message_text" style="color: #9a9a9a"> 亲爱的用户，欢迎加入百多宝平台。</li></li>
    </ul>
    </div>
{% endblock %}

