/**
 * Created by Administrator on 6/8/2016.
 */


var SQlData ={

    dataBase:false,
    createNew:function () {
        var sqldata={};

        dataBase=openDatabase("login", "1.0", "登入保存表", 1024 * 1024, function () { });

        sqldata.CreateLoginTable = function () {
            dataBase.transaction( function(tx) {
                tx.executeSql("create table if not exists login (id  integer primary key," +
                    " Loginusername TEXT,loginpassword TEXT,isSave BOOLEAN," +
                    " uid TEXT,username TEXT,nickname TEXT,utype TEXT,head TEXT,name TEXT,mobile TEXT,email TEXT," +
                    "province TEXT,city TEXT,school TEXT,classes TEXT,description TEXT,point TEXT,rank TEXT)", [],null,null);
            });
        }
        sqldata.InsertLoginTable=function (name,pasword,isSave) {
            dataBase.transaction(function (tx) {
                tx.executeSql(
                    "insert into login (id,Loginusername, loginpassword,isSave) values(?,?, ?, ?)",
                    [null, name,pasword,isSave]);
            });
        }
        /*
         user 要更新的数据项
         rusData 数据
        
         */
        sqldata.UpdataLoginTable=function (user,rusData,callback) {
            var Rus = JSON.parse(rusData);
            var obj = Rus.data;

            dataBase.transaction(function (tx) {
                tx.executeSql(
                    "update login set uid = ?,username =?, nickname = ?,utype = ?,head = ?,name = ?,mobile = ?,email = ?," +
                    "province= ?,city = ?,school = ?,classes= ?,description= ?,point= ?,rank= ? where Loginusername= ?",
                    [obj.uid,obj.username,obj.nickname,obj.utype,obj.head,obj.name,obj.mobile,obj.email,
                        obj.province,obj.city,obj.school,obj.classes,obj.description,obj.point,obj.rank, user],
                    function (tx, result) {

                        callback(true);
                    },
                    function (tx, error) {
                        callback(false);
                       // alert('更新失败: ' + error.message);
                    });


             /*   tx.executeSql("update login set uid = ? where id = ?",["ddddd3333333333333",1],
                    function (tx, result) {
                       // alert('更新成功: ' );
                        callback();
                    },
                    function (tx, error) {
                        alert('更新失败: ');
                    });*/
            });
        }



        return sqldata;

    }



};
