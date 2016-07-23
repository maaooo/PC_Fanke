/**
 * Created by MAO YANG on 6/13/2016.
 */
var ServerData ={
    requestUrl:"http://120.25.98.41/fanke/?mod=wetube&kind=pc&act=",//&act=login
    createServer:function () {
        var serverdata={};
        serverdata.quest=function (url,data,callbackOK,callbackError) {
            var xhr = new XMLHttpRequest() ;
            xhr.open("POST",url,true);
            xhr.onreadystatechange = function () {
                if(xhr.readyState==4)
                {
                    if(xhr.status==200)
                    {
                        callbackOK(xhr.responseText);
                    }else{
                        callbackError(xhr.status);
                    }
                }else{
                  //  console.log(xhr.readyState);
                }

            };
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(data);
        }

        serverdata.questUpdataFile=function (url,fdata,callbackOK,callbackError) {
            var xhr = new XMLHttpRequest() ;


            xhr.open("POST",url,true);
            xhr.onreadystatechange = function () {
                if(xhr.readyState==4)
                {
                    if(xhr.status==200)
                    {
                        callbackOK(xhr.responseText);
                    }else{
                        callbackError(xhr.status);
                    }
                }else{
                    //  console.log(xhr.readyState);
                }

            };
            //xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(fdata);

        }


        serverdata.login = function(data,callbackOK,callbackError) {
            var url=ServerData.requestUrl+"login";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.register = function(data,callbackOK,callbackError) {
            var url=ServerData.requestUrl+"register";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.works_good_list = function(data,callbackOK,callbackError) {//精品课程列表
            var url=ServerData.requestUrl+"works_good_list";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.comment_list = function(data,callbackOK,callbackError) {//评论列表
            var url=ServerData.requestUrl+"comment_list";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.works_comments = function(data,callbackOK,callbackError) {//微课评论
            var url=ServerData.requestUrl+"works_comments";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.works_share_list = function(data,callbackOK,callbackError) {//师生分享列表
            var url=ServerData.requestUrl+"works_share_list";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.works_star_list = function(data,callbackOK,callbackError) {//星级课程列表
            var url=ServerData.requestUrl+"works_star_list";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.user_rank = function(data,callbackOK,callbackError) {//用户排行列表
            var url=ServerData.requestUrl+"user_rank";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.my_weike = function(data,callbackOK,callbackError) {//我的微课列表
            var url=ServerData.requestUrl+"my_weike";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.my_question = function(data,callbackOK,callbackError) {//我的问答列表
            var url=ServerData.requestUrl+"my_question";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.my_share = function(data,callbackOK,callbackError) {//我的分享列表
            var url=ServerData.requestUrl+"my_share";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.my_collection = function(data,callbackOK,callbackError) {//我的收藏列表
            var url=ServerData.requestUrl+"my_collection";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.my_friend = function(data,callbackOK,callbackError) {//我的好友列表
            var url=ServerData.requestUrl+"my_friend";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.my_info = function(data,callbackOK,callbackError) {//我的个人信息
            var url=ServerData.requestUrl+"my_info";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.user_edit = function(data,callbackOK,callbackError) {//我的个人信息
            var url=ServerData.requestUrl+"user_edit";
            this.questUpdataFile(url,data,callbackOK,callbackError);
        }
        serverdata.up_psd = function(data,callbackOK,callbackError) {//修改用户密码
            var url=ServerData.requestUrl+"up_psd";
            this.quest(url,data,callbackOK,callbackError);
        }


        serverdata.question_course_all = function(data,callbackOK,callbackError) {//课程社区问题列表
            var url=ServerData.requestUrl+"question_course_all";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.question_info = function(data,callbackOK,callbackError) {//问题详情
            var url=ServerData.requestUrl+"question_info";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.ask_alike = function(data,callbackOK,callbackError) {//发表同问
            var url=ServerData.requestUrl+"ask_alike";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.ask_alike_list = function(data,callbackOK,callbackError) {//同问列表
            var url=ServerData.requestUrl+"ask_alike_list";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.answer_question = function(data,callbackOK,callbackError) {//回答问题
            var url=ServerData.requestUrl+"answer_question";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.answer_list = function(data,callbackOK,callbackError) {//回答列表
            var url=ServerData.requestUrl+"answer_list";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.answer_weike_list = function(data,callbackOK,callbackError) {//微课回答简要列表
            var url=ServerData.requestUrl+"answer_weike_list";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.my_question = function(data,callbackOK,callbackError) {//微课回答简要列表
            var url=ServerData.requestUrl+"my_question";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.tribe_list = function(data,callbackOK,callbackError) {//兴趣部落列表
            var url=ServerData.requestUrl+"tribe_list";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.tribe_attention = function(data,callbackOK,callbackError) {//关注兴趣部落
            var url=ServerData.requestUrl+"tribe_attention";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.tribe_info_introduce = function(data,callbackOK,callbackError) {//部落详情介绍
            var url=ServerData.requestUrl+"tribe_info_introduce";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.tribe_member_list = function(data,callbackOK,callbackError) {//兴趣部落成员列表
            var url=ServerData.requestUrl+"tribe_member_list";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.my_tribe = function(data,callbackOK,callbackError) {//我的部落列表
            var url=ServerData.requestUrl+"my_tribe";
            this.quest(url,data,callbackOK,callbackError);
        }
        return serverdata;
    }


}