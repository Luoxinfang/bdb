{% extends '_common:page/layout.tpl' %}
{% block head %}
    {% require "_common:less/user/settings.less" %}
{% endblock %}
{%  block body %}
    {% widget '_common:widget/common/header/header.tpl' %}

    <div class="set-list">
                {% for item in header.set -%}
                    <a href="" class="set-item"><span >{{ item }}</span></a>
                {%- endfor %}
    </div>

{% endblock %}