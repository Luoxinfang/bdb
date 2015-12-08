{% extends '_common:page/_layout.tpl' %}
{% block head %}
    {% require '_common:less/public/show-template.less' %}
{% endblock %}

{% block header %}
    {% widget '_common:widget/header/header.tpl' %}
{% endblock %}

{% block body %}
    <div class="template">
        <div class="tpl-item">
            <div class="left-tpl"><div class="item-left"></div></div>
            <div class="item-right">
                <p class="fs-2 lf-1">静静的静</p>
                <p class="fs-3 lf-2">限时免费</p>
                <div>
                    <a href="" class="btn btn-white btn-l">预览</a>
                    <a href="" class="btn btn-red btn-2">使用</a>
                </div>

            </div>
        </div>
    </div>
    <div class="template">
        <div class="tpl-item">
            <div class="left-tpl"><div class="item-left"></div></div>
            <div class="item-right">
                <p class="fs-2 lf-1">静静的静</p>
                <p class="fs-3 lf-2">限时免费</p>
                <div>
                    <a href="" class="btn btn-white btn-l">预览</a>
                    <a href="" class="btn btn-red btn-2">使用</a>
                </div>

            </div>
        </div>
    </div>
{% endblock %}