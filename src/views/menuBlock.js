$(document).ready(function () {
    $("div.main-menu > div.main-block1").hover(function () {
        $(this).css("background-color", "#368fb0");
        $(this).css("color", "white");
        document.querySelector("div.main-block1").innerHTML = "more information from the block 1";
    }, function () {
        $(this).css("background", "rgba(0, 0, 0,0)");
        $(this).css("color", "darkslategrey");
        document.querySelector("div.main-block1").innerHTML = "block 1";
    });
    $("div.main-menu > div.main-block2").hover(function () {
        $(this).css("background-color", "#368fb0");
        $(this).css("color", "white");
        document.querySelector("div.main-block2").innerHTML = "more information from the block 2";
    }, function () {
        $(this).css("background", "rgba(0, 0, 0,0)");
        $(this).css("color", "darkslategrey");
        document.querySelector("div.main-block2").innerHTML = "block 2";
    });
    $("div.main-menu > div.main-block3").hover(function () {
        $(this).css("background-color", "#368fb0");
        $(this).css("color", "white");
        document.querySelector("div.main-block3").innerHTML = "more information from the block 3";
    }, function () {
        $(this).css("background", "rgba(0, 0, 0,0)");
        $(this).css("color", "darkslategrey");
        document.querySelector("div.main-block3").innerHTML = "block 3";
    });
});
