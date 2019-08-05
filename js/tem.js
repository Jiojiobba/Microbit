var firefox = navigator.userAgent.indexOf('Firefox') != -1;
document.createElement('hearder');
document.createElement('article');
document.createElement('aside');
document.createElement('section');
document.createElement('nav');
document.createElement('figure');
document.createElement('footer');
document.createElement('i');

window.onload = function() {
    var body_scroll = document.getElementById('body_scroll');
    var bac_box = document.getElementById('bac_box');

    var $winheight = $(window).height();
    var $winwidth = $(window).width();

    // $(".task123456").css("top", heightt * (-0.07) + "vh");
    // var h = $("#task123456").css("top");
    // $("#id").css("left",widthh*0.3+"px");

    // var $winwidth = $(window).width() * 9.25;
    // var $winheight = $(window).height() * 1.85;
    // console.log($(window).height());

    $("img.source-image").attr({
        width: "auto",
        height: $winheight
    });
    $(".task123456").css({
        'bottom': $winheight + 'px',
        'height': $winheight + 'px'
    });
    console.log($(".task123456").width());

    $(window).bind("resize", function() {
        var $winwidth = $(window).height();
        $("img.source-image").attr({
            width: 'auto',
            height: $winheight
        });
        // $("#body_scroll").attr({
        //     height: $winheight,
        // });
    });

    firefox ? body_scroll.addEventListener('DOMMouseScroll', MouseWheel, false) : (body_scroll.onmousewheel = MouseWheel);
    firefox ? bac_box.addEventListener('DOMMouseScroll', MouseWheel, false) : (bac_box.onmousewheel = MouseWheel);

}

function MouseWheel(e) {
    e = e || window.event;
    // console.log(e)
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }

    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
        $("#person_rightrun").css("display", "none");
        $("#person_leftrun").css("display", "none");
        $("#person_norun").css("display", "block");
    }

    // document.title=(e.wheelDelta+'|'+e.detail);

    if (firefox) {
        if (e.detail > 0) {
            //下滚
            console.log($('#body_scroll').scrollLeft())
            $('#body_scroll').scrollLeft($('#body_scroll').scrollLeft() + 120);
            $("#person_norun").css("display", "none");
            $("#person_leftrun").css("display", "none");
            $("#person_rightrun").css("display", "block");
        } else if (e.detail < 0) {
            $('#body_scroll').scrollLeft($('#body_scroll').scrollLeft() - 120);
            $("#person_rightrun").css("display", "none");
            $("#person_norun").css("display", "none");
            $("#person_leftrun").css("display", "block");

        } else {
            $("#person_rightrun").css("display", "none");
            $("#person_leftrun").css("display", "none");
            $("#person_norun").css("display", "block");
        }
    } else { //非火狐

        if (e.wheelDelta > 0) { //上滚
            $('#bac_box').scrollLeft($('#bac_box').scrollLeft() - 120);
            // $('#body_scroll').scrollLeft($('#body_scroll').scrollLeft() - 120);
            $("#person_rightrun").css("display", "none");
            $("#person_norun").css("display", "none");
            $("#person_leftrun").css("display", "block");

        } else if (e.wheelDelta < 0) {
            //下滚
            $('#bac_box').scrollLeft($('#bac_box').scrollLeft() + 120);

            // $('#body_scroll').scrollLeft($('#body_scroll').scrollLeft() + 120);
            $("#person_norun").css("display", "none");
            $("#person_leftrun").css("display", "none");
            $("#person_rightrun").css("display", "block");
            var h1 = $('#bac_box').scrollLeft();
            var h2 = $(".task123456").width();
            // console.log(h1)
            // console.log(h2)

            // if (h1 == h2) {
            //     console.log("555")
            // }

        } else {
            $("#person_rightrun").css("display", "none");
            $("#person_leftrun").css("display", "none");
            $("#person_norun").css("display", "block");
        }

    }
    clearTimeout($.data(this, 'timer'));
    $.data(this, 'timer', setTimeout(function() {
        $("#person_rightrun").css("display", "none");
        $("#person_leftrun").css("display", "none");
        $("#person_norun").css("display", "block");
    }, 300));
}
// 大图标跳转
// $("#handBook1").on('click', function() {
//     // location.href = "tem-handbook.html";
// });
$("#watchtv-one").on('click', function() {
    window.open('tem-watchTV.html', '_blank')
});
$("#clicktotz").on('click', function() {
    window.open('./jump/index.html', '_blank')
});
$("#watchtv-two").on('click', function() {
    window.open('tem-watchTV2.html', '_blank')
});
$("#watchtv-three").on('click', function() {
    window.open('tem-watchTV3.html', '_blank')

});
$("#moniExecise").on('click', function() {
    window.open('./monni/index.html', '_blank')
});
$("#clicktotz2").on('click', function() {
    window.open('./jump/index.html', '_blank')
});


// 通关手册1小图标跳转
$("#smallone").on('click', function() {
    // console.log("跳到第一关");
    $('#bac_box').scrollLeft(4600);
});
$("#smalltwo").on('click', function() {
    // console.log("跳到第一关");
    $('#bac_box').scrollLeft(5950);
});
$("#smallthree").on('click', function() {
    // console.log("跳到第一关");
    $('#bac_box').scrollLeft(8100);
});
$("#smallclick").on('click', function() {
    // console.log("跳到第一关");
    window.open('tem-handbook.html', '_blank')
});



// 通关手册2小图标跳转
$("#smallone2").on('click', function() {
    $('#bac_box').scrollLeft(4600);
});
$("#smalltwo2").on('click', function() {
    $('#bac_box').scrollLeft(5950);
});
$("#smallthree2").on('click', function() {
    $('#bac_box').scrollLeft(8100);
});
$("#smallfour2").on('click', function() {
    $('#bac_box').scrollLeft(11200);
});
$("#smallfive2").on('click', function() {
    $('#bac_box').scrollLeft(12200);
});
$("#smallsix2").on('click', function() {
    $('#bac_box').scrollLeft(13650);
});
$("#smallclick2").on('click', function() {
    window.open('tem-handbook.html', '_blank')
});


// 导航栏
$("#menuone").on('click', function() {
    // window.location = "./taskList.html"
    location.href = "main2.html";
    // location.href = "main.html?num=" + 1;
    // location.href = "task.html?num=" + 1;

});
$("#menutwo").on('click', function() {
    $('#bac_box').scrollLeft(1800);
});
$("#menuthree").on('click', function() {
    $('#bac_box').scrollLeft(9090);

});
$("#menufour").on('click', function() {
    $('#bac_box').scrollLeft(14550);
    // alert("进入下一个任务");
});
// $("#handBook").on('mousemove', function() {
//     alert("hhhhhh");
// })