/*下面的注释防止jshint插件误报*/
/* jshint esversion: 6 */
$(function () {
    $(window).scroll(function() {
        let y = $(window).scrollTop();
        let height = $(document).height();
        let head = $(window).height();
        let progress = (y - head) / (height - 2 * head);
        $(".progress-item").animate({
            height: `${progress * 100}%`
        }, 0);
    });
});