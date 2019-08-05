var imamgeOpen = 0;
var flashOpen = 0;
var step = 1;
var titles;
var numm;
var menuflag = 0;
$(document).ready(function() {
    hidewalk();
    hidecomputer();
    // hidebox();
    // hidetem();
    // hidesouth();
    // hidegift();
});
$(window).on('mousemove', function(e) {
    var w = $(window).width();
    var h = $(window).height();

    $(".parallax").each(function(i, el) {

        var offsetX = e.pageX / w - 2;
        var offsetY = e.pageY / h - 1;

        var offsetX_desk = 0.5 - e.pageX / w;
        var offsetY_desk = 0.5 - e.pageY / h;

        var offsetX_com = 0.5 - e.pageX / w;
        var offsetX_com = 0.5 - e.pageY / h;

        var offset = parseInt($(el).data('offset'));
        var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + 0 + "px, 0px)";
        var translate_desk = "translate3d(" + Math.round(offsetX_desk * offset) + "px," + 0 + "px, 0px)";
        var translate_com = "translate3d(" + Math.round(offsetX_com * offset) + "px," + 0 + "px, 0px)";

        $(el).css({
            '-webkit-transform': translate,
            'transform': translate,
            'moz-transform': translate
        });
        $(".desk,.box,.walk,.tem,.gift,.south").css({
            '-webkit-transform': translate_desk,
            'transform': translate_desk,
            'moz-transform': translate_desk
        });


        $(".computer,.computer-small,computer-small2").css({
            '-webkit-transform': translate_com,
            'transform': translate_com,
            'moz-transform': translate_com
        });

    });


});

$('.computer-small').on('click', function() {
    $(".computer-small").css("background", "url(./source/SVG/button62.svg) no-repeat center");
    numm = 0;
    setTimeout(function() {
        // $(".studyContent").css("background", "#7a8184");
        $(".studyContent").css("background", "");
        $(".titlee").html("认识米思齐");
        titles = "认识米思齐"
        $("#card-box").css("display", "block");
    }, 200);
});
$('#boxx').on('click', function() {
    $(".box").css("background", "url(./source/SVG/button12.svg) no-repeat center");
    numm = 1;
    setTimeout(function() {
        $(".titlee").html("认识microbit");
        titles = "认识microbit"
        $(".studyContent").css("background", "");
        $("#card-box").css("display", "block");
    }, 200);

});
$('#walkk').on('click', function() {
    $(".walk").css("background", "url(./source/SVG/button22.svg) no-repeat center");
    numm = 2;
    setTimeout(function() {
        $(".titlee").html("制作计步器");
        titles = "制作计步器"
        $(".studyContent").css("background", "");
        $("#card-box").css("display", "block");
    }, 200);
});
$('#temm').on('click', function() {
    $(".tem").css("background", "url(./source/SVG/button32.svg) no-repeat center");
    numm = 3;
    setTimeout(function() {
        $(".titlee").html("制作温度计");
        titles = "制作温度计"
        $(".studyContent").css("background", "");
        $("#card-box").css("display", "block");
    }, 200);
});
$('#southh').on('click', function() {
    $(".south").css("background", "url(./source/SVG/button42.svg) no-repeat center");
    numm = 4;
    setTimeout(function() {
        $(".titlee").html("制作指南针");
        $(".studyContent").css("background", "");
        $("#card-box").css("display", "block");
    }, 200);
});


$('#giftt').on('click', function() {
    $(".gift").css("background", "url(./source/SVG/button52.svg) no-repeat center");
    numm = 5;
    setTimeout(function() {
        $(".titlee").html("制作礼物");
        titles = "制作礼物"
        $(".studyContent").css("background", "");
        $("#card-box").css("display", "block");
    }, 200);
});

$('#menu').bind('click', function() {
    console.log(menuflag);

    if (menuflag == 0) {
        $(".menu_ul").css("display", "flex");
        menuflag = 1;
    } else {
        $(".menu_ul").css("display", "none");
        menuflag = 0;
    }
});
$('#home').on('click', function() {
    imamgeOpen = 0;
    flashOpen = 0;
    step = 1;
    titles = "";
    $(".menu_ul").css("display", "none");
    $(".flash").css("display", "none");
    menuflag = 0;
    console.log(menuflag);
    switch (numm) {
        case 0:
            $("#computerpic").hide();
            hidecomputer();
            break;
        case 1:
            $("#boxxpic").hide();
            // hidebox();
            break;
        case 2:
            $("#walkpic").hide();
            hidewalk();
            $(".flash").css("display", "none");
            break;
        case 3:
            $("#tempic").hide();
            // hidetem();
            break;
        case 4:
            $("#southpic").hide();
            // hidesouth();
            break;
        case 5:
            $("#giftpic").hide();
            // hidegift();
            break;
    }
    $("#card-box").css("display", "none");
});
$('#return').bind('click', function() {

    if (step == 4) {
        $(".flash").css("display", "none");
        showwalk();
        step = 3;
        flashOpen = 1;
    } else if (flashOpen == 1) {
        flashOpen = 0;
        imamgeOpen = 1;
        step = 2;
        switch (numm) {
            case 0:
                $("#computerpic").show();
                hidecomputer();
                break;
            case 1:
                $("#boxxpic").show();
                // hidebox();
                break;
            case 2:
                $("#walkpic").show();
                hidewalk();
                break;
            case 3:
                $("#tempic").show();
                $(".temliubox").hide();
                // hidetem();
                break;
            case 4:
                // $("#southpic").show();
                // hidesouth();
                break;
            case 5:
                // $("#giftpic").show();
                // hidegift();
                break;
        }

    } else if (imamgeOpen == 1) {

        imamgeOpen = 0;
        step = 1;
        switch (numm) {
            case 0:
                $("#computerpic").hide();
                hidecomputer();
                break;
            case 1:
                $("#boxxpic").hide();
                // hidebox();
                break;
            case 2:
                $("#walkpic").hide();
                hidewalk();
                break;
            case 3:
                $("#tempic").hide();
                // hidetem();
                break;
            case 4:
                // $("#southpic").hide();
                // hidesouth();
                break;
            case 5:
                // $("#giftpic").hide();
                // hidegift();
                break;
        }
    }
    $(".studyContent").css("background", "");
    $(".titlee").html(titles);


});


