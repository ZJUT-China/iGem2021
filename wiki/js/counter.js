/*下面的注释防止jshint插件误报*/
/* jshint esversion: 6 */
/*
 *
 *@author sky1(qww) https://qww123.ltd/
 *@email 497363953@qq.com
 *
 */
$(function () {
    //交叉观察
    //selector: 选择器 字符串 必须 bool: 控制回调函数是否仅执行一次(true: 可执行无数次 false: 仅执行一次) 布尔值 必须 callback: 回调函数 函数 必须
    function ifVisiable(selector, bool, callback) {
        $(window).scroll(() => {
            $(selector).each(function () {
                if (($(this).attr("data-state") === "true" ? true : false) && ($(window).scrollTop() >= ($(this).offset().top - $(window).height()))) {
                    if (!bool) {
                        $(this).attr("data-state", "false");
                    }
                    return callback() || true;
                }
            });

        });
    }
    //计数动画
    //selector: 选择器 字符串 time: 动画时间 数值 step: 步长 数值
    const count = (selector, time, step) => {
        let num = parseFloat($(selector).attr("data-count").replace(/[^\d]/g, ''));
        let symbol = $(selector).attr("data-count").replace(/\d/g, '');
        let i = parseFloat($(selector).attr("data-start").replace(/[^\d]/g, ''));
        time = time / Math.abs(num - i) * step;
        setInterval(function () {
            i += step;
            if (i > num) {
                i = num;
                clearInterval();
            }
            $(selector).text(`${i}${symbol}`);
        }, time);
    };
    //动画初始化
    const animationInit = (selector, config) => {
        //初始化
        $(selector).css(
            "opacity", config.opacity
            // "left", config.left,
            // "right", config.right,
            // "top", config.top
            // "bottom", config.bottom
        );
    };
    //滚动动画
    function scrollAnimation(selector, config) {
        let time = config.time || 1000;
        // console.log(time);
        let init = {
            opacity: "1"
            // left: $(selector).css("left"),
            // right: $(selector).css("right"),
            // top: $(selector).css("top")
            // bottom: $(selector).css("bottom")
        };
        //动画
        $(selector).animate(init, time);
    }
    var a = {
        opacity: "0",
        bool: false
    };
    // scrollAnimation(".counter-container", a, function(){
    //     count(".counter", 1000, 1);
    // });
    ifVisiable(".counter-container", false, function () {
        count(`.counter-container>.counter`, 3000, 1);
    });
});