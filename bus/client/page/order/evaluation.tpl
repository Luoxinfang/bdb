{% extends '_common:page/_layout.tpl' %}
{% block head %}

{% endblock %}

{% block header %}
    {% widget '_common:widget/header/header.tpl' %}
{% endblock %}

{% block body %}
    <div id="content">
        {% require 'bus:widget/order/evaluation/index.less' %}
        <div class="buyer-info clearfix">
            <div class="img">{% widget '_common:widget/user/user-photo.tpl' %}</div>
            <p class="info fs-2">买家姓名：老刘</p>
        </div>
        <div class="order-list">
            <ul>
                {% for item in data.dataList %}
                    <li>
                        {#商品信息#}
                        <div class="commodity">
                            <div class="order-img">
                                <img src="../../widget/order/evaluation/icon/demo.png"/>
                            </div>
                            <div class="order-content">
                                <p>{{ item.name }}</p>
                                <p>￥{{ item.money }}</p>
                                <p>×{{ item.num }}</p>
                            </div>
                        </div>
                        {#评论区域#}
                        <div class="evaluation">

                        </div>
                    </li>
                {% endfor %}
            </ul>
        </div>
    </div>
{% endblock %}