$(document).ready(function()
{
    $("#header-user").css("display", "none");
    $("#profile-edit-3").click(function(){
        $(".profile-edit-3-upload").click();
    });
    $("#profile-edit-line-6-add").click(function(){
        $(".profile-edit-3-upload-certificate").click();
    });
    $("#profile-edit").height($(document).height());
    $("#tour-edit").height($(document).height());
    $('.profile-edit-line-4-2-line').click(function() {
        if ($(this).children('input').is(':checked'))
            $('.profile-edit-line-4-js').eq($(this).index(".profile-edit-line-4-2-line")).css("display", "inline-block") 
        else
                $('.profile-edit-line-4-js').eq($(this).index(".profile-edit-line-4-2-line")).css("display", "none");
    });
    
   
    $('#main-1-r-edit').click(function() {
        $('#profile-edit').css("display", "flex");
    });
    $('.main-7-line').mouseover(function() {
        $(this).css("border", "1px solid #2D9CDB");
         $(this).children(".main-7-line-extra").css("display", "flex");
    });
    $('.main-7-line').mouseout(function() {
        $(this).css("border", "1px solid rgba(255, 255, 255, 1)");
        $(this).children(".main-7-line-extra").css("display", "none");
    });
    
    $('.profile-edit-main-close').click(function() {
        $('#tour-edit').css("display", "none");
    });
    $('.profile-edit-main-close').click(function() {
        $('#profile-edit').css("display", "none");
    });
    $(".main-7-line-extra-edit").click(function() {
        $('#tour-edit').css("display", "flex");
    });
    $("#main-7-button").click(function() {
        $('#tour-edit').css("display", "flex");
    });
    $("#tour-edit-3").click(function(){
        $(".tour-edit-3-upload").click();
    });
    
    $(".tour-edit-grid-s-1-add").click(function(){
        $("#tour-edit-grid-s-1-more-dates").append('<input class="tour-edit-grid-s-1" type="date"><br>');
    });
    
    
});