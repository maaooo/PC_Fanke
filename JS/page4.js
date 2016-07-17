/**
 * Created by Administrator on 7/11/2016.
 */


var my_weikeList ;

function GetWDWK_list() {
    $("#content4").empty();
    //VmkxarIIilQm6
    var PostData="uid="+myUID+"&page="+"1"+"&max="+"50";
    ServerRuqest.my_weike(PostData,function (x) {
        my_weikeList = JSON.parse(x);
        if (my_weikeList.result === "1") {

            for (var i = 0; i < my_weikeList.data.length; i++) {

                var dur=Number(my_weikeList.data[i].duration);
                var newTime = new Date(dur);
                var time=zeroize(newTime.getMinutes())+":"+zeroize(newTime.getSeconds());
                var type="WDWK";
                $("#content4").append(
                    "<div id='video_item'>" +
                    "<div id='video_item_head' style='background-image: url("+my_weikeList.data[i].screenshot_s +")'>"+
                    "<div id='video_item_head_img'  onclick='palyVideo("+JSON.stringify(my_weikeList.data[i]) + ")'>"+
                    "</div>"+
                    "<div id='video_item_info'  onclick='ClickComment(" +  JSON.stringify(type) + "," + JSON.stringify(my_weikeList.data[i])+");'>"+
                    "<a id='test2' href='#comment_view'></a>"+
                    "<p id='video_item_info_title'>"+my_weikeList.data[i].title +"</p>"+
                    "<p id='video_item_info_time'>"+time +"</p>"+
                    "</div>"+
                    "</div>");

            }

        }
    },function () {

    });
}


function p4_init() {
    $("#content4_top").css("display","none");//block
    $("#content4_left").css("display","none");
    $("#content4_right").css("display","none");
    $("#content4_botom").css("display","none");
    $("#content4").css("width","100%");
    $("#content4").css("height","100%");
}

var wdxx="<div id='mywdxx'>" +
            "<div id='tabselect'>"+
   
                "<ul id='myTab' class='nav nav-tabs'>"+
                    "<li class='active'>"+
                        "<a href='#home' class='dropdown-toggle glyphicon glyphicon-user'  data-toggle='tab'>"+
                        " 个人资料"+
                        "</a>"+
                    "</li>"+
                    "<li><a class='glyphicon glyphicon-lock' href='#ios' data-toggle='tab'> 修改密码</a></li>"+
                    "<li><a class='glyphicon glyphicon-exclamation-sign' href='#java' data-toggle='tab'> 账号安全</a></li>"+
                "</ul>"+
                "<div id='myTabContent' class='tab-content'>"+
                    "<div class='tab-pane fade in active' id='home' >"+
                        "<div id='testA'>" +
                            "<div id='testA_A'>" +
                                "<img id='imgHead' src='http://img2.a0bi.com/upload/ttq/20160716/1468636317289.jpg' class='img-circle'>"+
                            "</div>"+
                            "<div id='testA_B'>" +
                                "<button type='button' style='width: 200px;margin: 0;clear:left;' class='btn btn-success'>上传头像</button>"+
                                "<p></p>"+
                                "<p  style='font-size: 14px;color: #9FA7AA';clear:left;>支持JPG、GIF、PNG格式，图片不得超过2M</p>"+
                            "</div>"+
                        "</div>"+
                        "<div id='testB'>"+
    "<div class='panel panel-info' style='height: 96%'>"+
        "<div class='panel-heading'>"+
            "<h3 class='panel-title'>基本信息</h3>"+
        "</div>"+
        "<div class='panel-body'  style='color: black' >"+
            "<form class='form-horizontal' role='form'>"+
                "<fieldset>"+
                "<div class='form-group'>"+
                    "<label class='col-sm-2 control-label' for='ds_host'>昵称</label>"+
                    "<div class='col-sm-4'>"+
                        "<input class='form-control' id='ds_host' type='text' placeholder='192.168.1.161'/>"+
                    "</div>"+
                    "<label class='col-sm-2 control-label' for='ds_name'>地区</label>"+
                    "<div class='col-sm-4'>"+
                        "<input class='form-control' id='ds_name' type='text' placeholder='msh'/>"+
                    "</div>"+
                "</div>"+
                "<div class='form-group'>"+
                    "<label class='col-sm-2 control-label' for='ds_username'>姓名</label>"+
                    "<div class='col-sm-4'>"+
                        "<input class='form-control' id='ds_username' type='text' placeholder='root'/>"+
                    "</div>"+
                    "<label class='col-sm-2 control-label' for='ds_password'>院校</label>"+
                    "<div class='col-sm-4' st>"+
                        "<input class='form-control' id='ds_password' type='password' placeholder='123456'/>"+
                    "</div>"+
                "</div>"+
                "<div class='form-group'>"+
                    "<label class='col-sm-2 control-label' for='ds_iphone'>电话</label>"+
                    "<div class='col-sm-4'>"+
                        "<input class='form-control' id='ds_iphone' type='text' placeholder='root'/>"+
                    "</div>"+
                    "<label class='col-sm-2 control-label' for='ds_class'>班级</label>"+
                    "<div class='col-sm-4'>"+
                        "<input class='form-control' id='ds_class' type='password' placeholder='123456'/>"+
                    "</div>"+
                "</div>"+

                "</fieldset>"+
            "</form>"+
    "</div>"+
    "</div>"+
                        "</div>"+
                    "</div>"+
                    "<div class='tab-pane fade' id='ios'>"+
                    "<p style='color: black'>iOS 是一个由苹果公司开发和发布的手机操作系统。最初是于 2007 年首次发布 iPhone、iPod Touch 和 Apple"+
                    "TV。iOS 派生自 OS X，它们共享 Darwin 基础。OS X 操作系统是用在苹果电脑上，iOS 是苹果的移动版本。</p>"+
                    "</div>"+

                    "<div class='tab-pane fade' id='java'>"+
                    "<p style='color: black'>java</p>"+
                    "</div>"+

                "</div>"+

      /*          "<button type='button' class='btn btn-primary btn-lg'>"+
                "<span class='glyphicon glyphicon-user'></span> 个人资料"+
                "</button>"+
                "<button type='button' class='btn btn-primary btn-lg'>"+
                "<span class='glyphicon glyphicon-lock'></span> 修改密码"+
                "</button>"+
                "<button type='button' class='btn btn-primary btn-lg'>"+
                "<span class='glyphicon glyphicon-exclamation-sign'></span> 账号安全"+
                "</button>"+*/
            "</div>"+
          /*  "<div id='info_1'></div>"+
            "<div id='info_2'></div>"+
            "<div id='info_3'></div>"+*/
         "</div>";



