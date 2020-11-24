$(document).ready(function()
{
    $(".block_1_calc_num_1").bind('input', function() {
        if (Number($(this).val()) > 60)
            $(this).val(60);
    });
    $("#block_1_calc_submit").click(function() {
        let a = $(".block_1_calc_num").eq(0).val() * 60 * 60 + $(".block_1_calc_num").eq(1).val() * 60 + $(".block_1_calc_num").eq(2).val()*1;
        let b = $(".block_1_calc_num").eq(3).val() * 60 * 60 + $(".block_1_calc_num").eq(4).val() * 60 + $(".block_1_calc_num").eq(5).val()*1;
        
        let c = Math.abs(a-b);
        
        let hours = Math.floor(c/(60*60));
        let min = Math.floor((c - hours * 60*60) / 60);
        let sec = c - hours * 60 * 60 - min * 60;
        $("#block_1_calc_result").html("Разность: " + String(hours).padStart(2,'0') + ":" + String(min).padStart(2,'0') + ":" +  String(sec).padStart(2,'0'));
    });
});