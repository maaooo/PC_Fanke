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

function showWin() {
    send_message('ShowWin');

}


var sqldata={};
var ServerRuqest={};
$(document).ready(function (e) {

    loadedShow();
    sqldata=SQlData.createNew();
    sqldata.CreateLoginTable();
    ServerRuqest=ServerData.createServer();

    sqldata.QueryLoginTable(GetOldLoginData);
    showWin();

});

function GetOldLoginData(Data) {//callbaclk
    if(Data==null)return;
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

function loginEnterChange() {
    $('#loginInfo').html("");
}
function RegisterEnterChange() {
    $('#registerInfo').html("");
}

function T_IdentityChange(obj) {
    if(obj.checked==true)
        document.getElementById("Student").checked=false;
}
function S_IdentityChange(obj) {
    if(obj.checked==true)
        document.getElementById("Teacher").checked=false;
}



function loginErrorInfo(errortext,coloc) {
    document.getElementById("loginInfo").style.color=coloc;
    $('#loginInfo').html(errortext);
}
function RegisterErrorInfo(errortext) {
    document.getElementById("registerInfo").style.color="#ff0000";
    $('#registerInfo').html(errortext);
}

function toLogin() {

    var username = $('#username').val();
    var password = $('#password').val();
    var loginkeeping =$("#loginkeeping")[0].checked;
    if(username===""||password===""){
        loginErrorInfo("用户名或密码不能为空","#ff0000");
        return;
    }



    var PostData="username="+username+"&password="+password;
    ServerRuqest.login(PostData,function (x) {
        var obj = JSON.parse(x);
        if (obj.result === "1")
        {
            sqldata.InsertLoginTable(username,password,loginkeeping);
            sqldata.UpdataLoginTable(username,x,function () {
                window.location.assign("file:///C:\\PC_Fanke\\mainwindow.html")
            });
        }else{
            loginErrorInfo(obj.errorMsg,"#ff0000");
        }
    },function (e) {
        loginErrorInfo("网络连接失败或服务器无响应!","#ff0000");
    });

}

function toRegister() {


    var usernamesignup = $('#usernamesignup').val();
    var nicknamesignup = $('#nicknamesignup').val();
    var passwordsignup = $('#passwordsignup').val();
    var passwordsignup_confirm = $('#passwordsignup_confirm').val();
    var bTeacherCBox =$("#Teacher")[0].checked;
    var bStudentCBox =$("#Student")[0].checked;

    if(usernamesignup===""){
        RegisterErrorInfo("用户名不能为空");
        return;
    }
    var AllNumIsSame = new Array("’","”","!","#","$","%","^","&","*"," ","`","~","\\","/");
    var IsTrueORfalse = false;
    for (var i = 0; i < AllNumIsSame.length; i++) {
        if (usernamesignup.indexOf(AllNumIsSame[i]) != -1) {
            IsTrueORfalse = true;AllNumIsSame=null;
            break;
        }
    }
    if(IsTrueORfalse===true){
        RegisterErrorInfo("用户名不能含有特殊字符(含空格)");
        return;
    }
    if(nicknamesignup===""){
        RegisterErrorInfo("昵称不能为空");
        return;
    }
    if(passwordsignup===""){
        RegisterErrorInfo("密码不能为空");
        return;
    }
    if(passwordsignup_confirm===""){
        RegisterErrorInfo("确认密码不能为空");
        return;
    }
    if(passwordsignup!=passwordsignup_confirm) {
        RegisterErrorInfo("2次输入的密码不一致");
        return;
    }
    if(bTeacherCBox===false&&bStudentCBox===false){
        RegisterErrorInfo("请选择您的身份");
        return;
    }

    var utype="";
    if(bTeacherCBox===true)utype="teacher";
    if(bStudentCBox===true)utype="student";

    var PostData="username="+usernamesignup+"&password="+passwordsignup+"&nickname="+nicknamesignup+"&utype="+utype;
    ServerRuqest.register(PostData,function (x) {
        var obj = JSON.parse(x);
        if (obj.result === "1")
        {
            document.getElementById("to_register22").click();
            loginErrorInfo("注册成功，赶紧登录吧！","#ffff00");

        }else{
            RegisterErrorInfo(obj.errorMsg);
        }
    },function (e) {
        RegisterErrorInfo("网络连接失败或服务器无响应!");
    });


}