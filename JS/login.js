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
var sqldata={};
var ServerRuqest={};
$(document).ready(function (e) {

    loadedShow();
    sqldata=SQlData.createNew();
    sqldata.CreateLoginTable();
    ServerRuqest=ServerData.createServer();

  //  sqldata.QueryLoginTable();
    //sqldata.InsertLoginTable("mao","yang",false);
    //sqldata.UpdataLoginTable("mao","1");

    document.getElementById("username").value="6666";
    sqldata.QueryLoginTable(GetOldLoginData);

});

function GetOldLoginData(Data) {
    var obj = JSON.parse(Data);
   // alert(typeof(obj.isSave));
    document.getElementById("username").value=obj.name;
    if (obj.isSave==="false")
    {
        document.getElementById("loginkeeping").checked=false;
        return;
    }
    else
        document.getElementById("loginkeeping").checked=true;
    document.getElementById("password").value=obj.pw;

}

function enterChange()
{
    $('#loginInfo').html("");
   // alert("hide");
    //$("#loginkeeping").hide();
    //document.getElementById("loginkeeping").hide();
}




function errorinfo(errortext) {
    document.getElementById("loginInfo").style.color="#ff0000";
    $('#loginInfo').html(errortext);
}


function toLogin() {

    var username = $('#username').val();
    var password = $('#password').val();
    var loginkeeping =$("#loginkeeping")[0].checked;
    if(username===""||password===""){
        errorinfo("用户名或密码不能为空!!!");
        return;
    }
    var PostData="username="+username+"&password="+password;
    ServerRuqest.login(PostData,function (x) {
        var obj = JSON.parse(x);
        if (obj.result === "1")
        {
            sqldata.InsertLoginTable(username,password,loginkeeping);
            sqldata.UpdataLoginTable(username,x,function () {
                window.location.assign("file:///H:\\MAO\\html\\PC_Fanke\\mainwindow.html")
            });
        }else{
            errorinfo(obj.errorMsg);
        }
    },function (e) {
        errorinfo("网络连接失败或服务器无响应!!!");
    });

}

function toRegister() {
    
}