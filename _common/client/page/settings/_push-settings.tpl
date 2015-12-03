{% extends '_common:page/_layout.tpl' %}
{% block head %}
    <link rel="stylesheet" href="../../css/user/sys-set.css"/>
{% endblock %}
{%  block body %}
    {% widget '_common:widget/header/header.tpl' %}

    <div class="push-list">

        <div href="" class="push-item"><span >信息提醒</span>
            <div class="push-btn">
                <input type="checkbox" id="checkbox_c1" class="chk_3"><label for="checkbox_c1"></label>
            </div>
        </div>
            <div class="mt">
                <div href="" class="push-item"><span >声音</span>
                    <div class="push-btn">
                        <input type="checkbox" id="checkbox_c2" class="chk_3"><label for="checkbox_c2"></label>
                    </div>
                </div>
                <div href="" class="push-item"><span >震动</span>
                    <div class="push-btn">
                        <input type="checkbox" id="checkbox_c3" class="chk_3"><label for="checkbox_c3"></label>
                    </div>
                </div>
            </div>
            <div href="" class="push-item mt"><span >勿扰模式</span>
                <div class="push-btn">
                    <input type="checkbox" id="checkbox_c4" class="chk_3"><label for="checkbox_c4"></label>
                </div>
            </div>
            <div class="mt">
                <div href="" class="push-item"><span >开始时间</span><label class="detailed-time">晚上10:00</label></div>
                <div href="" class="push-item"><span >结束时间</span><label class="detailed-time">早上09:00</label></div>
            </div>
    </div>

{% endblock %}