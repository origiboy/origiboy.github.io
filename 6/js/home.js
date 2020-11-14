var tags_count=0;
$(document).ready(function()
{
	var str=$(".main-block-line-r-word").css("font-size");
	str=str.replace("px", "");
	var line_height=Number(str);
	$(".main-block-line-r-places").height(line_height*3)
  
  
  $(".main-block-top").click(function(){
    $(".main-block-top").css("font-weight", "100");
    $(this).css("font-weight", "900");
    $(".main-block").css("display", "none");
    $(".main-block").eq($(this).index()).css("display", "inline-block");
  });
  var flag_extra=0;
  
  $(".main-block-line-r-more").click(function(){
  if (flag_extra==0)
  {
    $(this).parent().children(".main-block-line-r-places").css("height", "auto");
    flag_extra=1;
    $(this).css("transform", "rotate(45deg)");
  }
  else
  {
    $(this).parent().children(".main-block-line-r-places").css("height", line_height*3+"px");
    flag_extra=0;
    $(this).css("transform", "rotate(0deg)");
  }
  });

  var flag_extra_c=0;
  
  $("#main-block-more-c").click(function(){
  if (flag_extra_c==0)
  {
    $("#main-block-more-c-extra").css("display", "inline");
    flag_extra_c=1;
    $(this).children(".main-block-more-c-img").css("transform", "rotate(45deg)");
  }
  else
  {
   $("#main-block-more-c-extra").css("display", "none");
    flag_extra_c=0;
    $(this).children(".main-block-more-c-img").css("transform", "rotate(0deg)");
  }
  });

  
  $(".main-block-2-l-head").click(function(){
    $(".main-block-2-l-head").css("color", "rgb(153, 153, 153)");
    $(".main-block-2-l-head").css("background", "rgb(238, 238, 238)");
    $(this).css("color", "rgb(255, 255, 255)");
    $(this).css("background", "rgb(0, 0, 0)");
    $(".main-block-2-r-block").css("display", "none");
    $(".main-block-2-r-block").eq($(this).index()).css("display", "flex");
  });

/*Добавление тегов в поисковую строку*/



$(".main-block-line-l").click(function(){

  if (tags_count<=3)
  {
    $("#main-search-tags").append('<div class="main-search-tag" onclick="tag_delete(this)"><span>'+$(this).html()+'</span><img class="main-search-tag-cross" src="images/icon_cross.png"></div>');
    tags_count++;
  }
});
$(".main-block-line-r-word").click(function(){
  if (tags_count<=3)
  {
    $("#main-search-tags").append('<div class="main-search-tag" onclick="tag_delete(this)"><span>'+$(this).html()+'</span><img class="main-search-tag-cross" src="images/icon_cross.png"></div>');
    tags_count++;
  }
});


  
});

function tag_delete(a)
{
  tags_count--;
  a.style.display="none";  
}