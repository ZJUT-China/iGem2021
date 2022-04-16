/*防jshint误报*/
/* jshint esversion: 6 */
$(function () {
    'use strict';
    var de = 0;
    $(window).scroll(() => {
        let dis = $(window).scrollTop() - de;
            $(".parallax").animate({
                top: `+=${dis * 0.5}px`
            }, 0);
        de = $(window).scrollTop();
    });
    $(".slidedown").click((e) => {
        console.log("h");
        let target = $(e.target).attr("data-href");
        let y = $(target).offset().top;
        console.log(y);
        $("body,html").animate({
            scrollTop: y
        }, 1000);
    });
});