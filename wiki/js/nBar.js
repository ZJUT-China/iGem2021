/*下面的注释防止jshint插件误报*/
/* jshint esversion: 6 */
var lastMenu;
$(document).ready(function () {
    var windowWidth = $(window).width();
    toggle(windowWidth);
    var l = 0;
    $(window).scroll(() => {
        let y = $(this).scrollTop();
        let dis = y - l;
        if (y > 0) {
            $(".nBar").addClass("show");
        } else {
            $(".nBar").removeClass("show");
        }
        l = y;
    });
    $(".phnBarButton").click(function () {
        if ($(window).scrollTop() == 0 ) {
            console.log($(".show").length);
            if($(".show").length == 0){
                $(".nBar").addClass("show");
            }else{
                $(".nBar").removeClass("show");
            }
            
        }
    });
    $(window).resize(function () {
        windowWidth = $(window).width();
        return toggle(windowWidth);
    });

    function toggle(w) {
        if (w <= 768) {
            $("label.menu-1").click(function () {
                var radioId = "#" + $(this).attr("for");
                if (!$(radioId).is("checked")) {
                    $(this).next(".dropDown").slideDown(1000);
                    if (lastMenu != this) {
                        $(lastMenu).next(".dropDown").slideUp(1000);
                    }
                }
                lastMenu = this;
            });
        }
    }
});