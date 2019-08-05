var selectedNum = [0, 0, 0, 0, 0]
var selectedName = ["indexx", "taskList", "tem", "getResource", "aboutweb"]

$(document).ready(function($) {
    var li = document.getElementsByTagName("li")[4]
    hidesub(li); 
});

function selectedMenu(i) {
    var j = parseInt(i);
    for (var m = 1; m < 6; m++) {
        if (m == j) {
            selectedNum[m] = 1;
            // console.log(m)
        } else {
            selectedNum[m] = 0;
        }
        switch (selectedNum[i]) {
            case 1:
                var str = '#' + selectedName[i];
                $(str).css("border-bottom", "white 3px solid");
                break;
            case 0:
                var str = '#' + selectedName[i];
                $(str).css("border-bottom", "white 0px solid");
                break;
        }
    }
    // console.log(selectedNum)

}

function showsub(li) {
    var submenu = li.getElementsByTagName("ul")[0];
    submenu.style.display = "block";
}

function hidesub(li) {
    var submenu = li.getElementsByTagName("ul")[0];
    submenu.style.display = "none";
}