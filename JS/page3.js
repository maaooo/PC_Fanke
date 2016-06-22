/**
 * Created by Administrator on 6/22/2016.
 */
/*$(document).ready(function (e) {
    runXJKC();
    if($("#XJKC").length>0)
    {
        alert("OK");
    }else{
        alert("NO");
    }
    document.getElementById("XJKC").style.color="blue";


    //alert(document.getElementById("XJKC"));
    //sqldata.GetLoginData(GetXJKC_list);
});*/
var WorksShareList ;
var WorksGoodList ;
var myUID;
var currVideoData;


function GetXJKC_list(data){
    $("#testBody2").empty();
    var uid=data.rows.item(0).uid;
    $("#XJKC").css("color", "#fff000");

    myUID=uid;

    /*   var PostData="uid="+uid+"&page="+"1"+"&max="+"50";
     ServerRuqest.works_good_list(PostData,function (x) {
     WorksGoodList = JSON.parse(x);
     if(WorksGoodList.result==="1")
     {
     // var ddiv=document.getElementById("flex-item")
     for (var i = 0; i < WorksGoodList.data.length; i++) {

     var dur=Number(WorksGoodList.data[i].duration);
     var newTime = new Date(dur);
     var time=zeroize(newTime.getMinutes())+":"+zeroize(newTime.getSeconds());

     $("#testBody2").append(
     "<div id='video_item'>" +
     "<div id='video_item_head' style='background-image: url("+WorksGoodList.data[i].screenshot_s +")'>"+
     "<div id='video_item_head_img'  onclick='palyMP4("+JSON.stringify(WorksGoodList.data[i]) + ")'>"+
     "</div>"+
     "<div id='video_item_info'  onclick='ClickComment(" + i + "," + JSON.stringify(WorksGoodList.data[i])+");'>"+
     "<a id='test2' href='#comment_view'></a>"+
     "<p id='video_item_info_title'>"+WorksGoodList.data[i].title +"</p>"+
     "<p id='video_item_info_time'>"+time +"</p>"+
     "</div>"+
     "</div>");

     }
     }
     },function () {

     });*/
}


function runXJKC() {
    //alert("ok");
    $("#XJKC").css("color", "#fff000");
    //$("#MSDH").css("color", "#99A7AF");
    //$("#XBYF").css("color", "#99A7AF");
    // alert("ok");
}
function runMSDH() {
    $("#MSDH").css("color", "#3089CE");
    $("#XJKC").css("color", "#99A7AF");
    $("#XBYF").css("color", "#99A7AF");
}
function runSBYF() {
    $("#XBYF").css("color", "#3089CE");
    $("#XJKC").css("color", "#99A7AF");
    $("#MSDH").css("color", "#99A7AF");
}