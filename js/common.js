var site_url = 'http://39.97.254.58:18888';
// var site_url = 'http://127.0.0.4/api.php?act=';
jQuery.support.cors = true;
_left_li = '';
_left_menu_at = '';

document.write("<script language=javascript src='js/html.js'></script>");
var _pagesize = 10;
if (getCookie('page_size')) {
    _pagesize = getCookie('page_size');
}

$(function () {

    $(".tabmenu .lk").click(function () {

        $(this).addClass("cur").siblings().removeClass("cur");

        var index = $(this).parent('.tabmenu').children('.lk').index(this);

        $(this).parents(".tabmenu").siblings(".tabwrap").find(".module").eq(index).show().siblings().hide();

    });
    //
    //
    $('.login_form .ipt_txt').focus(function () {
        $(this).parents('.item').addClass('focus');

    });
    $('.login_form .ipt_txt').blur(function () {
        $(this).parents('.item').removeClass('focus');

    });

    $('.login_form .sel').click(function () {
        if ($(this).hasClass('checked')) {
            $(this).removeClass('checked').find('input').attr('checked', false);
        } else {
            $(this).addClass('checked').find('input').attr('checked', true);
        }


    });
    //
    $('.adSearchBtn').click(function () {
        $(this).parents('.default_display').hide();
        $('.advanced_search').show();
    });
    $('.defaultSearchBtn').click(function () {
        $(this).parents('.advanced_search').hide();
        $('.default_display').show();
    });


    $(".demoDown").mouseover(function () {
        var _this = $(this);
        _this.justToolsTip({
            animation: "moveInBottom",
            //width:"300px",
            contents: _this.text(),
            gravity: 'bottom'
        });
    })

    //爆破组管理
   $('.bpBtn').click(function(){
       $('.pop_bg').show();
       $('.pop_bpW').show();
   });

   $('.pop .close').click(function(){
       $('.pop_bg').hide();
       $(this).parents('.pop_bp').hide();
   });

   $('.pop_bg').click(function(){
       $('.pop_bg').hide();
       $(this).siblings('.pop_bp').hide();
   });

$('.addDkz').click(function(){
       $('.pop_bg').show();
       $('.pop_bpDkz').show();
   });
   $('.addMbz').click(function(){
       $('.pop_bg').show();
       $('.pop_bpMbz').show();
   });
   $('.editDkz').click(function(){
       $('.pop_bg').show();
       $('.pop_editDkz').show();
   });
    var time_obj = document.getElementById('time');
    if (time_obj) {
        time_obj.length = 0;
        for (i = 4; i <= 30; i++) {
            time_obj.add(new Option(i,i));
        }
    }
    page_load();
});

/**
 * 显示提示
 * @param msg:提示信息
 * @param t:1 成功，其他错误
 */
function showmsg(msg, t) {
    alert(msg);
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function check_login() {
    var _userid = getCookie("userid");
    if (!_userid) {
        location.href = 'login.html';
    }
}

function logout() {
    delCookie('userid');
    delCookie('name');
    location.href = 'login.html';
}

//写cookies
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

function form_render() {
    layui.use('form', function() {
        var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功
        form.render();
    });
}

function formser(form){
    var form=document.getElementById(form);
    var arr={};
    for (var i = 0; i < form.elements.length; i++) {
        var feled=form.elements[i];
        switch(feled.type) {
            case undefined:
            case 'button':
            case 'file':
            case 'reset':
            case 'submit':
                break;
            case 'checkbox':
            case 'radio':
                if (!feled.checked) {
                    break;
                }
            default:
                if (feled.name) {
                    if (arr[feled.name]) {
                        arr[feled.name] = arr[feled.name] + ',' + feled.value;
                    } else {
                        arr[feled.name] = feled.value;

                    }
                }
        }
    }
    console.log(arr);
    return arr;
}
