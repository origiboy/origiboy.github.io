$(document).ready(function()
{
  var time_onload=0;// 1-loading, 2-loaded
  var data='';
  window.time=0;
  $("#form-1-submit").click(function()
  {
    $('#form-head').text("Выберите удобное время");
    $('#form-2').css("display", "flex");
    $('#form-1').css("display", "none");
    if (time_onload==1)
    {
      $('.preloader').css("display", "flex");
    }
    var project=$("#form-1-input").val();
    $.ajax({
      url: '/lib/time.php',         /* Куда пойдет запрос */
      method: 'get',             /* Метод передачи (post или get) */        /* Тип данных в ответе (xml, json, script, html). */
      data: {project: project},     /* Параметры передаваемые в запросе. */
      success: function(a){   /* функция которая будет выполнена после успешного запроса.  */
      data=a;
      time_onload=2;
      $('#form-2').html(data);
    }
    });
    
    
  });

  $("#form-1-input").change(function()
  {
    time_onload=1;
  });

  $(".form-2-block").click(function()
  {
    $(this).css("border", "3px solid rgb(80, 80, 80)");
  });

});

function form_2_blocks(a)
{
  
  if ($(".form-2-block").eq(a).attr('data-user')!="false")
  {
    $(".form-2-block").css("border", "1px solid rgb(80, 80, 80)");
    $(".form-2-block").eq(a).css("border", "3px solid rgb(80, 80, 80)");
    window.time=$(".form-2-block").eq(a).html();
    $("#yandex-pay").children().eq(1).val("Бронирование на "+time);
    $("#yandex-pay").children().eq(2).val("Бронирование на "+time);
    $("#yandex-pay").children().eq(5).val("Бронирование на "+time);
    $("#form-2-submit").css("display", "flex");

  }
  
}
function form_2_blocks_f()
{
   alert("К сожалению, данное время уже занято");
}
function form_2_submit()
{
  var project=$("#form-1-input").val();
  $.ajax({
      url: '/lib/preorder.php',         /* Куда пойдет запрос */
      method: 'post',             /* Метод передачи (post или get) */        /* Тип данных в ответе (xml, json, script, html). */
      data: {check: 6574, project:project, time:time},     /* Параметры передаваемые в запросе. */
      success: function(a){  
      $("#yandex-pay").children().eq(3).val("Заказ "+a);
      $("#yandex-pay").children().eq(7).val("Заказ "+a);
      //$("#yandex-pay").submit();
    }
    });
  
}



