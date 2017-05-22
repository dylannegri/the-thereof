/**
 * Created by dylan on 5/5/2017.
 */

$("#switch01").on('click', function () {
    console.log("clicked");
        $("#bwSlides").css("display", "none");
        $("#obSlides").css("display", "block");
        $("#switch01").css("display", "none");
        $("#switch02").css("display", "block");
});

$("#switch02").on('click', function () {
    console.log("clicked");
    $("#bwSlides").css("display", "block");
    $("#obSlides").css("display", "none");
    $("#switch01").css("display", "block");
    $("#switch02").css("display", "none");
});

$('#switch03').on('click', function () {
    $('#hold01').css("display", "none");
    $("#switch03").css("display", "none");
    $("#hold02").css("display", "block");
    $("#switch04").css("display", "block");
});

$('#switch04').on('click', function () {
    $('#hold01').css("display", "block");
    $("#switch03").css("display", "block");
    $("#hold02").css("display", "none");
    $("#switch04").css("display", "none");
});

$('#switch05').on('click', function () {
    $('#box1').css("display", "none");
    $("#switch05").css("display", "none");
    $("#box2").css("display", "block");
    $("#switch06").css("display", "block");
});

$('#switch06').on('click', function () {
    $('#box1').css("display", "block");
    $("#switch05").css("display", "block");
    $("#box2").css("display", "none");
    $("#switch06").css("display", "none");
});

$(document).ready(function(){
    //console.log("ready!");
    $('body').css("display", "block");
});
