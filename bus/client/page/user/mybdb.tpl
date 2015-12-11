{% extends '_common:page/_layout.tpl' %}
{% block head%}
    {% require '_common:widget/auction/auction.less' %}
    {% require 'bus:widget/user/login/index.less' %}
{% endblock %}
{% block header %}
    {% widget '_common:widget/common/header/header-top.tpl' %}
{% endblock %}
{% block body %}
    <div class="bdb-list clearfix">
        <a href=""><i class="icon icon-01"></i><div class="w-1">拍卖行</div></a>
        <a href=""><i class="icon icon-02"></i><div class="w-1">店铺活动</div></a>
        <a href=""><i class="icon icon-03"></i><div class="w-1">货架</div></a>
        <a href=""><i class="icon icon-04"></i><div class="w-1">平台活动</div></a>
        <a href=""><i class="icon icon-05"></i><div class="w-2">订单管理</div></a>
        <a href=""><i class="icon icon-06"></i><div class="w-2">店铺</div></a>
    </div>
    <div class="switch-btn"><span class="r-1 on"></span><span class="r-1"></span></div>
{% endblock %}