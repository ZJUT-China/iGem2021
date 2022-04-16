/*下面的注释防止jshint插件误报*/
/* jshint esversion: 6 */
$(function () {
    "use strict";

    function create(tag, target, config, content) {
        let element = $(tag, config);
        element.html(content).appendTo(target);
    }
    create("<div>", "body", {
        class: "modal fade",
        id: "modal",
        tabindex: "-1",
        role: "dialog"
    }, `<div class="modal-dialog modal-lg" aria-hidden="true" role="document"
     style="top: 50%;transform: translate(0,-50%);">
     <div class="modal-content">
         <div class="modal-header">
             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
             </button>
         </div>
         <div class="modal-body" style="width: 100%;"></div>
     </div>
 </div>`);
    $(".modal").attr("aria-labelledby", "");
    $(".sourse-order").attr({
        "data-toggle": "popover",
        "data-trigger": "manal",
        "data-placement": "top",
        "title": "Source",
        "data-content": function (index) {
            let order = parseInt($(".sourse-order").eq(index).text().replace(/[^\d]/g, ''));
            // console.log(order);
            let content = $(".sourse").eq(order - 1).html();
            return content;
        },
        "href": `javascript:void(0);`,
        "data-html": true
    });
    $("[data-toggle='popover']").popover();

    create("<ul>", ".catalogue-item", {
        class: "sideMenu list-unstyled"
    });
    var num_1 = 0,
        num_2 = 0;
    $(".target-title-1").each(function (index, item_1) {
        create("<li>", ".catalogue-item>ul", {
            class: "mg-tb-1"
        });
        create("<span>", `.catalogue-item>ul>li:eq(${index})`, {
            class: "text-little slidedown block item_1"
        }, $(`.target-title-1:eq(${index})`).text());
        $(`.item_1:eq(${index})`).attr("data-href", `#target-1-${index + 1}`);
        // console.log(value);
        if ($(item_1).find(".target-title-2")) {
            // console.log(item_1);
            create("<ul>", `.catalogue-item>ul>li:eq(${index})`, {
                class: "item_2_container"
            });
            $(`.target-title-1:eq(${index})~section`).each(function (i, item_2) {
                // console.log($(item_2).find(".target-title-3").text());
                create("<li>", `.catalogue-item>ul>li:eq(${index})>ul`, {}, `<span class="item_2 slidedown text-littler" data-href="#target-2-${num_1 + 1}">${$(item_2).find(".target-title-2").text()}</span>`);
                num_1 += 1;
                if ($(item_2).find(".target-title-3")) {
                    create("<ul>", `.catalogue-item>ul>li:eq(${index})>ul>li:eq(${i})`, {
                        class: "item_3_container"
                    });
                    $(item_2).find(".target-title-3").each(function (k, item_3) {
                        // console.log(item_3);
                        create("<li>", `.catalogue-item>ul>li:eq(${index})>ul>li:eq(${i})>ul`, {}, `<span class="item_3 slidedown text-littler" data-href="#target-3-${num_2 + 1}">${$(item_3).text()}</span>`);
                        num_2 += 1;
                    });
                }
            });
        }
    });
    var head = $(window).height();
    $(".progress-container").css("height", `${$(".catalogue-item").css("height")}`);
    $(".catalogue-container").attr("data-offset-top", head);
    $(window).resize(function () {
        $(".progress-container").css("height", `${$(".catalogue-item").css("height")}`);
        $(".catalogue-container").attr("data-offset-top", head);
    });
    $(window).scroll(() => {
        $(".item_1").each(function (index, item_1) {
            // console.log($(`target-${index + 1}`).offset());
            if (($("html").scrollTop() >= $(`#target-1-${index + 1}`).offset().top) && ($("html").scrollTop() <= ($(`#target-1-${index + 1}`).offset().top + $(`#target-1-${index + 1}`).height()))) {
                $(".catalogue-item .active").removeClass("active");
                $(item_1).addClass("active");
                if ($(item_1).next(".item_2_container").find(".item_2")) {
                    $(item_1).next(".item_2_container").find(".item_2").each(function (i, item_2) {
                        // console.log($(`#target-${index + 1}>section:eq(${i})`));
                        if (($("html").scrollTop() >= $(`#target-1-${index + 1}>section:eq(${i})`).offset().top) && ($("html").scrollTop() <= ($(`#target-1-${index + 1}>section:eq(${i})`).offset().top + $(`#target-1-${index + 1}>section:eq(${i})`).height()))) {
                            $(item_2).addClass("active");
                            if ($(item_2).next(".item_3_container").find(".item_3")) {
                                $(item_2).next(".item_3_container").find(".item_3").each(function (k, item_3) {
                                    if (($("html").scrollTop() >= $(`#target-1-${index + 1}>section:eq(${i})>section:eq(${k})`).offset().top) && ($("html").scrollTop() <= ($(`#target-1-${index + 1}>section:eq(${i})>section:eq(${k})`).offset().top + $(`#target-1-${index + 1}>section:eq(${i})>section:eq(${k})`).height()))) {
                                        $(item_3).addClass("active");
                                    }
                                });
                            }
                        }
                    });
                }

            } else if ($(window).scrollTop() <= head) {
                $(`.catalogue-item .active`).removeClass("active");
            }
        });
    });
    $(".modal .close span,.modal-backdrop").click(() => {
        $(".modal-body").empty();
    });
    $(".view-pdf,.figure").attr({
        "data-toggle": "modal",
        "data-target": "#modal"
    });
    $(".view-pdf").attr("title","Click to view the pdf in a modal");
    $(".figure").on("click", (e) => {
        let url = $(e.target).attr("src");
        // console.log(this);
        // $(".sourse-content").addClass("none");
        // $(`.modal img`).removeClass("none").attr("src", url);
        $(".modal-body").empty();
        create("<img>", ".modal-body", {
            class: "img-responsive center-block figure-modal"
        });
        $(".figure-modal").attr({
            "src": url,
            "width": "1900"
        });
    });
    $("#maincontent").on("click", ".view", (e) => {
        let content = $(e.target).attr("data-href");
        // console.log(url);
        // $(".modal img").addClass("none");
        // $(".sourse-content").removeClass("none").attr({
        //     "src": url,
        //     "width": "100%",
        //     "height": "500"
        // });
        $(".modal-body").empty().html(content);
        // create("<iframe>", ".modal-body", {
        //     class: "sourse-content"
        // }, "PDF is not allowed in your browser, you can download to see it.");
        // $(".sourse-content").attr({
        //     "src": url,
        //     "width": "100%",
        //     "height": "500"
        // });
    });
    $("#maincontent").on("click", ".view-pdf", (e) => {
        let url = $(e.target).attr("data-href");
        $(".modal-body").empty();
        create("<iframe>", ".modal-body", {
            class: "sourse-content"
        }, "PDF is not allowed in your browser, you can download to see it.");
        $(".sourse-content").attr({
            "src": url,
            "width": "100%",
            "height": "500"
        });
    });
});