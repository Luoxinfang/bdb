{% extends '_common:page/_layout.tpl' %}
{% block head %}

{% endblock %}

{% block header %}
    {% widget '_common:widget/header/header.tpl' %}
    {% widget '_common:widget/header/header-tab.tpl' %}
{% endblock %}

{% block body %}

    {% widget '_common:widget/auction/auction-list.tpl' %}

{% endblock %}