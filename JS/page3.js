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
var WorksStarList ;
var WorksUserRank ;

var currVideoData;


function GetXJKC_list(){
   /* $("#content3").empty();
    var uid=data.rows.item(0).uid;
    $("#XJKC").css("color", "#fff000");
*/
    $("#content3").empty();

     var PostData="uid="+myUID+"&page="+"1"+"&max="+"50";
     ServerRuqest.works_star_list(PostData,function (x) {
         WorksStarList = JSON.parse(x);
     if(WorksStarList.result==="1")
     {
         // var ddiv=document.getElementById("flex-item")
         for (var i = 0; i < WorksStarList.data.length; i++) {

             var dur=Number(WorksStarList.data[i].duration);
             var newTime = new Date(dur);
             var time=zeroize(newTime.getMinutes())+":"+zeroize(newTime.getSeconds());

             $("#content3").append(
             "<div id='video_item'>" +
             "<div id='video_item_head' style='background-image: url("+WorksStarList.data[i].screenshot_s +")'>"+
             "<div id='video_item_head_img'  onclick='palyVideo("+JSON.stringify(WorksStarList.data[i]) + ")'>"+
             "</div>"+
             "<div id='video_item_info'  onclick='ClickComment(" + i + "," + JSON.stringify(WorksStarList.data[i])+");'>"+
             "<a id='test2' href='#comment_view'></a>"+
             "<p id='video_item_info_title'>"+WorksStarList.data[i].title +"</p>"+
             "<p id='video_item_info_time'>"+time +"</p>"+
             "</div>"+
             "</div>");

             }
         }
     },function () {

     });
}
var rankArray=new Array("实习","助教","讲师","副教授","教授","童生","秀才","举人","进士","探花","榜眼","状元")

function GetMSDH_list() {
    $("#content3").empty();
    var PostData="utype="+"teacher";
    ServerRuqest.user_rank(PostData,function (x) {
        WorksUserRank = JSON.parse(x);
        if(WorksUserRank.result==="1") {
            for (var i = 0; i < WorksUserRank.data.length; i++) {
                $("#content3").append(
                    "<div id='userrank_content'>" +
                        "<div id='userrank_content_img'>"+
                            "<img  src='" + WorksUserRank.data[i].head+ "'>" +"&nbsp;&nbsp;"+
                        "</div>"+
                        "<div id='userrank_content_info'>"+
                            "<p id='p_nickname'>"+WorksUserRank.data[i].nickname +"&nbsp;&nbsp;"+ "</p>"+
                            "<p id='p_rank'>"+rankArray[WorksUserRank.data[i].rank] +"</p>"+"<br/>"+"<br/>"+
                            "<p id='p_point'> 积分："+ WorksUserRank.data[i].point+"&nbsp;"+"</p>"+
                            "<p id='p_point'> | 关注："+ WorksUserRank.data[i].attention+"</p>"+
                        "</div>"+
                    "</div>"
                );
                    

            }
        }

    },function () {

    })

}


function GetSBYF_list() {
    $("#content3").empty();
    var PostData="utype="+"student";
    ServerRuqest.user_rank(PostData,function (x) {
        WorksUserRank = JSON.parse(x);
        if(WorksUserRank.result==="1") {
            for (var i = 0; i < WorksUserRank.data.length; i++) {
                $("#content3").append(
                    "<div id='userrank_content'>" +
                    "<div id='userrank_content_img'>"+
                    "<img  src='" + WorksUserRank.data[i].head+ "'>" +"&nbsp;&nbsp;"+
                    "</div>"+
                    "<div id='userrank_content_info'>"+
                    "<p id='p_nickname'>"+WorksUserRank.data[i].nickname +"&nbsp;&nbsp;"+ "</p>"+
                    "<p id='p_rank'>"+rankArray[WorksUserRank.data[i].rank] +"</p>"+"<br/>"+"<br/>"+
                    "<p id='p_point'> 积分："+ WorksUserRank.data[i].point+"&nbsp;"+"</p>"+
                    "<p id='p_point'> | 关注："+ WorksUserRank.data[i].attention+"</p>"+
                    "</div>"+
                    "</div>"
                );


            }
        }

    },function () {

    })

}

function runXJKC() {
    //alert("ok");
    $("#XJKC").css("color", "#3089CE");
    $("#MSDH").css("color", "#99A7AF");
    $("#XBYF").css("color", "#99A7AF");
    GetXJKC_list();
    // alert("ok");
}
function runMSDH() {
    $("#MSDH").css("color", "#3089CE");
    $("#XJKC").css("color", "#99A7AF");
    $("#XBYF").css("color", "#99A7AF");
    GetMSDH_list();
}
function runSBYF() {
    $("#XBYF").css("color", "#3089CE");
    $("#XJKC").css("color", "#99A7AF");
    $("#MSDH").css("color", "#99A7AF");
    GetSBYF_list();
}