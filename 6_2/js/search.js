var flag_lang=0, flag_more=0;
$(document).ready(function()
{
    $(".main-search-tag-cross").click(function(){
        $(this).parent().css("display", "none");
    });

    $(".main-block-filter-close").click(function(){
        if ($(this).children(".main-block-filter-close-2").css("display")=="none") {
            $(this).children(".main-block-filter-close-2").css("display", "inline-block");
            $(".main-block-filter-line").eq($(this).parent().parent().parent().index()).css("display", "none");
        } else
        {
            $(this).children(".main-block-filter-close-2").css("display", "none");
            $(".main-block-filter-line").eq($(this).parent().parent().parent().index()).css("display", "inline-block");
        }
    });
    
    
/* Скрипт попапа сортировки */    

    $(".main-results-filter-img").eq(0).click(function(){
        if (flag_sort==0) {
            $( "#main-results-filter-popup" ).css("top",$(".main-results-filter-img").eq(0).offset().top+$(".main-results-filter-img").eq(0).height()+10);
            $( "#main-results-filter-popup" ).css("left", $(".main-results-filter-img").eq(0).offset().left);
            $( "#main-results-filter-popup" ).css("display", "inline-block");
            flag_sort=1;
        } else {
            $("#main-results-filter-popup").css("display", "none");
            flag_sort=0;
        }
    });

    $(".main-results-filter-popup").click(function(){
        $(".main-results-filter-type").eq(0).html($(this).html());
        $("#main-results-filter-popup").css("display", "none");
    });

/* Скрипт попапа выбора языка */   
    
    $(".main-results-filter-lang-open").click(function(){
        if (flag_lang==0) {
            flag_lang=1;
            $(".main-results-filter-lang-open").css("transform", "rotate(45deg)");
            $( "#popup-lang" ).css("top", $( ".main-results-filter-lang-open" ).offset().top+$( ".main-results-filter-lang-open" ).height()+20);
            $( "#popup-lang" ).css("left", $( ".main-results-filter-lang-open" ).offset().left+$( ".main-results-filter-lang-open" ).width()-$( "#popup-lang" ).width()-10);
            $( "#popup-lang" ).css("display", "inline-block");
        } else {
            flag_lang=0;
            $(".main-results-filter-lang-open").css("transform", "rotate(0deg)");
            $( "#popup-lang" ).css("display", "none");
        }
    });
    
/* Скрипт добавления/удаления языка */   
    
    $(".lang-point-add").click(function(){
        if ($(this).css("background-color") != "rgb(135, 206, 235)") {
            $("#main-results-filter-lang").prepend('<div class="main-results-filter-lang-point lang-point-added" data-lang="'+ $(this).html() +'">' + $(this).html() + '</div>');
            $(this).css("background", "#87ceeb");
        }
    });
    
    $('#main-results-filter-lang').on("click", ".lang-point-added", function() {
        let data = $(this).attr("data-lang");
        if (data != "RU") {
            $(this).detach();
            $(".lang-point-add[data-lang='" + data + "']").css("background", "rgb(255, 255, 255)");
        }
    });    
});

