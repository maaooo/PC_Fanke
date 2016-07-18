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

function show_file_dialog(element, test) {
    var message = 'DialogTest.' + test;
    var target = document.getElementById(element);

    // Results in a call to the OnQuery method in dialog_test.cpp
    window.cefQuery({
        request: message,
        onSuccess: function(response) {
            target.innerText = response;
        },
        onFailure: function(error_code, error_message) {}
    });
}




function p4_WDXX() {
    $("#content4").empty();

    $("#content4").load("P4_6_myinfo.html #mywdxx",function () {

        var PostData="uid="+myUID;

        ServerRuqest.my_info(PostData,function (x) {

            var obj = JSON.parse(x);
            if (obj.result === "1")
            {
                $("#ds_nickname").val(obj.data.nickname);
                $("#ds_name").val(obj.data.name);
                $("#ds_mobile").val(obj.data.mobile);
                $("#ds_email").val(obj.data.email);
                $("#ds_description").val(obj.data.description);

                $("#imgHead").attr('src',obj.data.head);

            }else{
              //  alert(obj.errorMsg);
            }
        },function (e) {

        });
 
    });
 
}
function runUserEdit() {
    var fdata=new FormData();
    fdata.append("uid", myUID);
    fdata.append("nickname", $("#ds_nickname").val());
    fdata.append("name", $("#ds_name").val());
    fdata.append("mobile", $("#ds_mobile").val());
    fdata.append("email", $("#ds_email").val());
    fdata.append("description", $("#ds_description").val());
    fdata.append("head", $("#file_upload")[0].files[0]);
    ServerRuqest.user_edit(fdata,function (x) {
        var obj = JSON.parse(x);
        if (obj.result === "1") {
            alert("ok");
        }else{
            alert(x);
        }

    },function (e) {
       // alert(e);
    });
}
function ShwoHeadImage()  {
    var x = document.getElementById("file_upload");

    if(!x || !x.value) return;

    var patn = /\.png$|\.jpg$|\.jpeg$|\.gif$/i;
    if(patn.test(x.value)){


            var reader = new FileReader();
            reader.readAsDataURL($("#file_upload")[0].files[0]);
            reader.onload=function () {
            var y = document.getElementById("imgHead");
            y.setAttribute('src',  this.result);
        }

    }else{
        alert("您选择的似乎不是图像文件。");
    }}


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
