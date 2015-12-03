{% extends '_common/page/_layout.tpl' %}
{% block head%}
    {% require '_common:widget/auction/auction.less' %}
{% endblock %}
{% block body %}
    {% widget '_common:widget/header/header-nav.tpl' %}
    <div class="auction-dialog">
        <div class="li">
            <img src="http://img2.imgtn.bdimg.com/it/u=1341923083,1900907467&fm=23&gp=0.jpg" alt="" class="user-img">
            <div class="d-t ml20">
                <div class="clearfix">
                    <span class="d-l u-name">C罗</span>
                    <span class="d-n u-time">2015-10-10 10:00</span>
                </div>
                <div class="clearfix mt10">
                    <span class="info">掌柜你好！请问你的千年古玉...</span>
                </div>
            </div>
            <img src="../../icon/enter.png" alt="" class="enter-img">
        </div>
        <div class="li">
            <img src="http://img3.imgtn.bdimg.com/it/u=3741892468,250959383&fm=23&gp=0.jpg" alt="" class="user-img">
            <div class="d-t ml20">
                <div class="clearfix">
                    <span class="d-l u-name">玉华</span>
                    <span class="d-n u-time">2015-10-26 10:00</span>
                </div>
                <div class="clearfix mt10">
                    <span class="info">掌柜你好！请问你的千年古玉...</span>
                </div>
            </div>
            <img src="../../icon/enter.png" alt="" class="enter-img">
        </div>
        <div class="li">
            <img src="http://img1.imgtn.bdimg.com/it/u=823916137,3655793224&fm=21&gp=0.jpg" alt="" class="user-img">
            <div class="d-t ml20">
                <div class="clearfix">
                    <span class="d-l u-name">老刘</span>
                    <span class="d-n u-time">2015-10-28 10:00</span>
                </div>
                <div class="clearfix mt10">
                    <span class="info">掌柜你好！请问你的千年古玉...</span>
                </div>
            </div>
            <img src="../../icon/enter.png" alt="" class="enter-img">
        </div>
    </div>
{% endblock %}