$('#righthand').on('click', function() {

    if (step == 1) {
        // 显示图片
        $("#righthand").animate({ left: "850px" });
        $("#righthand").animate({ left: "1120px" });
        $(".studyContent").css("background-color", "white");
        setTimeout(function() {
            switch (numm) {
                case 0:
                    $("#computerpic").show();
                    break;
                case 1:
                    $("#boxxpic").show();
                    break;
                case 2:
                    $("#walkpic").show();
                    break;
                case 3:
                    $("#tempic").show();
                    break;
                case 4:
                    // $("#southpic").show();
                    break;
                case 5:
                    // $("#giftpic").show();
                    break;
            }
            imamgeOpen = 1;
        }, 200);
        step = 2;
    } else if (step == 2) {
        // 播放flash
        $("#righthand").animate({ left: "850px" });
        $("#righthand").animate({ left: "1120px" });

        // $("#boxxpic").css("display", "none");

        setTimeout(function() {
            switch (numm) {
                case 0:
                    $("#computerpic").hide();
                    showcomputer();
                    break;
                case 1:
                    // $("#boxxpic").hide();
                    // showbox();
                    break;
                case 2:
                    $("#walkpic").hide();
                    showbwalk();
                    break;
                case 3:
                    $("#tempic").hide();
                    $(".temliubox").show();
                    break;
                case 4:
                    $("#southpic").hide();
                    showbsouth();
                    break;
                case 5:
                    $("#giftpic").hide();
                    showbgift();
                    break;
            }
        }, 400);

        step = 3;
        imamgeOpen = 0;
        flashOpen = 1;
    } else if (step == 3) {
        $("#righthand").animate({ left: "850px" });
        $("#righthand").animate({ left: "1120px" });
        setTimeout(function() {
            switch (numm) {
                case 2:
                    $("#walkpic").hide();
                    hidewalk();
                    $(".flash").css("display", "block");
                    step = 4;
                    break;
            }
        }, 400);
        imamgeOpen = 0;
        flashOpen = 0;
    }


});
$(".tryatry").on("click", function() {
    window.location = "one.html";
    alert("hhhhh");

    // top.location.href = one.html;
    // if (window != top) {
    //     top.location.href = location.href;
    //     location.href = one.html;
    // }
    // window.href = 
});
//温度计流程图
function showliu() {
    $(".temliubox").show();
}
//电脑视频
function showcomputer() {
    var video = $("#mpcomputer")[0];
    $("#mpcomputer").show();
    video.play();
}

function hidecomputer() {
    var video = $("#mpcomputer")[0];
    $("#mpcomputer").hide();
    // video.pause();
}
//盒子视频
// function showbox() {
//     var video = $("#mpbox")[0];
//     $("#mpbox").show();
//     video.play();
// }

// function hidebox() {
//     var video = $("#mpbox")[0];
//     $("#mpbox").hide();
//     video.pause();
// }
//计步器视频
function showwalk() {
    var video = $("#mpwalk")[0];
    $("#mpwalk").show();
    video.play();
}

function hidewalk() {
    var video = $("#mpwalk")[0];
    $("#mpwalk").hide();
    // video.pause();
}
//温度计视频
// function showbtem() {
//     var video = $("#mptem")[0];
//     $("#mptem").show();
//     video.play();
// }

// function hidetem() {
//     var video = $("#mptem")[0];
//     $("#mptem").hide();
//     video.pause();
// }
//指南针视频
// function showbsouth() {
//     var video = $("#mpsouth")[0];
//     $("#mpsouth").show();
//     video.play();
// }

// function hidesouth() {
//     var video = $("#mpsouth")[0];
//     $("#mpsouth").hide();
//     video.pause();
// }
//礼物视频
// function showbgift() {
//     var video = $("#mpgift")[0];
//     $("#mpgift").show();
//     video.play();
// }

// function hidegift() {
//     var video = $("#mpgift")[0];
//     $("#mpgift").hide();
//     video.pause();
// }
// $(".studyContent").css({
//     "background-image": "url(./source/img/boxxPic.png)",
//     "background-position": "center center",
//     "background-size": "cover",
//     " background-repeat": "no -repeat",
//     " moz-background - size": "cover",
//     " webkit-background - size": "cover",
//     "o-background-size": "cover",
//     " background-size": "cover",
//     "overflow-y": "scroll"
// });
// let thisURL = document.URL;
// var h = String(window.location.href);
// console.log(thisURL)
// console.log(thisURL.split("num=")[1]);
//let pppermison = [];

// for (let i = 1; i < 5; i++) {
//     if (thisURL.split('?')[i] != null && thisURL.split('?')[i] != "") {
//         pppermison[i - 1] = thisURL.split('?')[i];
//     }
// }
// console.log(pppermison);