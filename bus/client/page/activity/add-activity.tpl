{% extends '_common:page/_layout.tpl' %}
{% block head %}
    {% require '_common:widget/activity/add-activity.less' %}
{% endblock %}

{% block header %}
    {% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block body %}
    <div id="content">
        <div class="form">
            <ul class="form-ul">
                <li class='form-li-input'>
                    <input type="text" id="name" placeholder="活动名称" minlength="2" maxlength="4" /><span></span>
                </li>
            </ul>
            <a class="icon-add btn-file"><input type="file" class="file" accept="image/*"></a>
            <ul class="form-ul">
                <li class='form-li-input form-li-textarea'>
                    <textarea id="info" placeholder="请输入介绍信息..."></textarea>
                </li>
            </ul>
            <div class="form-li-text">
                <div class="date-1 clearfix"><span class="card-name">开始时间</span>
                    <span class="card-type">2015-10-08 18:00</span><input type="datetime" value="2015-10-08 18:00"></div>
                <div class="date-1"><span class="card-name">结束时间</span>
                    <span class="card-type">2015-10-09 18:00</span><input type="datetime" value="2015-10-09 18:00"></div>
            </div>
            <a class="btn btn-red">完成</a>
        </div>

    </div>
{% endblock %}