{% extends '_common:page/_layout.tpl' %}
{% block head%}
    {% require '_common:widget/auction/auction.less' %}
    {% require 'bus:widget/user/login/index.less' %}
{% endblock %}
{% block header %}
    {% widget '_common:widget/header/header-top.tpl' %}
{% endblock %}
{% block body %}
    <div class="bdb-list">
        <a href=""><i class="icon icon-01"></i><div class="w-1">拍卖行</div></a>
        <a href=""><i class="icon icon-02"></i><div class="w-1">店铺活动</div></a>
        <a href=""><i class="icon icon-03"></i><div class="w-1">货架</div></a>
        <a href=""><i class="icon icon-04"></i><div class="w-1">平台活动</div></a>
        <a href=""><i class="icon icon-05"></i><div class="w-1">订单管理</div></a>
        <a href=""><i class="icon icon-06"></i><div class="w-1">店铺</div></a>
    </div>

{% endblock %}