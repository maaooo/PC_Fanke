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


        return serverdata;
    }


}