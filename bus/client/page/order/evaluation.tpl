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
                            <ul class="eva-icon">
                                {#选中效果加on类#}
                                <li class="eva-good on">好评</li>
                                <li class="eva-commonly">中评</li>
                                <li class="eva-bad">差评</li>
                            </ul>
                            <div class="eva-text">
                                <textarea id="eva_text" placeholder="说点什么..."></textarea>
                            </div>
                        </div>
                    </li>
                {% endfor %}
            </ul>
        </div>
    </div>
{% endblock %}