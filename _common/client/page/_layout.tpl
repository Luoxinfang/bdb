<!doctype html>
{% html framework="_common:js/lib/mod.js" %}
  {% head %}
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="百多宝--珠宝电商平台">
    <meta name="author" content="百多宝前海科技有限公司">
    <meta name="keyword" content="百多宝,珠宝,电商平台">
    <title>百多宝--珠宝电商平台</title>
    <link rel="apple-touch-icon" sizes="114x114" href="../icon/logo.png" />
    {% require "_common:css/weui.css" %}
    {% require "_common:less/normalize.less" %}
    {% require "_common:less/global.less" %}
    {% require "_common:js/lib/zepto.js" %}
    <script src="../js/inc/init-app.js?__inline"></script>
    {% block head %}{% endblock %}
  {% endhead %}

  {% body %}
    {% block beforeWrapper %}{% endblock %}
    <div class="wrapper">
      {% block header %}{% endblock %}
      <div class="body-container">
        {% block body %}{% endblock %}
      </div>
      {% block footer %}{% endblock %}
    </div>
    {% block afterWrapper %}{% endblock %}
  {% endbody %}
{% endhtml %}