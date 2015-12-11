{% extends '_common:page/layout.tpl' %}
{% block head %}
    <link rel="stylesheet" href="../../css/user/sys-set.css"/>
{% endblock %}
{%  block body %}
    {% widget '_common:widget/common/header/header.tpl' %}

    <div class="set-list">
                {% for item in header.set -%}
                    <a href="" class="set-item"><span >{{ item }}</span></a>
                {%- endfor %}
    </div>

{% endblock %}