{% extends '_common:page/_layout.tpl' %}
{% block head %}
    <link rel="stylesheet" href="../../css/user/sys-set.css"/>
{% endblock %}
{%  block body %}
    {% widget '_common:widget/header/header.tpl' %}

    <div class="set-list">
                <a href="" class="set-item"><span >安全</span></a>
                <a href="" class="set-item"><span href="">推送设置</span></a>
                <a href="" class="set-item"><span href="">更新版本</span></a>
                <a href="" class="set-item"><span href="">关于百多宝</span></a>
                <a href="" class="set-item"><span href="">投诉建议</span></a>
    </div>

{% endblock %}