function p4_WDXX() {
    $("#content4").empty();

    $("#content4").load("P4_6_myinfo.html #mywdxx",function () {

        var PostData="uid="+myUID;

        ServerRuqest.my_info(PostData,function (x) {

            var obj = JSON.parse(x);
            if (obj.result === "1")
            {
                $("#ds_host").val(obj.data.username);

                $("#imgHead").attr('src',obj.data.head);

            }else{
              //  alert(obj.errorMsg);
            }
        },function (e) {

        });

/*        var  a=document.getElementById('mywdxx');
        var  b=document.getElementById('myTabContent');
        var  c=document.getElementById('myTab');*/
        //c.style.height=a.offsetHeight-(b.offsetHeight+36)+'px';
    });



    //var dd =$("#content4").load("test3.html #mywdxx");

   //document.getElementById("ds_host").value="555555";
  // console.log( typeof(dd));
//    var a =$('#content4').get(0);
/*    console.log($('#content4').get(0));

    console.log($('#mywdxx').offsetHeight);

    console.log($('#myTabContent'));
    var b = document.getElementById('myTab');
    console.log($('#myTab'));

     c.style.height=a.offsetHeight-(b.offsetHeight+36)+'px';*/

}



function runWDWK() {
    GetWDWK_list();
    $("#WDWK").css("color", "#3089CE");
    $("#WDWD").css("color", "#99A7AF");$("#WDFX").css("color", "#99A7AF");$("#WDSC").css("color", "#99A7AF");$("#WDHY").css("color", "#99A7AF");$("#WDXX").css("color", "#99A7AF");
}
function runWDWD() {
    $("#WDWK").css("color", "#99A7AF");
    $("#WDWD").css("color", "#3089CE");$("#WDFX").css("color", "#99A7AF");$("#WDSC").css("color", "#99A7AF");$("#WDHY").css("color", "#99A7AF");$("#WDXX").css("color", "#99A7AF");
}
function runWDFX() {
    $("#WDWK").css("color", "#99A7AF");
    $("#WDWD").css("color", "#99A7AF");$("#WDFX").css("color", "#3089CE");$("#WDSC").css("color", "#99A7AF");$("#WDHY").css("color", "#99A7AF");$("#WDXX").css("color", "#99A7AF");
}
function runWDSC() {
    $("#WDWK").css("color", "#99A7AF");
    $("#WDWD").css("color", "#99A7AF");$("#WDFX").css("color", "#99A7AF");$("#WDSC").css("color", "#3089CE");$("#WDHY").css("color", "#99A7AF");$("#WDXX").css("color", "#99A7AF");
}
function runWDHY() {
    $("#WDWK").css("color", "#99A7AF");
    $("#WDWD").css("color", "#99A7AF");$("#WDFX").css("color", "#99A7AF");$("#WDSC").css("color", "#99A7AF");$("#WDHY").css("color", "#3089CE");$("#WDXX").css("color", "#99A7AF");
}
function runWDXX() {
    p4_WDXX();
    $("#WDWK").css("color", "#99A7AF");
    $("#WDWD").css("color", "#99A7AF");$("#WDFX").css("color", "#99A7AF");$("#WDSC").css("color", "#99A7AF");$("#WDHY").css("color", "#99A7AF");$("#WDXX").css("color", "#3089CE");
}
