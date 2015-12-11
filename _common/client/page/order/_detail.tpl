{% extends '_common:page/_layout.tpl' %}
{% block head %}

{% endblock %}

{% block header %}
    {% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block body %}
    <div id="content">
        {% widget '_common:widget/order/order-detail.tpl' %}
    </div>
{% endblock %}


{% block footer %}
    {% if data.status == 'dfh' && data.from == 'bus'%}
        <div class="order-detail-footer">
            <a class="btn btn-red">确认发货</a>
        </div>
    {% elseif data.status == 'dfk' && data.from == 'bus'%}
        <div class="order-detail-footer">
            <a class="btn btn-white">提醒买家付款</a>
        </div>
    {% elseif data.status == 'yfh' && data.from == 'bus'%}
        <div class="order-detail-footer">
            <a class="btn btn-white">延迟收货</a>
        </div>
    {% elseif data.status == 'tkz' && data.from == 'bus'%}
        <div class="order-detail-footer">
            <a class="btn btn-red">确认退款</a><a class="btn btn-white">拒绝退款</a>
        </div>
    {% endif %}
    {% elseif data.status == 'ywc' && data.from == 'bus'%}
        <div class="order-detail-footer">
            <a class="btn btn-red">评价</a>
        </div>
    {% endif %}
{% endblock %}