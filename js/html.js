
var _left_menu = '<ul class="side_menu">\n' +
    '                <li class="item item_1">\n' +
    '                    <a href="vulscan_list.html" class="tit">漏洞列表</a>\n' +
    '                </li>\n' +
    '                <li class="item item_2">\n' +
    '                    <a href="portscan.html" class="tit">端口扫描</a>\n' +
    '                </li>\n' +
    '                <li class="item item_3">\n' +
    '                    <a href="explot.html" class="tit">漏洞扫描</a>\n' +
    '                </li>\n' +
    '                <li class="item item_4">\n' +
    '                    <a href="broute-page.html" class="tit">暴力破解</a>\n' +
    '                </li>\n' +
    '                <li class="item item_5">\n' +
    '                    <a href="task.html" class="tit">任务管理</a>\n' +
    '                </li>\n' +
    '                <li class="item item_6">\n' +
    '                    <a href="target_info.html" class="tit">目标详情</a>\n' +
    '                </li>\n' +
    '                <li class="item item_7">\n' +
    '                    <a href="exports.html" class="tit">导出管理</a>\n' +
    '                </li>\n' +
    '                <li class="item item_8">\n' +
    '                    <a href="javascript:;" class="tit">模板管理</a>\n' +
    '                    <div class="drop">\n' +
    '                        <a href="host_group.html" class="target">主机组管理</a>\n' +
    '                        <a href="target_group.html" class="target">目标组管理</a>\n' +
    '                        <a href="port_group.html" class="port">端口组管理</a>\n' +
    '                        <a href="poc-guanli.html" class="poc">POC组管理</a>\n' +
    '                        <a href="broutePoc.html" class="bao">BRUTE组管理</a>\n' +
    '                    </div>\n' +
    '                </li>\n' +
    '                <li class="item item_9">\n' +
    '                    <a href="#" class="tit">大屏展示</a>\n' +
    '                </li>\n' +
    '                   <li class="item item_9">\n' +
    '                    <a href="node-page.html" class="tit">节点管理</a>\n' +
    '                </li>\n' +
    '                <li class="item item_10">\n' +
    '                    <a href="javascript:;" class="tit">系统管理</a>\n' +
    '                    <div class="drop">\n' +
    '                        <a href="status.html" class="status">系统状态</a>\n' +
    '                        <a href="config.html" class="config">系统设置</a>\n' +
    '                        <a href="user.html" class="user">用户管理</a>\n' +
    '                        <a href="auth.html" class="auth">授权管理</a>\n' +
    '                        <a href="logs.html" class="logs">日志管理</a>\n' +
    '                        <a href="upgrade.thml" class="upgrade">系统升级</a>\n' +
    '                        <a href="about.html" class="about">关于</a>\n' +
    '                        <a href="help.html" class="help">帮助</a>\n' +
    '                    </div>\n' +
    '                </li>\n' +
    '            </ul>\n';
   ;

function page_load() {
    // var _header = '<a href="index.html" class="hd_logo fl"><img src="images/logo.png" alt="" class="img"/></a><em class="hd_menu"></em><span class="hd_fz">你好，' +
    //     getCookie('name') + '</span><div class="fr"><em class="hd_msg"><i class="has"></i></em><div class="hd_user">' + getCookie('name') + '</div></div>';

    var _username = $('.layui-header').html();
    var _header = '<a href="index.html" class="hd_logo fl"><img src="images/logo.png" alt="" class="img"/></a><em class="hd_menu"></em><span class="hd_fz">你好，' +
        _username + '</span><div class="fr"><em class="hd_msg"><i class="has"></i></em><div class="hd_user">' + _username + '</div></div>';

    $('.layui-header').html(_header);
    $('.layui-side-scroll').html(_left_menu);
    // $('.top_admin').html( getCookie('name') );
    if ($('.layui-side-scroll')) {
        if (_left_li) {
            $('.side_menu .' + _left_li).addClass('cur');
        }
        if (_left_li && _left_menu_at) {
            $('.' + _left_li + ' .' + _left_menu_at).addClass('this');
        }
    }
    $('#pagesize').val(_pagesize);
    $('.side_menu .tit').click(function () {
        $(this).parents('.item').addClass('cur').siblings('.item').removeClass('cur');

    });
}
