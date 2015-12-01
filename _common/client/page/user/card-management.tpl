{% extends '_common:page/_layout.tpl' %}
{% block head %}
    <link rel="stylesheet" href="../../css/form.css"/>
{% endblock %}
{%  block body %}
    {% widget '_common:widget/header/header.tpl' %}
    <div id="content">
        <!--银行卡管理表单-->
        <div class="form">

            <ul class="form-ul">
                <li class='form-li-text'>
                    <div class="clearfix"><span class="fl card-name">建设银行卡</span><span class="fr card-type">储蓄卡</span></div>
                    <p class="tr">**** **** **** 514</p>
                </li>

            </ul>
            <ul class="form-ul">
                <li class='form-li-text'>
                    <div class="clearfix"><span class="fl card-name">中国民生银行卡</span><span class="fr card-type">储蓄卡</span></div>
                    <p class="tr">**** **** **** 234</p>
                </li>

            </ul>

            <a class="btn btn-red">添加银行卡</a>
        </div>
    </div>

{% endblock %}