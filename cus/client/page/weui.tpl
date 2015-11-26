{% extends '_common:page/_layout.tpl' %}

{% block head %}
	{% widget '_common:widget/weui/weui.tpl' %}
	{% require 'cus:js/weui.js' %}
	<style>.container,.page{position:absolute;top:0;right:0;bottom:0;left:0}.global_navs .cell:before,.global_navs:after,.global_navs:before{border-color:#D9DBDA}body,html{height:100%;-webkit-tap-highlight-color:transparent}.page,body{background-color:#FBF9FE}.container{overflow:hidden}.page{overflow-y:auto;-webkit-overflow-scrolling:touch}.hd{padding:2em 0}.page_desc{text-align:center;color:#888;font-size:14px}.bd.spacing{padding:0 15px}.page_title{text-align:center;font-size:34px;color:#3CC51F;font-weight:400;margin:0 15%}.page.button .page_title,.page.cell .page_title{color:#225FBA}.global_navs{background-color:transparent}.page.article,.page.dialog,.page.icons,.page.msg,.page.toast{background-color:#FFF}.global_navs .cell{padding-top:.5em;padding-bottom:.5em}.global_navs .icon_nav{width:28px;height:28px;display:block;margin-right:.7em}.page.button .bd{padding:0 15px}.page.button .button_sp_area{padding:10px 0;width:60%;margin:0 auto;text-align:justify;text-justify:distribute-all-lines;font-size:0}.page.button .button_sp_area:after{display:inline-block;width:100%;height:0;font-size:0;margin:0;padding:0;overflow:hidden;content:"."}.page.cell .bd{padding-bottom:30px}.page.dialog .bd,.page.toast .bd{padding:120px 15px 0}.page.msg .weui_msg{padding-top:30px}.page.article .page_title{color:#DE7C23}.page.icons{text-align:center}.page.icons .page_title{color:#3E24BD}.page.icons .bd{padding:30px 0;text-align:center}.page.icons .icon_sp_area{padding:10px 20px;text-align:left}.page.icons i{margin:0 5px 10px}@-webkit-keyframes slideIn{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes slideIn{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-webkit-keyframes slideOut{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes slideOut{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.page.slideIn{-webkit-animation:slideIn .2s forwards;animation:slideIn .2s forwards}.page.slideOut{-webkit-animation:slideOut .2s forwards;animation:slideOut .2s forwards}</style>
{% endblock %}

{% block body %}
	<div id="container">
		<div class="container js_container">
			<div class="page">
				<div class="hd">
					<h1 class="page_title">WeUI</h1>
					<p class="page_desc">为微信Web服务量身设计</p>
				</div>
				<div class="bd">
					<div class="weui_cells weui_cells_access global_navs">
						<a class="weui_cell js_cell" href="javascript:;" data-id="button">
							<span class="weui_cell_hd"><img src="http://weui.github.io/weui/images/icon_nav_button.png" class="icon_nav" alt=""></span>
							<div class="weui_cell_bd weui_cell_primary">
								<p>Button</p>
							</div>
							<div class="weui_cell_ft">
							</div>
						</a>
						<a class="weui_cell js_cell" href="javascript:;" data-id="cell">
							<span class="weui_cell_hd"><img src="http://weui.github.io/weui/images/icon_nav_cell.png" class="icon_nav" alt=""></span>
							<div class="weui_cell_bd weui_cell_primary">
								<p>Cell</p>
							</div>
							<div class="weui_cell_ft">
							</div>
						</a>
						<a class="weui_cell js_cell" href="javascript:;" data-id="toast">
							<span class="weui_cell_hd"><img src="http://weui.github.io/weui/images/icon_nav_toast.png" class="icon_nav" alt=""></span>
							<div class="weui_cell_bd weui_cell_primary">
								<p>Toast</p>
							</div>
							<div class="weui_cell_ft">
							</div>
						</a>
						<a class="weui_cell js_cell" href="javascript:;" data-id="dialog">
							<span class="weui_cell_hd"><img src="http://weui.github.io/weui/images/icon_nav_dialog.png" class="icon_nav" alt=""></span>
							<div class="weui_cell_bd weui_cell_primary">
								<p>Dialog</p>
							</div>
							<div class="weui_cell_ft">
							</div>
						</a>
						<a class="weui_cell js_cell" href="javascript:;" data-id="progress">
							<span class="weui_cell_hd"><img src="http://weui.github.io/weui/images/icon_nav_button.png" class="icon_nav" alt=""></span>
							<div class="weui_cell_bd weui_cell_primary">
								<p>Progress</p>
							</div>
							<div class="weui_cell_ft">
							</div>
						</a>
						<a class="weui_cell js_cell" href="javascript:;" data-id="msg">
							<span class="weui_cell_hd"><img src="http://weui.github.io/weui/images/icon_nav_msg.png" class="icon_nav" alt=""></span>
							<div class="weui_cell_bd weui_cell_primary">
								<p>Msg Page</p>
							</div>
							<div class="weui_cell_ft">
							</div>
						</a>
						<a class="weui_cell js_cell" href="javascript:;" data-id="article">
							<span class="weui_cell_hd"><img src="http://weui.github.io/weui/images/icon_nav_article.png" class="icon_nav" alt=""></span>
							<div class="weui_cell_bd weui_cell_primary">
								<p>Article Page</p>
							</div>
							<div class="weui_cell_ft">
							</div>
						</a>
						<a class="weui_cell js_cell" href="javascript:;" data-id="actionSheet">
							<span class="weui_cell_hd"><img src="http://weui.github.io/weui/images/icon_nav_actionSheet.png" class="icon_nav" alt=""></span>
							<div class="weui_cell_bd weui_cell_primary">
								<p>ActionSheet</p>
							</div>
							<div class="weui_cell_ft">
							</div>
						</a>
						<a class="weui_cell js_cell" href="javascript:;" data-id="icons">
							<span class="weui_cell_hd"><img src="http://weui.github.io/weui/images/icon_nav_icons.png" class="icon_nav" alt=""></span>
							<div class="weui_cell_bd weui_cell_primary">
								<p>Icons</p>
							</div>
							<div class="weui_cell_ft">
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
		<script type="text/html" id="tpl_button">
			<div class="page">
				<div class="hd">
					<h1 class="page_title">Button</h1>
				</div>
				<div class="bd spacing">
					<a href="javascript:;" class="weui_btn weui_btn_primary">按钮</a>
					<a href="javascript:;" class="weui_btn weui_btn_disabled weui_btn_primary">按钮</a>
					<a href="javascript:;" class="weui_btn weui_btn_warn">确认</a>
					<a href="javascript:;" class="weui_btn weui_btn_disabled weui_btn_warn">确认</a>
					<a href="javascript:;" class="weui_btn weui_btn_default">按钮</a>
					<a href="javascript:;" class="weui_btn weui_btn_disabled weui_btn_default">按钮</a>
					<div class="button_sp_area">
						<a href="javascript:;" class="weui_btn weui_btn_plain_default">按钮</a>
						<a href="javascript:;" class="weui_btn weui_btn_plain_primary">按钮</a>

						<a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_primary">按钮</a>
						<a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_default">按钮</a>
					</div>
				</div>
			</div>
		</script>
		<script type="text/html" id="tpl_cell">
			<div class="page">
				<div class="hd">
					<h1 class="page_title">Cell</h1>
				</div>
				<div class="bd">
					<div class="weui_cells_title">带说明的列表项</div>
					<div class="weui_cells">
						<div class="weui_cell">
							<div class="weui_cell_bd weui_cell_primary">
								<p>标题文字</p>
							</div>
							<div class="weui_cell_ft">
								说明文字
							</div>
						</div>
					</div>
					<div class="weui_cells_title">带图标、说明的列表项</div>
					<div class="weui_cells weui_cells_split">
						<div class="weui_cell">
							<div class="weui_cell_hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
							<div class="weui_cell_bd weui_cell_primary">
								<p>标题文字</p>
							</div>
							<div class="weui_cell_ft">
								说明文字
							</div>
						</div>
						<div class="weui_cell">
							<div class="weui_cell_hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
							<div class="weui_cell_bd weui_cell_primary">
								<p>标题文字</p>
							</div>
							<div class="weui_cell_ft">
								说明文字
							</div>
						</div>
					</div>

					<div class="weui_cells_title">带跳转的列表项</div>
					<div class="weui_cells weui_cells_access">
						<a class="weui_cell" href="javascript:;">
							<div class="weui_cell_bd weui_cell_primary">
								<p>cell standard</p>
							</div>
							<div class="weui_cell_ft">
							</div>
						</a>
						<a class="weui_cell" href="javascript:;">
							<div class="weui_cell_bd weui_cell_primary">
								<p>cell standard</p>
							</div>
							<div class="weui_cell_ft">
							</div>
						</a>
					</div>

					<div class="weui_cells_title">带说明、跳转的列表项</div>
					<div class="weui_cells weui_cells_access">
						<a class="weui_cell" href="javascript:;">
							<div class="weui_cell_bd weui_cell_primary">
								<p>cell standard</p>
							</div>
							<div class="weui_cell_ft">
								说明文字
							</div>
						</a>
						<a class="weui_cell" href="javascript:;">
							<div class="weui_cell_bd weui_cell_primary">
								<p>cell standard</p>
							</div>
							<div class="weui_cell_ft">
								说明文字
							</div>
						</a>

					</div>

					<div class="weui_cells_title">带图标、说明、跳转的列表项</div>
					<div class="weui_cells weui_cells_access">

						<a class="weui_cell" href="javascript:;">
							<div class="weui_cell_hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
							<div class="weui_cell_bd weui_cell_primary">
								<p>cell standard</p>
							</div>
							<div class="weui_cell_ft">
								说明文字
							</div>
						</a>
						<a class="weui_cell" href="javascript:;">
							<div class="weui_cell_hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
							<div class="weui_cell_bd weui_cell_primary">
								<p>cell standard</p>
							</div>
							<div class="weui_cell_ft">
								说明文字
							</div>
						</a>
					</div>

					<div class="weui_cells_title">单选列表项</div>
					<div class="weui_cells weui_cells_radio">
						<label class="weui_cell weui_check_label" for="x11">
							<div class="weui_cell_bd weui_cell_primary">
								<p>cell standard</p>
							</div>
							<div class="weui_cell_ft">
								<input type="radio" class="weui_check" name="radio1" id="x11">
								<span class="weui_icon_checked"></span>
							</div>
						</label>
						<label class="weui_cell weui_check_label" for="x12">

							<div class="weui_cell_bd weui_cell_primary">
								<p>cell standard</p>
							</div>
							<div class="weui_cell_ft">
								<input type="radio" name="radio1" class="weui_check" id="x12" checked="checked">
								<span class="weui_icon_checked"></span>
							</div>
						</label>
					</div>
					<div class="weui_cells_title">复选列表项</div>
					<div class="weui_cells weui_cells_checkbox">
						<label class="weui_cell weui_check_label" for="s11">
							<div class="weui_cell_hd">
								<input type="checkbox" class="weui_check" name="checkbox1" id="s11" checked="checked">
								<i class="weui_icon_checked"></i>
							</div>
							<div class="weui_cell_bd weui_cell_primary">
								<p>standard is dealt for u.</p>
							</div>
						</label>
						<label class="weui_cell weui_check_label" for="s12">
							<div class="weui_cell_hd">
								<input type="checkbox" name="checkbox1" class="weui_check" id="s12">
								<i class="weui_icon_checked"></i>
							</div>
							<div class="weui_cell_bd weui_cell_primary">
								<p>standard is dealicient for u.</p>
							</div>
						</label>
					</div>

					<div class="weui_cells_title">开关</div>
					<div class="weui_cells weui_cells_form">
						<div class="weui_cell weui_cell_switch">
							<div class="weui_cell_hd weui_cell_primary">标题文字</div>
							<div class="weui_cell_ft">
								<input class="weui_switch" type="checkbox"/>
							</div>
						</div>
					</div>

					<div class="weui_cells_title">表单</div>
					<div class="weui_cells weui_cells_form">
						<div class="weui_cell">
							<div class="weui_cell_hd"><label class="weui_label">qq</label></div>
							<div class="weui_cell_bd weui_cell_primary">
								<input class="weui_input" type="number" placeholder="请输入qq号"/>
							</div>
						</div>
						<div class="weui_cell weui_vcode">
							<div class="weui_cell_hd"><label class="weui_label">验证码</label></div>
							<div class="weui_cell_bd weui_cell_primary">
								<input class="weui_input" type="number" placeholder="请输入验证码"/>
							</div>
							<div class="weui_cell_ft">
								<img src="./images/vcode.jpg" />
							</div>
						</div>
						<div class="weui_cell">
							<div class="weui_cell_hd"><label class="weui_label">银行卡</label></div>
							<div class="weui_cell_bd weui_cell_primary">
								<input class="weui_input" type="number" placeholder="请输入银行卡号"/>
							</div>
						</div>
						<div class="weui_cell weui_vcode weui_cell_warn">
							<div class="weui_cell_hd"><label class="weui_label">验证码</label></div>
							<div class="weui_cell_bd weui_cell_primary">
								<input class="weui_input" type="number" placeholder="请输入验证码"/>
							</div>
							<div class="weui_cell_ft">
								<i class="weui_icon_warn"></i>
								<img src="./images/vcode.jpg" />
							</div>
						</div>
					</div>
					<p class="weui_cells_tips">底部说明文字底部说明文字</p>
					<div class="weui_btn_area">
						<a class="weui_btn weui_btn_primary" href="javascript:">确定</a>
					</div>
					<div class="weui_cells_title">文本域</div>
					<div class="weui_cells weui_cells_form">
						<div class="weui_cell">
							<div class="weui_cell_bd weui_cell_primary">
								<textarea class="weui_textarea" placeholder="请输入评论"></textarea>
							</div>
						</div>
					</div>
					<div class="weui_toptips weui_warn js_tooltips">格式不对</div>
					<div class="weui_cells_title">表单报错</div>
					<div class="weui_cells weui_cells_form">
						<div class="weui_cell weui_cell_warn">
							<div class="weui_cell_hd"><label for="" class="weui_label">卡号</label></div>
							<div class="weui_cell_bd weui_cell_primary">
								<input class="weui_input" type="number" value="weui input error" placeholder="请输入卡号"/>
							</div>
							<div class="weui_cell_ft">
								<i class="weui_icon_warn"></i>
							</div>
						</div>
						<div class="weui_cell">
							<div class="weui_cell_hd"><label for="" class="weui_label">日期</label></div>
							<div class="weui_cell_bd weui_cell_primary">
								<input class="weui_input" type="date" value=""/>
							</div>
						</div>
						<div class="weui_cell">
							<div class="weui_cell_hd"><label for="" class="weui_label">时间</label></div>
							<div class="weui_cell_bd weui_cell_primary">
								<input class="weui_input" type="datetime-local" value="" placeholder=""/>
							</div>
						</div>
					</div>
					<div class="weui_cells_title">选择</div>
					<div class="weui_cells weui_cells_split">

						<div class="weui_cell weui_cell_select weui_select_before">
							<div class="weui_cell_hd">
								<select class="weui_select" name="select2">
									<option value="1">+86</option>
									<option value="2">+80</option>
									<option value="3">+84</option>
									<option value="4">+87</option>
								</select>
							</div>
							<div class="weui_cell_bd weui_cell_primary">
								<input class="weui_input" type="text" placeholder="请输入号码"/>
							</div>
						</div>
					</div>
					<div class="weui_cells_title">选择</div>
					<div class="weui_cells weui_cells_split">
						<div class="weui_cell weui_cell_select">
							<div class="weui_cell_bd weui_cell_primary">
								<select class="weui_select" name="select1">
									<option selected="" value="1">微信号</option>
									<option value="2">QQ号</option>
									<option value="3">Email</option>
								</select>
							</div>
						</div>
						<div class="weui_cell weui_cell_select weui_select_after">
							<div class="weui_cell_hd">
								国家/地区
							</div>
							<div class="weui_cell_bd weui_cell_primary">
								<select class="weui_select" name="select2">
									<option value="1">中国</option>
									<option value="2">美国</option>
									<option value="3">英国</option>
								</select>
							</div>
						</div>
					</div>

				</div>
			</div>
		</script>
		<script type="text/html" id="tpl_toast">
			<div class="page">
				<div class="hd">
					<h1 class="page_title">Toast</h1>
				</div>
				<div class="bd spacing">
					<a href="javascript:;" class="weui_btn weui_btn_primary" id="showToast">点击弹出Toast</a>
					<a href="javascript:;" class="weui_btn weui_btn_primary" id="showLoadingToast">点击弹出Loading Toast</a>
				</div>
				<!--BEGIN toast-->
				<div id="toast" style="display: none;">
					<div class="weui_mask_transparent"></div>
					<div class="weui_toast">
						<i class="weui_icon_toast"></i>
						<p class="weui_toast_content">已完成</p>
					</div>
				</div>
				<!--end toast-->

				<!-- loading toast -->
				<div id="loadingToast" class="weui_loading_toast" style="display:none;">
					<div class="weui_mask_transparent"></div>
					<div class="weui_toast">
						<div class="weui_loading">
							<div class="weui_loading_leaf weui_loading_leaf_0"></div>
							<div class="weui_loading_leaf weui_loading_leaf_1"></div>
							<div class="weui_loading_leaf weui_loading_leaf_2"></div>
							<div class="weui_loading_leaf weui_loading_leaf_3"></div>
							<div class="weui_loading_leaf weui_loading_leaf_4"></div>
							<div class="weui_loading_leaf weui_loading_leaf_5"></div>
							<div class="weui_loading_leaf weui_loading_leaf_6"></div>
							<div class="weui_loading_leaf weui_loading_leaf_7"></div>
							<div class="weui_loading_leaf weui_loading_leaf_8"></div>
							<div class="weui_loading_leaf weui_loading_leaf_9"></div>
							<div class="weui_loading_leaf weui_loading_leaf_10"></div>
							<div class="weui_loading_leaf weui_loading_leaf_11"></div>
						</div>
						<p class="weui_toast_content">数据加载中</p>
					</div>
				</div>



			</div>
		</script>
		<script type="text/html" id="tpl_dialog">
			<div class="page">
				<div class="hd">
					<h1 class="page_title">Dialog</h1>
				</div>
				<div class="bd spacing">
					<a href="javascript:;" class="weui_btn weui_btn_primary" id="showDialog1">点击弹出Dialog样式一</a>
					<a href="javascript:;" class="weui_btn weui_btn_primary" id="showDialog2">点击弹出Dialog样式二</a>
				</div>
				<!--BEGIN dialog1-->
				<div class="weui_dialog_confirm" id="dialog1" style="display: none;">
					<div class="weui_mask"></div>
					<div class="weui_dialog">
						<div class="weui_dialog_hd"><strong class="weui_dialog_title">弹窗标题</strong></div>
						<div class="weui_dialog_bd">自定义弹窗内容<br>...</div>
						<div class="weui_dialog_ft">
							<a href="javascript:;" class="weui_btn_dialog default">取消</a>
							<a href="javascript:;" class="weui_btn_dialog primary">确定</a>
						</div>
					</div>
				</div>
				<!--END dialog1-->
				<!--BEGIN dialog2-->
				<div class="weui_dialog_alert" id="dialog2" style="display: none;">
					<div class="weui_mask"></div>
					<div class="weui_dialog">
						<div class="weui_dialog_hd"><strong class="weui_dialog_title">弹窗标题</strong></div>
						<div class="weui_dialog_bd">弹窗内容，告知当前页面信息等</div>
						<div class="weui_dialog_ft">
							<a href="javascript:;" class="weui_btn_dialog primary">确定</a>
						</div>
					</div>
				</div>
				<!--END dialog2-->
			</div>
		</script>
		<script type="text/html" id="tpl_progress">
			<div class="page">
				<div class="hd">
					<h1 class="page_title">Progress</h1>
				</div>
				<div class="bd spacing">
					<div class="weui_progress">
						<div class="weui_progress_bar">
							<div class="weui_progress_inner_bar" style="width: 0%;"></div>
						</div>
						<a href="javascript:;" class="weui_progress_opr">
							<i class="weui_icon_cancel"></i>
						</a>
					</div>
					<br>
					<div class="weui_progress">
						<div class="weui_progress_bar">
							<div class="weui_progress_inner_bar" style="width: 50%;"></div>
						</div>
						<a href="javascript:;" class="weui_progress_opr">
							<i class="weui_icon_cancel"></i>
						</a>
					</div>
					<br>
					<div class="weui_progress">
						<div class="weui_progress_bar">
							<div class="weui_progress_inner_bar" style="width: 80%;"></div>
						</div>
						<a href="javascript:;" class="weui_progress_opr">
							<i class="weui_icon_cancel"></i>
						</a>
					</div>
				</div>
			</div>
		</script>
		<script type="text/html" id="tpl_msg">
			<div class="page">
				<div class="weui_msg">
					<div class="weui_icon_area"><i class="weui_icon_success weui_icon_msg"></i></div>
					<div class="weui_text_area">
						<h2 class="weui_msg_title">操作成功</h2>
						<p class="weui_msg_desc">内容详情，可根据实际需要安排</p>
					</div>
					<div class="weui_opr_area">
						<p class="weui_btn_area">
							<a href="javascript:;" class="weui_btn weui_btn_primary">确定</a>
							<a href="javascript:;" class="weui_btn weui_btn_default">取消</a>
						</p>
					</div>
					<div class="weui_extra_area">
						<a href="">查看详情</a>
					</div>
				</div>
			</div>
		</script>
		<script type="text/html" id="tpl_article">
			<div class="page">
				<div class="hd">
					<h1 class="page_title">Article</h1>
				</div>
				<div class="bd">
					<article class="weui_article">
						<h1>大标题</h1>
						<section>
							<h2 class="title">章标题</h2>
							<section>
								<h3>1.1 节标题</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute</p>
							</section>
							<section>
								<h3>1.2 节标题</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</section>
						</section>
					</article>
				</div>
			</div>
		</script>
		<script type="text/html" id="tpl_icons">
			<div class="page">
				<div class="hd">
					<h1 class="page_title">Icons</h1>
				</div>
				<div class="bd spacing">
					<i class="weui_icon_msg weui_icon_success"></i>
					<i class="weui_icon_msg weui_icon_info"></i>
					<i class="weui_icon_msg weui_icon_warn"></i>
					<i class="weui_icon_msg weui_icon_waiting"></i>
					<i class="weui_icon_safe weui_icon_safe_success"></i>
					<i class="weui_icon_safe weui_icon_safe_warn"></i>
					<div class="icon_sp_area">
						<i class="weui_icon_success"></i>
						<i class="weui_icon_success_circle"></i>
						<i class="weui_icon_success_no_circle"></i>
						<i class="weui_icon_info"></i>
						<i class="weui_icon_waiting"></i>
						<i class="weui_icon_waiting_circle"></i>
						<i class="weui_icon_circle"></i>
						<i class="weui_icon_warn"></i>
						<i class="weui_icon_download"></i>
						<i class="weui_icon_info_circle"></i>
						<i class="weui_icon_cancel"></i>
					</div>
				</div>
			</div>
		</script>
		<script type="text/html" id="tpl_actionSheet">
			<div class="page" style="overflow: hidden">
				<div class="hd">
					<h1 class="page_title">ActionSheet</h1>
				</div>
				<div class="bd spacing">
					<a href="javascript:;" class="weui_btn weui_btn_primary" id="showActionSheet">点击上拉ActionSheet</a>
				</div>
				<!--BEGIN actionSheet-->
				<div id="actionSheet_wrap">
					<div class="weui_mask_transition" id="mask" style="display: none"></div>
					<div class="weui_actionsheet" id="weui_actionsheet">
						<div class="weui_actionsheet_menu">
							<div class="weui_actionsheet_cell">示例菜单</div>
							<div class="weui_actionsheet_cell">示例菜单</div>
							<div class="weui_actionsheet_cell">示例菜单</div>
							<div class="weui_actionsheet_cell">示例菜单</div>
						</div>
						<div class="weui_actionsheet_action">
							<div class="weui_actionsheet_cell" id="actionsheet_cancel">取消</div>
						</div>
					</div>
				</div>
				<!--END actionSheet-->
			</div>
		</script>
	</div>
{% endblock %}