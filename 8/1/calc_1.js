var allowed_sym = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
$(document).ready(function()
{
$("#block_calc_num").bind('input', function() {
    $( "#block_calc_error" ).css("display", "none");
    num_check();
    $("#block_calc_num").val($("#block_calc_num").val().toUpperCase());
    $("#block_calc_num_width").html($("#block_calc_num").val());
    if ($("#block_calc_num_width").width() > 60) {
        $("#block_calc_num").css("width", $("#block_calc_num_width").width()+"px");
    }
    if ($("#block_calc_num").val() == "") {
        flag_empty=1; 
        $("#block_calc_submit").css("background", "rgb(160, 160, 160)");
    }
    else {
        flag_empty=0;
        $("#block_calc_submit").css("background", "rgb(43, 135, 219)");
    }
            
});

// Calculator functionality
    
var flag_empty=1;
    
$("#block_calc_submit").click(function() {
    if (flag_empty != 1 && num_check() == true) {
        let base_from = $(".block_calc_select").eq(0).val();
        let base_to = $(".block_calc_select").eq(1).val();
        let number = $("#block_calc_num").val();
        $(".block_ans").html("");
        $("#block_calc_3").css("display", "inline-block");
        if (base_from == base_to) {

            $("#block_calc_2").html(number + " <sub class='a'> " + base_from + " </sub>&nbsp&nbsp=&nbsp&nbsp" + number + "<sub class='a'>" + base_to + "</sub>");
        }
        else if (base_from == 10) {
            let arr_num = number.split(".");
        
            if (arr_num[1] != null) {
                $(".block_ans").eq(0).html('<font style="text-decoration: underline">Целая часть</font><br><br>');
                $(".block_ans").eq(1).html('<font style="text-decoration: underline">Дробная часть</font><br><br>');
                $("#block_calc_2").html(number + " <sub class='a'> " + base_from + " </sub>&nbsp&nbsp=&nbsp&nbsp" + main_ans_from_10(arr_num[0], base_to) + "." + extra_ans_from_10(arr_num[1], base_to) + "<sub class='a'>" + base_to + "</sub>");
                
            }
            else {
                $(".block_ans").eq(0).html('<font style="text-decoration: underline">Целая часть</font><br><br>');
                $("#block_calc_2").html(number + " <sub class='a'> " + base_from + " </sub>&nbsp&nbsp=&nbsp&nbsp" + main_ans_from_10(arr_num[0], base_to) + "<sub class='a'>" + base_to + "</sub>");
            }
        }
        else if (base_to == 10) {
            let arr_num = number.split(".");
            let point = arr_num[0].length;
            
            $("#block_calc_2").html(number + " <sub class='a'> " + base_from + " </sub>&nbsp&nbsp=&nbsp&nbsp" + all_ans_to_10(number, base_from, point) + "<sub class='a'>" + base_to + "</sub>");

        }
        else {
            all_ans_any(number, base_from, base_to);
        }
    }
});
    
$(".block_calc_select").change(function() {
    num_check();
    $( "#block_calc_error" ).css("display", "none");
}); 
    

    
});

function num_check()
{
    var allowed_sym = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let base_from = $(".block_calc_select").eq(0).val();
    let right = Number(base_from)+1;
    let count=0;
    let number = $("#block_calc_num").val();
    let flag = 0;
    for (let i = 0; i < number.length; i++) {
        if (allowed_sym.slice(0, right).indexOf(number[i]) == -1) {
            flag=1;
        }
        if (number[i]==".") count++;
    }
    if (count==2)
        flag=1;
    if (flag == 0) {
        $("#block_calc_num").css("background", "rgb(255, 255, 255)");
        
        return true;
    }
    else {
        $("#block_calc_num").css("background", "#ffc0cb");
        $( "#block_calc_error" ).html("В " + base_from + " - ой системе можно использовать только следующие символы: точка, " + allowed_sym.slice(0, base_from));
        $( "#block_calc_error" ).css("top",$("#block_calc_submit").offset().top-$("#block_calc_submit").height()-20);
        $( "#block_calc_error" ).css("left", $("#block_calc_submit").offset().left);
        $( "#block_calc_error" ).css("display", "inline-block");
        flag_open = 1;
        return false;
    }
    
}
function ReverseString(str) {

   return str.split('').reverse().join('')

}

function main_ans_from_10(a, b)
{
    let main = Number (a);
    let ost = "";
    $(".block_ans").eq(0).append("Переводим целую часть " + main + " в " + b + "-ую систему последовательным делением на " + b + ":<br><br>");
    while (main > 0) {
        ost = ost + (main % b);
        
        $(".block_ans").eq(0).append(main + "/" + b + " = " + Math.floor(main/b) + ", остаток: " + main % b + "<br>");
        main = main/b;
        main = Math.floor (main);
    }
    ost = ReverseString(ost);
    return ost;
}

function extra_ans_from_10(a, b)
{
    let extra = Number ("0." + a);
    let ost = "";
    count = 0;
    $(".block_ans").eq(1).append("Переводим дробную часть в " + b + ":<br><br>");
    while ((extra % 1).toFixed(6) != 0) {
        count ++;
        $(".block_ans").eq(1).append(extra + "*" + b + " = " + extra * b + "<br>");
        extra = extra * b;
        
        if (Math.floor(extra) > 9) {
            
            ost = ost + allowed_sym[Math.floor(extra)+1];
        } else {
            ost = ost + Math.floor(extra);
        }
        extra = (extra % 1).toFixed(6);
        if (count == 11) break;
    }
    ost = ReverseString(ost);
    return ost;
}

function all_ans_to_10(a, b, c)
{
    $(".block_ans_2").eq(0).append("Переводим в десятичную систему:<br><br>");
    a = a.replace(".", "");
    d = a;
    let text = "";
    text = d + " = ";
    let sum = 0;
    e = a.split("");
    for (i = 0; i < a.length; i++) {
        
        allowed_sym.forEach(function(item, j, allowed_sym) {
            if (item == e[i])
                e[i] = j - 1;
        });
        sum += Number(e[i]) * Math.pow(b, c-i-1);
        text = text + Number(e[i]) + " * " + b + " <sup>" + (c-i-1) + "</sup> +";
    }
    text = text.substring(0, text.length - 1);
    text = text + " = " + sum + "<sub>10</sub>";
    $(".block_ans_2").eq(0).append(text + "<br><br>");
    return sum;
}

function all_ans_any(a, b, c)
{
    number = a;
    arr_num = number.split(".");
    point = arr_num[0].length;
    number_1 = all_ans_to_10(number, b, point);
    arr_num = (""+number_1).split(".");
        
    if (arr_num[1] != null) {
        $(".block_ans").eq(0).append('<font style="text-decoration: underline">Целая часть</font><br><br>');
        $(".block_ans").eq(1).append('<font style="text-decoration: underline">Дробная часть</font><br><br>');
        $("#block_calc_2").html(number + " <sub class='a'> " + b + " </sub>&nbsp&nbsp=&nbsp&nbsp" + main_ans_from_10(arr_num[0], c) + "." + extra_ans_from_10(arr_num[1], c) + "<sub class='a'>" + c + "</sub>");

    }
    else {
        $(".block_ans").eq(0).append('<font style="text-decoration: underline">Целая часть</font><br><br>');
        $("#block_calc_2").html(number + " <sub class='a'> " + b + " </sub>&nbsp&nbsp=&nbsp&nbsp" + main_ans_from_10(arr_num[0], c) + "<sub class='a'>" + c + "</sub>");
    }
}