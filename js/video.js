<!--
//酷播迷你V4：官方连播代码示例20140611//
var CuPlayerList = "http://www.suning.cn/snsite/uploadfile/video/20130721/52f79ff6.flv|http://www.suning.cn/snsite/uploadfile/video/20130722/d6c689c0.flv|http://www.suning.cn/snsite/uploadfile/video/20130722/a5e8262e.flv|http://www.suning.cn/snsite/uploadfile/video/20130722/2ca74f99.flv|http://www.suning.cn/snsite/uploadfile/video/20130722/a5e8262e.flv|http://www.suning.cn/snsite/uploadfile/video/20130722/2ca74f99.flv|http://www.suning.cn/snsite/uploadfile/video/20130722/2ca74f99.flv"
var sp = CuPlayerList.split("|")
var num = sp.length;
var video_index = 0;

function getNext(pars) {
    if (video_index < num - 1) {
        video_index++;
        so.addVariable("CuPlayerFile", sp[video_index]);
        so.addVariable("CuPlayerAutoPlay", "yes"); //是否自动播放
        so.write("CuPlayer");
    } else {
        video_index = 0;
        so.addVariable("CuPlayerFile", sp[video_index]);
        so.addVariable("CuPlayerAutoPlay", "yes"); //是否自动播放
        so.write("CuPlayer");
    }
    $(".list dl dt a").css("background", "#ffffff").css("color", "#333");
    $(".list dl dt a").eq(video_index).css("background", "#efefef").css("color", "red");
    LeftScr(video_index);
}

function changeStream(CuPlayerFile) {
    $(".list dl dt a").css("background", "#ffffff").css("color", "#333");
    $(".list dl dt a:hover").css("background", "#efefef").css("color", "red");
    video_index = CuPlayerFile;
    LeftScr(CuPlayerFile);
    so.addVariable("CuPlayerFile", sp[CuPlayerFile]);
    so.addVariable("CuPlayerAutoPlay", "yes"); //是否自动播放
    so.write("CuPlayer");
    return false;
}
CuPlayerFile = sp[video_index];
$(".list dl dt a").css("background", "#ffffff").css("color", "#333");
$(".list dl dt a").eq(video_index).css("background", "#efefef").css("color", "red");
var so = new SWFObject("CuPlayerMiniV4.swf", "ply", "420", "267", "9", "#000000");
so.addParam("allowfullscreen", "true");
so.addParam("allowscriptaccess", "always");
so.addParam("wmode", "opaque");
so.addParam("quality", "high");
so.addParam("salign", "lt");
so.addVariable("CuPlayerFile", CuPlayerFile);
so.addVariable("CuPlayerSetFile", "CuPlayerSetFile.xml"); //* 必须存在/播放器配置文件地址
so.addVariable("CuPlayerImage", "images/start.jpg"); //* 必须存在/视频略缩图,本图片文件必须正确
so.addVariable("CuPlayerWidth", "420"); //视频宽度
so.addVariable("CuPlayerHeight", "267"); //视频高度
so.addVariable("CuPlayerAutoPlay", "yes"); //是否自动播放
//so.addVariable("CuPlayerLogo","logo.png"); //Logo文件地址
so.addVariable("CuPlayerPosition", "bottom-right"); //Logo显示的位置
so.write("CuPlayer");

function LeftScr(m) {
        var scrtop;
        if (m > 1) {
            scrtop = 55 * (m - 1);
        } else {
            scrtop = 0;
        }
        $(".list").animate({
            scrollTop: scrtop
        }, 130);
    }
    //-->