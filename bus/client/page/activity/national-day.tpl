{% extends '_common:page/_layout.tpl' %}
{% block head %}

{% endblock %}

{% block header %}
    {% widget '_common:widget/header/header.tpl' %}
    {% widget '_common:widget/header/header-tab.tpl' %}
{% endblock %}

{% block body %}
    <div id="content">
        {#{% widget '_common:widget/order/order-list.tpl' %}#}
    </div>
{% endblock %}

{% block footer %}
    {% require '_common:widget/footer/footer.less' %}
    <div class="footer">
        <button class="btn btn-red">添加商品</button>
    </div>
{% endblock %}