/**
 * Created by maoyang on 7/19/2016.
 */
var my_weikeList ;

function p4_WDWK() {
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