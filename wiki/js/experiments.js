/*下面的注释防止jshint插件误报*/
/* jshint esversion: 6 */
$(function () {
    $(".protocol_title_1, .protocol_title_2").click((e) => {
        let target = $(e.target).attr("data-low");
        $(target).slideToggle('slow');
    });
    $("#change_p").click(()=>{
        $("#protocol_tab").tab('show');
        $("#protocol_1").slideDown('slow');
    });
});