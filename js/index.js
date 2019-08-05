var selectedNum = [0, 0, 0, 0, 0]
var selectedName = ["indexx", "taskList", "tem", "getResource", "aboutweb"]
document.createElement('hearder');
document.createElement('article');
document.createElement('aside');
document.createElement('section');
document.createElement('nav');
document.createElement('figure');
document.createElement('footer');
document.createElement('i');
$(document).ready(function($) {
    var video = $("#vvdieoplay")[0];
    $("#vvdieo").hide();
    video.pause();
    $(".menu-item").on("click", function() {
        var id = $(this)[0].id;
        switch (id) {
            case 'index':
                selectedMenu(0);
                break;
            case 'taskList':
                selectedMenu(1);
                break;
            case 'tem':
                selectedMenu(2);
                break;
            case 'getResource':
                selectedMenu(3);
                break;
            case 'abooutweb':
                selectedMenu(4);
                break;
        }
    })
})

function showb() {
    var video = $("#vvdieoplay")[0];
    $("#vvdieo").show();
    video.play();
}

function hideb() {
    var video = $("#vvdieoplay")[0];
    $("#vvdieo").hide();
    video.pause();
}

//窗口关闭函数
$("#close").on('click', function() {
    hideb();
});

//帮助麦克点击
$("#helpMike").on('click', function() {
    // $("#nm_p").removeClass("layer.this:after");
    // $("#nm_p").addClass("layer.this:after");
    location.href = "taskList.html";
    // location.href = "task.html?num=" + 1;

});

$("#watchTV").on('click', function() {
    showb();
});


$("#indexGif").on('click', function() {
    showb();
});


function selectedMenu(i) {
    var j = parseInt(i);
    for (var m = 1; m < 6; m++) {
        if (m == j) {
            selectedNum[m] = 1;
        } else {
            selectedNum[m] = 0;
        }
        switch (selectedNum[i]) {
            case 1:
                var str = '#' + selectedName[i];
                $(str).css("border-bottom", " white 3px solid");
                break;
            case 0:
                var str = '#' + selectedName[i];
                $(str).css("border-bottom", " white 0px solid");
                break;
        }
    }

}