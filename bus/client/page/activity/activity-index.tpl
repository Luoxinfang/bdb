{% extends '_common:page/_layout.tpl' %}
{% block head %}
    {% require '_common:widget/activity/activity-index.less' %}
{% endblock %}

{% block header %}
    {% widget '_common:widget/header/header.tpl' %}
    {% widget '_common:widget/header/header-tab.tpl' %}
{% endblock %}

{% block body %}
    <div class="activity-list ">
        <div class="activity-item">
            <a href="/cus/auction/detail">
                <img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="">
            </a>
            <div class="z-1">
                <p class="s-1">宝石专场</p>
            </div>
        </div>
        <div class="activity-item">
            <a href="/cus/auction/detail">
                <img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="">
            </a>
            <div class="z-1">
                <p class="s-1">翡翠专场</p>
            </div>
        </div>
        <div class="activity-item">
            <a href="/cus/auction/detail">
                <img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="">
            </a>
            <div class="z-1">
                <p class="s-1">国庆专场</p>
            </div>
        </div>
        <div class="activity-item">
            <a href="/cus/auction/detail">
                <img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&amp;fm=21" alt="">
            </a>
            <div class="z-1">
                <p class="s-1">小唐专场</p>
            </div>
        </div>
        <div class="activity-item">
            <a href="/cus/auction/detail">
                <img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&amp;fm=21" alt="">
            </a>
            <div class="z-1">
                <p class="s-1">珠宝专场</p>
            </div>
        </div>
        <div class="activity-item">
            <a href="/cus/auction/detail">
                <img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&amp;fm=21" alt="">
            </a>
            <div class="z-1">
                <p class="s-1">玉石专场</p>
            </div>
        </div>

    </div>
{% endblock %}

{% block footer %}
    {% require '_common:widget/footer/footer.less' %}
    <div class="footer">
        <button class="btn btn-red">新增活动</button>
    </div>
{% endblock %}