{% extends '_common:page/_layout.tpl' %}
{% block head %}

{% endblock %}

{% block header %}
    {% widget '_common:widget/header/header.tpl' %}
{% endblock %}

{% block body %}
    <div id="content">
        {% widget '_common:widget/order/order-list.tpl' %}
    </div>
{% endblock %}