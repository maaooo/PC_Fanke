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
            "<div id='tabselect'></div>"+
            "<div id='info_1'></div>"+
            "<div id='info_2'></div>"+
            "<div id='info_3'></div>"+
         "</div>";


function p4_WDXX() {
    $("#content4").empty();
    $("#content4").append(wdxx);
    var a = document.getElementById('mywdxx');
    var c = document.getElementById('info_1');
        c.style.height=a.offsetHeight-100+'px';

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
