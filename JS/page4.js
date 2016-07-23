/**
 * Created by Administrator on 7/11/2016.
 */





function p4_init() {
    $("#content4_top").css("display","none");//block
    $("#content4_left").css("display","none");
    $("#content4_right").css("display","none");
    $("#content4_botom").css("display","none");
    $("#content4").css("width","100%");
    $("#content4").css("height","100%");
}

/*function show_file_dialog(element, test) {
    var message = 'DialogTest.' + test;
    var target = document.getElementById(element);

    // Results in a call to the OnQuery method in dialog_test.cpp
    window.cefQuery({
        request: message,
        onSuccess: function(response) {
            target.innerText = response;
        },
        onFailure: function(error_code, error_message) {}
    });
}*/

function p4_WDWD() {
    $("#content4").empty();
}
function p4_WDFX() {
    $("#content4").empty();
}
function p4_WDSC() {
    $("#content4").empty();
}
function p4_WDHY() {
    $("#content4").empty();
}


function runWDWK() {
    p4_WDWK();
    $("#WDWK").css("color", "#3089CE");
    $("#WDWD").css("color", "#99A7AF");$("#WDFX").css("color", "#99A7AF");$("#WDSC").css("color", "#99A7AF");$("#WDHY").css("color", "#99A7AF");$("#WDXX").css("color", "#99A7AF");
}
function runWDWD() {
    p4_WDWD();
    $("#WDWK").css("color", "#99A7AF");
    $("#WDWD").css("color", "#3089CE");$("#WDFX").css("color", "#99A7AF");$("#WDSC").css("color", "#99A7AF");$("#WDHY").css("color", "#99A7AF");$("#WDXX").css("color", "#99A7AF");
}
function runWDFX() {
    p4_WDFX();
    $("#WDWK").css("color", "#99A7AF");
    $("#WDWD").css("color", "#99A7AF");$("#WDFX").css("color", "#3089CE");$("#WDSC").css("color", "#99A7AF");$("#WDHY").css("color", "#99A7AF");$("#WDXX").css("color", "#99A7AF");
}
function runWDSC() {
    p4_WDSC();
    $("#WDWK").css("color", "#99A7AF");
    $("#WDWD").css("color", "#99A7AF");$("#WDFX").css("color", "#99A7AF");$("#WDSC").css("color", "#3089CE");$("#WDHY").css("color", "#99A7AF");$("#WDXX").css("color", "#99A7AF");
}
function runWDHY() {
     p4_WDHY();
    $("#WDWK").css("color", "#99A7AF");
    $("#WDWD").css("color", "#99A7AF");$("#WDFX").css("color", "#99A7AF");$("#WDSC").css("color", "#99A7AF");$("#WDHY").css("color", "#3089CE");$("#WDXX").css("color", "#99A7AF");
}
function runWDXX() {
    p4_WDXX();
    $("#WDWK").css("color", "#99A7AF");
    $("#WDWD").css("color", "#99A7AF");$("#WDFX").css("color", "#99A7AF");$("#WDSC").css("color", "#99A7AF");$("#WDHY").css("color", "#99A7AF");$("#WDXX").css("color", "#3089CE");
}
