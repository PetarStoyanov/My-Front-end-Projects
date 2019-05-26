
$('#groups_list li').hover( function () {
    let $this = $(this)    
    let input = $this.attr('id');
    
    $('.gr_content').css("display","none");
    $('#groups_list li').css({ "background-color": "#f2fdf4", "color": "#355f3b" });

    if (input == "li1") {
        $('#gr_content1').css("display", "block");   
        $('#li1').css({ "background-color": "#ffffff", "color": "#469d46" });
    }
    if (input == "li2") {
        $('#gr_content2').css("display", "block");
        $('#li2').css({ "background-color": "#ffffff", "color": "#469d46" });
    }
    if (input == "li3") {
        $('#gr_content3').css("display", "block");
        $('#li3').css({ "background-color": "#ffffff", "color": "#469d46" });
    }
    if (input == "li4") {
        $('#gr_content4').css("display", "block");
        $('#li4').css({ "background-color": "#ffffff", "color": "#469d46" });
    }
    if (input == "li5") {
        $('#gr_content5').css("display", "block");
        $('#li5').css({ "background-color": "#ffffff", "color": "#469d46" });
    }
    if (input == "li6") {
        $('#gr_content6').css("display", "block");
        $('#li6').css({ "background-color": "#ffffff", "color": "#469d46" });
    }    
})
