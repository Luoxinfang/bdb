{% extends '_common/page/layout.tpl' %}
{% block head%}
    {% require '_common:widget/auction/auction.less' %}
{% endblock %}
{% block header %}
    {% widget '_common:widget/common/header/header-nav.tpl' %}
{% endblock %}
{% block content %}
    <div class="auction-dialog mt10" style="min-height:0">
        {% for item in userMsg %}
            <div class="li">
                <img src="http://img2.imgtn.bdimg.com/it/u=1341923083,1900907467&fm=23&gp=0.jpg" alt="" class="user-img">
                <div class="d-t ml20">
                    <div class="clearfix">
                        <span class="d-l u-name">{{ item.fromusername }}</span>
                        <span class="d-n u-time">{{ item.createtime }}</span>
                    </div>
                    <div class="clearfix mt10">
                        <span class="info">{{ item.msgcontent }}</span>
                    </div>
                </div>
                <img src="../../icon/enter.png" alt="" class="enter-img">
            </div>
        {% endfor %}
    </div>
{% endblock %}
