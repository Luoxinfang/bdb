{% extends '_common:page/_layout.tpl' %}
{% block head %}
    {% require '_common:less/public/form.less' %}
{% endblock %}

{% block header %}
    {% widget '_common:widget/header/header.tpl' %}
{% endblock %}

{% block body %}
    <div id="content">
        <div class="form">
            <ul class="form-ul">
                <li class='form-li-input'>
                    <p type="text" id="name"  minlength="2" maxlength="4">理由</p><span></span>
                </li>
            </ul>
            <ul class="form-ul">
                <li class='form-li-input form-li-textarea'>
                    <textarea id="address" placeholder="补充说明..."></textarea>
                </li>
            </ul>
            <a class="icon-add btn-file mt-20"><input type="file" class="file" accept="image/*"></a>
        </div>
    </div>
{% endblock %}