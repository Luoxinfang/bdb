<!doctype html>
{% html framework="_common:js/lib/mod.js" %}
  {% head %}
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{{app.description}}">
    <meta name="author" content="{{app.author}}">
    <title>{{app.title}}</title>
    {% require "_common:css/weui.css" %}
    {% require "_common:less/normalize.less" %}
    {% require "_common:less/global.less" %}
    {% require "_common:js/lib/zepto.js" %}
    <script src="../js/inc/init-app.js?__inline"></script>
    {% block head %}{% endblock %}
  {% endhead %}

  {% body %}
    <div class="wrapper">
      {% block header %}{% endblock %}
      <div class="body-container">
        {% block body %}{% endblock %}
      </div>
      {% block footer %}{% endblock %}
    </div>
  {% endbody %}
{% endhtml %}