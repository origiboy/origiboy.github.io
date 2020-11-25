$(document).ready(function()
{
$( ".main-desc-r-order-extra-1" ).mouseover(function() {
$( "#main-desc-r-order-popup" ).css("top", $( ".main-desc-r-order-extra-1" ).offset().top+30);
$( "#main-desc-r-order-popup" ).css("left", $( ".main-desc-r-order-extra-1" ).offset().left);
$( "#main-desc-r-order-popup" ).css("display", "inline-block");
});
$( ".main-desc-r-order-extra-1" ).mouseleave(function() {
$( "#main-desc-r-order-popup" ).css("display", "none");
});
    $( ".main-desc-r-order-extra-2" ).mouseover(function() {
$( "#main-desc-r-order-popup-2" ).css("top", $( ".main-desc-r-order-extra-2" ).offset().top+30);
$( "#main-desc-r-order-popup-2" ).css("left", $( ".main-desc-r-order-extra-2" ).offset().left);
$( "#main-desc-r-order-popup-2" ).css("display", "inline-block");
});
$( ".main-desc-r-order-extra-2" ).mouseleave(function() {
$( "#main-desc-r-order-popup-2" ).css("display", "none");
});
flag_menu=0;
$("#header-burger").click(function(){
if (flag_menu==0)
{
$("#menu").css("display", "inline-block");
flag_menu=1;
}
else
{
$("#menu").css("display", "none");
flag_menu=0;
}
});

$(".main-desc-r-order-popup-open").click(function(){
let index=$(this).index('.main-desc-r-order-popup-open');
$(".main-desc-r-order-popup-l").eq(index).css("display", "inline-block");
});
flag_more=0;
$(".main-bottom-icon").eq(1).click(function(){
if (flag_more==0)
{
$( "#main-bottom-icon-menu" ).css("top",$(".main-bottom-icon").eq(1).offset().top-$("#main-bottom-icon-menu").height()-20);
$( "#main-bottom-icon-menu" ).css("left", $(".main-bottom-icon").eq(1).offset().left);
$( "#main-bottom-icon-menu" ).css("display", "inline-block");
flag_more=1;
}
else
{
$("#main-bottom-icon-menu").css("display", "none");
flag_more=0;
}
});

});