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
    {% require "_common:css/normalize.css" %}
    {% require "_common:css/global.css" %}
    <script src="../js/inc/init-app.js?__inline"></script>
    {% require "_common:js/lib/zepto.js" %}
    {% block head %}{% endblock %}
  {% endhead %}

  {% body %}
    <div class="body-container">
    {% block body %}{% endblock %}
    </div>
  {% endbody %}
{% endhtml %}