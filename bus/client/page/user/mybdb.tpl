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
        <a href=""><i class="icon icon-01"></i><span>拍卖行</span></a>
        <a href=""><i class="icon icon-02"></i><span>店铺活动</span></a>
        <a href=""><i class="icon icon-03"></i><span>货架</span></a>
        <a href=""><i class="icon icon-04"></i><span>平台活动</span></a>
        <a href=""><i class="icon icon-05"></i><span>订单管理</span></a>
        <a href=""><i class="icon icon-06"></i><span>店铺</span></a>
    </div>

{% endblock %}