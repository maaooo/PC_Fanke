/**
 * Created by Administrator on 6/22/2016.
 */
function zeroize(value, length) {
    if (!length) length = 2;
    value = String(value);
    for (var i = 0, zeros = ''; i < (length - value.length); i++) {
        zeros += '0';
    }
    return zeros + value;
};

/*$(document).ready(function (e) {
    runJPKC();
});
*/


var WorksShareList ;
var WorksGoodList ;
var myUID;
var currVideoData;

 

function GetJPKC_list(data) {
    $("#content1").empty();
    var uid=data.rows.item(0).uid;
    myUID=uid;
    var PostData="uid="+uid+"&page="+"1"+"&max="+"50";
    ServerRuqest.works_good_list(PostData,function (x) {
        WorksGoodList = JSON.parse(x);
        if(WorksGoodList.result==="1")
        {
            // var ddiv=document.getElementById("flex-item")
            for (var i = 0; i < WorksGoodList.data.length; i++) {

                var dur=Number(WorksGoodList.data[i].duration);
                var newTime = new Date(dur);
                var time=zeroize(newTime.getMinutes())+":"+zeroize(newTime.getSeconds());

                $("#content1").append(
                    "<div id='video_item'>" +
                        "<div id='video_item_head' style='background-image: url("+WorksGoodList.data[i].screenshot_s +")'>"+
                        "<div id='video_item_head_img'  onclick='palyVideo("+JSON.stringify(WorksGoodList.data[i]) + ")'>"+
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

    });

}

function GetSSFX_list() {
    $("#content1").empty();

    var PostData="uid="+myUID+"&page="+"1"+"&max="+"50";//VmkxarIIilQm6
    ServerRuqest.works_share_list(PostData,function (x) {
        WorksShareList = JSON.parse(x);
        if(WorksShareList.result==="1")
        {
            // var ddiv=document.getElementById("flex-item")
            for (var i = 0; i < WorksShareList.data.length; i++) {

                var dur=Number(WorksShareList.data[i].duration);
                var newTime = new Date(dur);
                var time=zeroize(newTime.getMinutes())+":"+zeroize(newTime.getSeconds());

                $("#content1").append(
                    "<div id='video_item'>" +
                    "<div id='video_item_head' style='background-image: url("+WorksShareList.data[i].screenshot_s +")'>"+
                    "<div id='video_item_head_img'  onclick='palyVideo("+JSON.stringify(WorksShareList.data[i]) +  ")'>"+
                    "</div>"+
                    "<div id='video_item_info'  onclick='ClickComment(" + i + "," + JSON.stringify(WorksShareList.data[i])+");'>"+
                    "<a id='test2' href='#comment_view'></a>"+
                    "<p id='video_item_info_title'>"+WorksShareList.data[i].title +"</p>"+
                    "<p id='video_item_info_time'>"+time +"</p>"+
                    "</div>"+
                    "</div>");

            }
        }
    },function () {

    });
}

function ClickComment(index,data) {
    currVideoData=data;
    var obj=document.getElementById('comment_view');
    if(obj.style.display==="")
    {
        runComment(data);
        obj.style.animation="openComment_view 0.3s forwards";
        obj.style.display="block";
        return;
    }
    if(obj.style.display==="block")
    {
        obj.style.animation="ResetComment_view 0.2s forwards";
        function tttt() {
            obj.removeEventListener('animationend', tttt);
            runComment(data);
            obj.style.animation="ResetComment_view2 0.2s forwards";
        }
        obj.addEventListener("animationend", tttt);

    }

}

function runComment(data) {
    //  alert("runComment");
    $('#commnet_content_write_title').html(data.title);
    var PostData="vid="+data.vid+"&page="+"1"+"&max="+"50";

    var CommentList;
    ServerRuqest.comment_list(PostData, function (x) {
            CommentList = JSON.parse(x);
            if(CommentList.result==="1") {
                //  alert(CommentList.data.length);
                $("#commnet_content_read").empty();
                for (var i = 0; i < CommentList.data.length; i++) {
                    $("#commnet_content_read").append(
                        "<div id='commnet_list_data'>" +
                        "<img src='" + CommentList.data[i].head+ "'>" +"&nbsp;&nbsp;"+
                        "<p>"+"&nbsp;&nbsp;"+"</p>"+
                        "<p id='commnet_list_data_nickname'>"+ CommentList.data[i].nickname+"&nbsp;&nbsp;"+"</p>"+

                        "<p>"+ CommentList.data[i].addtime+"&nbsp;&nbsp;"+"</p>"+
                        "<p>"+ CommentList.data[i].content+"</p>"+

                        "</div>"+"<hr id='commnet_list_hr'/>"

                    );
                }
            }
            if(CommentList.result==="1009"){
                $("#commnet_content_read").empty();
            }
        }
        ,function () {

        });

}

function SendComment() {

    var text = $('#commnet_content_write_intext').val();
    if(text==="")return;
    var PostData="uid="+myUID+"&vid="+currVideoData.vid+"&content="+text;

    ServerRuqest.works_comments(PostData,function (x) {
        var Rus = JSON.parse(x);
        if(Rus.result==="1") {
            //alert("runComment=3");
            runComment(currVideoData);
            document.getElementById("commnet_content_write_intext").value="";
        }
    },function () {

    });

}

function tologin() {
    alert(msg);
    var obj = JSON.parse(msg);
    alert(obj.result);
}

function palyVideo(data) {
    if(data.type==="mp4")
        send_message('PlayMp4',data.downurl);
    if(data.type==="video")
        //position()
       send_message('PlayVideo',data.downurl+','+data.weburl);
}

function position() {
    var x = 1;
    var y = 2;
    var width = 500;
    var height = 300;

    send_message('Position', x + ',' + y + ',' + width + ',' + height);
}

function runJPKC() {
    $("#JPKC").css("color", "#3089CE");
    $("#SSFX").css("color", "#99A7AF");
    sqldata.GetLoginData(GetJPKC_list);

}

function runSSFX() {
    $("#SSFX").css("color", "#3089CE");
    $("#JPKC").css("color", "#99A7AF");
    GetSSFX_list();
}