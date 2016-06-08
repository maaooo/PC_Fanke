/**
 * Created by Administrator on 6/8/2016.
 */


function send_message(test, params) {
    var message = 'WindowTest.' + test;
    if (typeof params != 'undefined')
        message += ':' + params;

    // Results in a call to the OnQuery method in window_test.cpp.
    window.cefQuery({ 'request': message });
}

function minimize() {
    send_message('Minimize');
}

function maximize() {
    send_message('Maximize');
}

function restore() {
    minimize();
    setTimeout(function () { send_message('Restore'); }, 1000);
}

function winClose() {
    send_message('WinClose');

}

function loadedShow() {
    send_message('LoadedShow');
}

function position() {
    var x = parseInt(document.getElementById('x').value);
    var y = parseInt(document.getElementById('y').value);
    var width = parseInt(document.getElementById('width').value);
    var height = parseInt(document.getElementById('height').value);
    if (isNaN(x) || isNaN(y) || isNaN(width) || isNaN(height))
        alert('Please specify a valid numeric value.');
    else
        send_message('Position', x + ',' + y + ',' + width + ',' + height);
}

function recordVideo() {

}



$(document).ready(function (e) {
    SidebarTabHandler.Init();
    $(".tabItemCurrent").trigger("click");
    loadedShow();
});
var SidebarTabHandler = {
    Init: function () {

        $(".tabItemContainer>li").click(function () {
            $(".tabItemContainer>li>a").removeClass("tabItemCurrent");
            $(".tabItemContainer>li>a").css("color", "#77848B");//设置旧颜色
            $(".tabBodyItem").removeClass("tabBodyCurrent");
            $(this).find("a").addClass("tabItemCurrent");
            $(this).find("a").css("color", "#fff");//设置新颜色
            $($(".tabBodyItem")[$(this).index()]).addClass("tabBodyCurrent");

            var index = $(this).index();
            if (index === 0) $(".tabBodyItem").load("P1_OnlineVideo.html");
            if (index === 1) $(".tabBodyItem").load("P2_CurriculumCommunity.html");
            if (index === 2) $(".tabBodyItem").load("P3_RankingOfSituation.html");
            if (index === 3) $(".tabBodyItem").load("P4_PersonalCenter.html");
        });
    }
}