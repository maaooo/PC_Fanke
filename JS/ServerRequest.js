/**
 * Created by MAO YANG on 6/13/2016.
 */
var ServerData ={
    requestUrl:"http://120.25.98.41/fanke/?mod=wetube&act=",//&act=login
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


        serverdata.login=function(data,callbackOK,callbackError) {
            var url=ServerData.requestUrl+"login";
            this.quest(url,data,callbackOK,callbackError);
        }
        serverdata.register=function(data,callbackOK,callbackError) {
            var url=ServerData.requestUrl+"register";
            this.quest(url,data,callbackOK,callbackError);
        }

        return serverdata;
    }


}