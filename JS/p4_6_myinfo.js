/**
 * Created by maoyang on 7/19/2016.          E_mail:yang.mao.china@gmail.com
 */
function p4_WDXX() {
    $("#content4").empty();

    $("#content4").load("P4_6_myinfo.html #mywdxx",function () {

        var PostData="uid="+myUID;

        ServerRuqest.my_info(PostData,function (x) {

            var obj = JSON.parse(x);
            if (obj.result === "1")
            {
                $("#ds_nickname").val(obj.data.nickname);
                $("#ds_name").val(obj.data.name);
                $("#ds_mobile").val(obj.data.mobile);
                $("#ds_email").val(obj.data.email);
                $("#ds_description").val(obj.data.description);

                $("#imgHead").attr('src',obj.data.head);

            }else{
                //  alert(obj.errorMsg);
            }
        },function (e) {

        });

    });

}
function ShowModel(color,info) {
    $('#modelinfo').attr("style","color:"+color);
    $('#modelinfo').text(info);
    $('#myModal').modal('show');
}

function runPasswordEdit() {

    var oldpsd=$("#old_pw").val();
    var newpsd1=$("#new_pw1").val();
    var newpsd2=$("#new_pw2").val();

    if(oldpsd==="")
    {
        ShowModel("red","请填写原密码!");
        return;
    }
    if(newpsd1!=newpsd2)
    {
        ShowModel("red","密码再一次确认不正确!");
        return;
    }
    if(newpsd1.length<5)
    {
        ShowModel("red","新密码字符长度不够（6位或以上）!");
        return;
    }
    var PostData="uid="+myUID+"&old_psd="+oldpsd+"&new_psd="+newpsd1;
    ServerRuqest.up_psd(PostData,function (x) {
        var obj = JSON.parse(x);
        if (obj.result === "1") {
            ShowModel("block","修改成功!");
        }else{
            ShowModel("red","修改失败："+obj.errorMsg);
        }

    },function (e) {
        ShowModel("red","修改失败："+e);
    });
}


function runUserEdit() {
    var fdata=new FormData();
    fdata.append("uid", myUID);
    fdata.append("nickname", $("#ds_nickname").val());
    fdata.append("name", $("#ds_name").val());
    fdata.append("mobile", $("#ds_mobile").val());
    fdata.append("email", $("#ds_email").val());
    fdata.append("description", $("#ds_description").val());
    fdata.append("head", $("#file_upload")[0].files[0]);
    ServerRuqest.user_edit(fdata,function (x) {
        var obj = JSON.parse(x);
        if (obj.result === "1") {
            ShowModel("block","修改成功！");
        }else{
            ShowModel("red","修改失败："+obj.errorMsg);
        }

    },function (e) {
        // alert(e);
    });
}
function ShwoHeadImage()  {
    var x = document.getElementById("file_upload");

    if(!x || !x.value) return;

    var patn = /\.png$|\.jpg$|\.jpeg$|\.gif$/i;
    if(patn.test(x.value)){


        var reader = new FileReader();
        reader.readAsDataURL($("#file_upload")[0].files[0]);
        reader.onload=function () {
            var y = document.getElementById("imgHead");
            y.setAttribute('src',  this.result);
        }

    }else{
        ShowModel("red","您选择的似乎不是图像文件!");
        //$('#myModal').modal('show');
        //alert("您选择的似乎不是图像文件。");
    }
}
