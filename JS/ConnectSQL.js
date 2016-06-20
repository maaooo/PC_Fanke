/**
 * Created by Administrator on 6/8/2016.
 */


var SQlData ={

    dataBase:{},
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
            });
        }

        // "select * from login", [],
        
        sqldata.QueryLoginTable=function (callbalck) {

            dataBase.transaction(function (tx) {
                tx.executeSql(
                    "select  * from login order by id desc limit 0,1", [],
                    function (tx, result) {

                        if(result.rows.length==0) {
                            callbalck(null);return;
                        }
                        var mao=new Object();
                        mao.name=result.rows.item(0).Loginusername;
                        mao.pw=result.rows.item(0).loginpassword;
                        mao.isSave=result.rows.item(0).isSave;
                        callbalck(JSON.stringify(mao));
                        mao=null;
                    },
                    function (tx, error) {
                        //alert('查询失败: ' + error.message);
                    } );
            });

        }

        sqldata.GetLoginData = function (callbalck) {
            dataBase.transaction(function (tx) {
                tx.executeSql(
                    "select  * from login order by id desc limit 0,1", [],
                    function (tx, result) {
                        callbalck(result);
                    },
                    function (tx, error) {
                        //alert('查询失败: ' + error.message);
                    } );
            });
        }



        return sqldata;

    }



};
