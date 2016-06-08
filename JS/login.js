/**
 * Created by Administrator on 6/8/2016.
 */
function send_message(test, params) {
    var message = 'WindowTest.' + test;
    if (typeof params != 'undefined')
        message += ':' + params;

    // Results in a call to the OnQuery method in window_test.cpp.
    window.cefQuery({ 'request': message });
}

function loadedShow() {
    send_message('LoadedShow');
}

function winClose() {
    send_message('WinClose');

}
var sqldata="";
$(document).ready(function (e) {

    loadedShow();
    sqldata=SQlData.createNew();
    sqldata.CreateLoginTable();

    sqldata.QueryLoginTable();
    //sqldata.InsertLoginTable("mao","yang",false);
    //sqldata.UpdataLoginTable("mao","1");

});

function enterChange()
{
    $('#loginInfo').html("");
   // alert("hide");
    //$("#loginkeeping").hide();
    //document.getElementById("loginkeeping").hide();
}

/*
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg)) return unescape(arr[2]);
    else return null;
}
*/
function tologin()
    {

    var username = $('#username').val();
    var password = $('#password').val();
    var loginkeeping =$("#loginkeeping")[0].checked;
    if(username===""||password===""){
        document.getElementById("loginInfo").style.color="#ff0000";
        $('#loginInfo').html("用户名或密码不能为空!!!");
        return;
    }

    $.post("http://120.25.98.41/fanke/?mod=wetube&act=login", { username: username, password: password }, function (msg2,status) {
        alert(status+msg2);
        if (msg2 === "")
        {
            alert("网络连接失败或服务器无响应");
          //  alert(status);
            $('#loginInfo').html("网络连接失败或服务器无响应");
        }
        else
        {

            var obj = JSON.parse(msg2);
            if (obj.result === "1")
            {
                sqldata.InsertLoginTable(username,password,loginkeeping);
                sqldata.UpdataLoginTable(username,msg2,function () {

                    window.location.assign("file:///H:\\MAO\\html\\PC_Fanke\\mainwindow.html")
                });
            }

        }

    })


}