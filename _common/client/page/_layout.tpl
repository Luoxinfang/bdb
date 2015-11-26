<!doctype html>
{% html framework="_common:js/lib/mod.js" %}
  {% head %}
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{{app.description}}">
    <meta name="author" content="{{app.author}}">
    <title>{{app.title}}</title>
    {% require "_common:css/normalize.css" %}
    <script src="../js/inc/init-app.js?__inline"></script>
    {% require "_common:js/lib/zepto.js" %}
    {% block head %}{% endblock %}
  {% endhead %}

  {% body %}

    {% block body %}{% endblock %}

    {% script %}
    //设置屏幕的高度
    var height = Math.max(document.documentElement.clientHeight,
    document.body.offsetHeight);
    document.getElementById('container').style.height =  height + 'px';
    document.getElementById('container').style.position = 'relative';
    {% endscript %}
  {% endbody %}
{% endhtml %}