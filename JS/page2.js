/**
 * Created by Administrator on 7/20/2016.
 */
function p2_init() {
    $("#content2_top").css("display","none");//block
    $("#content2_left").css("display","none");
    $("#content2_right").css("display","none");
    $("#content2_botom").css("display","none");
    $("#content2").css("width","100%");
    $("#content2").css("height","100%");
}
var question_all_list;
function p2_mycourse() {
    $("#content2").empty();

    $("#content2").load("P2_1_course.html #mycourse",function () {
        $("#leftA").empty();
        $("#leftA").load("P2_1_course.html #EnterQuestion",function () {
            $("#leftA").append("<div id='titleAllQuestion' style='width: 100%;height: 36px;background-color: #414A4F;float: left;margin-top: 15px'><p style='margin: 10px 10px;'>全部问题</p></div>");
            var PostData="page="+"1"+"&max=100";
            ServerRuqest.question_course_all(PostData,function (x) {
                question_all_list = JSON.parse(x);
                if(question_all_list.result==="1") {
                    for (var i = 0; i < question_all_list.data.length; i++) {
                        $("#leftA").append("<div style='float: left;width: 100%'>" +
                                                "<div style='width: 100%;height: 10px;background-color: #373F43;border:1px solid #2D3235'>" + "</div>"+
                                                "<div style='width: 100%;height: 66px;background-color: #414A4F;'>" +
                                                    "<div class='use-flex'>" +
                                                        "<div  style='width:50px; float: left;background-color: #414A4F;height: 100%'><img src='"+ question_all_list.data[i].head +"' style='width: 36px;height: 36px;margin: 10px 10px;'></div>"+
                                                        "<div  style='float: left;background-color: #414A4F;height: 100%'>" +
                                                            "<div style='float: left;width: 100%;height: 25px'>" +
                                                                "<b style='float: left;margin-top: 10px;color: #989C9E'>"+question_all_list.data[i].nickname +"</b>"+
                                                                "<b style='float: right;margin-top: 10px;margin-right: 30px;color: #7A7F82'>"+"同问 "+question_all_list.data[i].ask +" | 回答"+question_all_list.data[i].weike +"</b>"+
                                                            "</div>"+
                                                            "<p  style='float: left;margin-top: 5px;color: #7A7F82'>"+ question_all_list.data[i].addtime + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp来自&nbsp&nbsp"+  question_all_list.data[i].title+ "</p>"+
                                                        "</div>"+
                                                    "</div>"+
                                                "</div>"+
                                                "<div  style='float: left ;background-color: #414A4F;height: 120px;width: 100%'>" +
                                                    "<div class='use-flex'>" +
                                                        "<div style='width: 120px;float: left;background-color: #414A4F;height: 100%'>" +
                                                            "<img src='" + question_all_list.data[i].img+ "' style='margin:0px 10px;width: 100px;float:left;'>" +
                                                        "</div>"+
                                                        "<div style='float: left;width: 100%;background-color: #414A4F;'>" +
                                                            "<h4 style='float: left'>"+question_all_list.data[i].question+"+</h4>"+
                                                        "</div>"+
                                                    "</div>"+

                                                "</div>"+
                                            "</div>");
                    }

                }
            },function () {
                
            });
        });
    });
}
function ShowModel2(color,info) {
    $('#modelinfo2').attr("style","color:"+color);
    $('#modelinfo2').text(info);
    $('#myModal2').modal('show');
}
function ShwoImage() {
    var x = document.getElementById("Imagefile_upload");

    if(!x || !x.value) return;

    var patn = /\.png$|\.jpg$|\.jpeg$|\.gif$/i;
    if(patn.test(x.value)){

        var reader = new FileReader();
        reader.readAsDataURL($("#Imagefile_upload")[0].files[0]);
        reader.onload=function () {
            var y = document.getElementById("questionImg");
            y.setAttribute('style',  "display:block");
            y.setAttribute('src',  this.result);
            y.setAttribute('style',  "height:80px;float:left;margin:3px");
        }

    }else{

        ShowModel2("red","您选择的似乎不是图像文件!");
        //$('#myModal').modal('show');
        //alert("您选择的似乎不是图像文件。");
    }
}