/**
 * Created by Administrator on 7/14/2016.
 */




function ClickComment(type,data) {
    if(type==="JPKC"||type==="SSFX")
    {
        $("#content3_botom").empty();$("#content4_botom").empty();p3_init();p4_init();//清空数据，以免input拥有多个对象 而不能正确获取值
        $("#content1_botom").css("display","block");
        $("#content1").css("width","100%");
        var c1=document.getElementById('content1');
        var c1_b=document.getElementById('content1_botom');
    }
    if(type==="XJKC")
    {
        $("#content1_botom").empty();$("#content4_botom").empty();p1_init();p4_init();
        $("#content3_botom").css("display","block");
        $("#content3").css("width","100%");
        var c1=document.getElementById('content3');
        var c1_b=document.getElementById('content3_botom');
    }
    if(type==="WDWK")
    {
        $("#content1_botom").empty();$("#content3_botom").empty();p1_init();p3_init();
        $("#content4_botom").css("display","block");
        $("#content4").css("width","100%");
        var c1=document.getElementById('content4');
        var c1_b=document.getElementById('content4_botom');
    }


    currVideoData=data;


    if(test===false)
    {
        runComment(type,data);
        c1.style.animation="C1_openComment_view 0.3s forwards";
        c1_b.style.animation="C1B_openComment_view 0.3s forwards";
        test=true;

    }else{
        c1.style.animation="C1_openComment_view_Next_1 0.2s forwards";
        c1_b.style.animation="C1B_openComment_view_Next_1 0.2s  forwards";
        runComment(type,data);
        c1.addEventListener("animationend", an_c1);
        c1_b.addEventListener("animationend", an_c1b);
    }

    function an_c1() {
        c1.removeEventListener('animationend', an_c1);
        c1.style.animation="C1_openComment_view_Next_2 0.2s forwards";
        c1.style.animationFillMode="forwards"
    }
    function an_c1b() {
        c1_b.removeEventListener('animationend', an_c1b);
        c1_b.style.animation="C1B_openComment_view_Next_2 0.2s forwards";
        c1_b.style.animationFillMode="forwards"
    }

}








function runComment(type,data) {

    var view="<div class='comment_view'>"+
        "<div class='commnet_content'>"+
        "<div class='commnet_content_write'>"+
        "<p class='commnet_content_write_title'>评论区</p>"+
        "<input class='commnet_content_write_intext'  type='text' placeholder='写评论'/>"+
        "<input  type='button' value='提交' onclick='SendComment("+JSON.stringify(type)+","+JSON.stringify(data) +");'/>"+
        "<input  class='commnet_close' type='button' value='关闭' onclick='CloseComment();'/>"+
        "</div>"+
        "<div class='commnet_content_read'></div>"+
        "</div>"+
        " </div>";


    if(type==="JPKC"||type==="SSFX") {
        $("#content1_botom").empty();
        $("#content1_botom").append(view);

    }
    if(type==="XJKC") {
        $("#content3_botom").empty();
        $("#content3_botom").append(view);
    }
    if(type==="WDWK") {
        $("#content4_botom").empty();
        $("#content4_botom").append(view);
    }
//console.log(JSON.stringify(data));
    $('.commnet_content_write_title').html(data.title);
    var PostData="vid="+data.vid+"&page="+"1"+"&max="+"50";

    var CommentList;
    ServerRuqest.comment_list(PostData, function (x) {
            CommentList = JSON.parse(x);
            if(CommentList.result==="1") {
                //  alert(CommentList.data.length);
                $(".commnet_content_read").empty();
                for (var i = 0; i < CommentList.data.length; i++) {
                    $(".commnet_content_read").append(
                        "<div class='commnet_list_data'>" +
                            "<img src='" + CommentList.data[i].head+ "'>" +"&nbsp;&nbsp;"+
                            "<p>"+"&nbsp;&nbsp;"+"</p>"+
                            "<p class='commnet_list_data_nickname'>"+ CommentList.data[i].nickname+"&nbsp;&nbsp;"+"</p>"+
                            "<p>"+ CommentList.data[i].addtime+"&nbsp;&nbsp;"+"</p>"+
                            "<p>"+ CommentList.data[i].content+"</p>"+
                        "</div>"+"<hr id='commnet_list_hr'/>"
                    );
                }
            }
            if(CommentList.result==="1009"){
                $(".commnet_content_read").empty();
            }
        }
        ,function () {

        });

}
function CloseComment() {
    p1_init();
    var c1=document.getElementById('content1');
    var c1_b=document.getElementById('content1_botom');
    c1.style.animation=null;
    c1_b.style.animation=null;
}

function SendComment(type,data) {

    console.log(JSON.stringify(data)+type);
    var text = $('.commnet_content_write_intext').val();
    if(text===""){console.log("Error:-->text ==");return};

    var PostData="uid="+myUID+"&vid="+data.vid+"&content="+text;
    console.log("postdata:-->"+PostData);
    ServerRuqest.works_comments(PostData,function (x) {
        var Rus = JSON.parse(x);
        if(Rus.result==="1") {
            //alert("runComment=3");
            //alert(type);
            runComment(type,data);
            document.getElementsByClassName(".commnet_content_write_intext").value="";
        }
    },function () {

    });

}
