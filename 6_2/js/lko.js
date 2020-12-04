var count = 1;
$(document).ready(function()
{
    $('.input-multiple').multipleSelect();
    
    $("#header-user").css("display", "none");
    $("#profile-edit-3").click(function(){
        $(".profile-edit-3-upload").click();
    });
    $("#profile-edit-line-6-add").click(function(){
        $(".profile-edit-3-upload-certificate").click();
    });
    $("#profile-edit").height($(document).height());
    $("#tour-edit").height($(document).height());

    
   
    $('#main-1-r-edit').click(function() {
        $('#profile-edit').css("display", "flex");
        $("#profile-edit").height($(document).height());
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
        $("#tour-edit").height($(document).height());
    });
    $("#main-7-button").click(function() {
        $('#tour-edit').css("display", "flex");
        $("#tour-edit").height($(document).height());
    });
    $("#tour-edit-3").click(function(){
        $(".tour-edit-3-upload").click();
    });
    
    $(".tour-edit-grid-s-1-add").click(function(){
        count++;
        $("#tour-edit-grid-s-1-more-dates").append(`<div class="tour-edit-grid-r-d-line">
                <div class="tour-edit-grid-r-d-line-1">` + count + `</div>
                <input class="tour-edit-grid-r-d-line-2" type="date">
                <input class="tour-edit-grid-r-d-line-3" type="time">
                <input class="tour-edit-grid-r-d-line-4" type="date">
                <input class="tour-edit-grid-r-d-line-5" type="time">
                <input class="tour-edit-grid-r-d-line-6">
                <select class="tour-edit-grid-r-d-line-7">
                    <option>&#8381;</option>
                    <option>&#36;</option>
                    <option>&euro;</option>
                </select>

            </div>`);
    });
    
    
});
$(window).resize(function(){
    $("#tour-edit").height($(document).height());
    $("#profile-edit").height($(document).height());
});
