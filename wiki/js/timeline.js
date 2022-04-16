// 下面这句注释的作用是防止jshint插件误报
/* jshint esversion: 6 */
(function ($) {
    $.fn.timeline = function () {
        var selectors = {
            id: $(this),
            item: $(this).find(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline-img"
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
            "background-image",
            "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
        );
        var itemLength = selectors.item.length;
        $(window).scroll(function () {
            var max, min;
            var pos = $(this).scrollTop();
            var screenHeight = $(this).height();
            var middle = pos + screenHeight / 2;
            // console.log(screenHeight);
            selectors.item.each(function (i) {
                min = $(this).offset().top;
                max = $(this).height() + $(this).offset().top;
                var that = $(this);
                if (i == itemLength - 2 && pos > min + $(this).height()/2 ) {
                    selectors.item.removeClass(selectors.activeClass);
                    selectors.id.css("background-image", "url(" + selectors.item.last()
                        .find(selectors.img).attr("src") + ")");
                    selectors.item.last().addClass(selectors.activeClass);
                } else if (min <= middle + 10 && max >=middle - 10) {
                    selectors.id.css(
                        "background-image",
                        "url(" + $(this).find(selectors.img).attr("src") + ")"
                    );
                    selectors.item.removeClass(selectors.activeClass);
                    $(this).addClass(selectors.activeClass);
                }
            });
        });
    };
})(jQuery);
$(function () {
    $.getJSON("../json/notebook.json", (data, textStatus, jqXHR) => {
        // var arr = data.note;
        function create(tag, target, config, content) {
            let element = $(tag, config);
            element.html(content).appendTo(target);
        }

        function time(value) {
            let wet = value.wet,
                dry = value.dry,
                hp = value.hp;
            if (wet.length != 0) {
                return wet[0].time;
            } else if (dry.length != 0) {
                return dry[0].time;
            } else {
                return hp[0].time;
            }
        }

        function createItem(content) {
            var i = 0;
            $.each(content, (index, value) => {
                // console.log(index);
                let timer = time(value);
                create("<div>", ".timeline", {
                    class: "timeline-item",
                    id: `t${index.replace(/[^\d]/g, '')}`
                });
                create("<div>", `.timeline>.timeline-item:eq(${i})`, {
                    class: "timeline-content"
                });
                // console.log(value.wet.length);
                create("<h2>", `.timeline>.timeline-item:eq(${i})>.timeline-content`, {
                    class: "timeline-content-title"
                }, timer);
                create("<div>", `.timeline>.timeline-item:eq(${i})>.timeline-content`, {
                    class: "content-container"
                });
                create("<ul>", `.timeline>.timeline-item:eq(${i}) .content-container`, {
                    class: "button-container nav nav-tabs",
                    role: "tablist"
                });
                create("<div>", `.timeline>.timeline-item:eq(${i}) .content-container`, {
                    class: "tab-content"
                });
                if (value.wet.length != 0) {
                    create("<li>", `.timeline>.timeline-item:eq(${i}) .content-container .button-container`, {
                        class: "active",
                        role: "presentation"
                    }, `<a href="#wet-${index.replace(/[^\d]/g, '')}" arial-controls="wet-${index.replace(/[^\d]/g, '')}" role="tab" data-toggle="tab"
                    class="button">wet</a>`);
                    create("<div>", `.timeline>.timeline-item:eq(${i}) .content-container>.tab-content`, {
                        class: "timeline-content-desc tab-pane fade in active",
                        id: `wet-${index.replace(/[^\d]/g, '')}`,
                        role: "tabpanel"
                    });
                    create("<div>", `.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>.timeline-content-desc`, {
                        class: "default pd-lr-1"
                    });
                    let m = 0;
                    for (let k = 0; k < value.wet.length; k++) {
                        // if (k == value.wet.length - 1 && value.wet.length != 1) {
                        //     break;
                        // }
                        let name = value.wet[k].name;
                        // console.log(value.wet[i]);
                        if ($(`.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#wet-${index.replace(/[^\d]/g, '')}>div .name`).last().attr("data-name") != name) {
                            create("<section>", `.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#wet-${index.replace(/[^\d]/g, '')}>div`, {}, `<span class="name" data-name="${name}"><strong>${name}</strong></span>`);
                            create("<ul>", `.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#wet-${index.replace(/[^\d]/g, '')}>div>section:eq(${m})`, {
                                class: "event"
                            });
                        }
                        // console.log($(`.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#wet-${index.replace(/[^\d]/g, '')}>div .name`).attr("data-name"),index);
                        for (let j = k; j < value.wet.length; j++) {
                            if (value.wet[j].name == name && value.wet[j].event != $(`.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#wet-${index.replace(/[^\d]/g, '')}>div>section:eq(${m})>ul li`).last().find("span:eq(0)").text()) {
                                create("<li>", `.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#wet-${index.replace(/[^\d]/g, '')}>div>section:eq(${m})>ul`, {}, `<span>${value.wet[j].event}</span> <span class="label-${value.wet[j].result=="success"?"success":"danger"} text-white">${value.wet[j].result}</span>`);
                            } else {
                                m += 1;
                                k = j - 1;
                                break;
                            }
                        }
                    }
                }

                if (value.dry.length != 0) {
                    create("<div>", `.timeline>.timeline-item:eq(${i}) .content-container>.tab-content`, {
                        class: `timeline-content-desc tab-pane fade in ${value.wet.length == 0?"active":""}`,
                        id: `dry-${index.replace(/[^\d]/g, '')}`,
                        role: "tabpanel"
                    });
                    create("<li>", `.timeline>.timeline-item:eq(${i}) .content-container .button-container`, {
                        class: `${value.wet.length == 0?"active":""}`,
                        role: "presentation"
                    }, `<a href="#dry-${index.replace(/[^\d]/g, '')}" arial-controls="dry-${index.replace(/[^\d]/g, '')}" role="tab" data-toggle="tab"
                    class="button">dry</a>`);
                    create("<div>", `.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>.timeline-content-desc`, {
                        class: "default pd-lr-1"
                    });
                    let m = 0;
                    for (let k = 0; k < value.dry.length; k++) {
                        // if (k == value.wet.length - 1 && value.wet.length != 1) {
                        //     break;
                        // }
                        let name = value.dry[k].name;
                        // console.log(value.wet[i]);
                        if ($(`.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#dry-${index.replace(/[^\d]/g, '')}>div .name`).last().attr("data-name") != name) {
                            create("<section>", `.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#dry-${index.replace(/[^\d]/g, '')}>div`, {}, `<span class="name" data-name="${name}"><strong>${name}</strong></span>`);
                            create("<ul>", `.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#dry-${index.replace(/[^\d]/g, '')}>div>section:eq(${m})`, {
                                class: "event"
                            });
                        }
                        // console.log($(`.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#wet-${index.replace(/[^\d]/g, '')}>div .name`).attr("data-name"),index);
                        for (let j = k; j < value.dry.length; j++) {
                            if (value.dry[j].name == name && value.dry[j].event != $(`.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#dry-${index.replace(/[^\d]/g, '')}>div>section:eq(${m})>ul li`).last().find("span:eq(0)").text()) {
                                create("<li>", `.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#dry-${index.replace(/[^\d]/g, '')}>div>section:eq(${m})>ul`, {}, `<span>${value.dry[j].event}</span>`);
                            } else {
                                m += 1;
                                k = j - 1;
                                break;
                            }
                        }
                    }
                }
                if (value.hp.length != 0) {
                    create("<div>", `.timeline>.timeline-item:eq(${i}) .content-container>.tab-content`, {
                        class: `timeline-content-desc tab-pane fade in ${value.dry.length == 0&&value.wet.length==0?"active":""}`,
                        id: `hp-${index.replace(/[^\d]/g, '')}`,
                        role: "tabpanel"
                    });
                    create("<li>", `.timeline>.timeline-item:eq(${i}) .content-container .button-container`, {
                        class: `${value.dry.length == 0&&value.wet.length==0?"active":""}`,
                        role: "presentation"
                    }, `<a href="#hp-${index.replace(/[^\d]/g, '')}" arial-controls="hp-${index.replace(/[^\d]/g, '')}" role="tab" data-toggle="tab"
                    class="button">hp</a>`);
                    create("<div>", `.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>.timeline-content-desc`, {
                        class: "default pd-lr-1"
                    });
                    let m = 0;
                    for (let k = 0; k < value.hp.length; k++) {
                        // if (k == value.wet.length - 1 && value.wet.length != 1) {
                        //     break;
                        // }
                        let name = value.hp[k].name;
                        // console.log(value.wet[i]);
                        if ($(`.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#hp-${index.replace(/[^\d]/g, '')}>div .name`).last().attr("data-name") != name) {
                            create("<section>", `.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#hp-${index.replace(/[^\d]/g, '')}>div`, {}, `<span class="name" data-name="${name}"><strong>${name}</strong></span>`);
                            create("<ul>", `.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#hp-${index.replace(/[^\d]/g, '')}>div>section:eq(${m})`, {
                                class: "event"
                            });
                        }
                        // console.log($(`.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#wet-${index.replace(/[^\d]/g, '')}>div .name`).attr("data-name"),index);
                        for (let j = k; j < value.hp.length; j++) {
                            if (value.hp[j].name == name && value.hp[j].event != $(`.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#hp-${index.replace(/[^\d]/g, '')}>div>section:eq(${m})>ul li`).last().find("span:eq(0)").text()) {
                                create("<li>", `.timeline>.timeline-item:eq(${i}) .content-container>.tab-content>#hp-${index.replace(/[^\d]/g, '')}>div>section:eq(${m})>ul`, {}, `<span>${value.hp[j].event}</span>`);
                            } else {
                                m += 1;
                                k = j - 1;
                                break;
                            }
                        }
                    }
                }

                // $(`.timeline>.timeline-item:eq(${i})>timelinecontent>.content-container`).appendTo(`<ul class="button-container nav nav-tabs" role="tablist"></ul>`)
                i++;
            });
        }
        createItem(data);

        // function collect(arr) {
        //     var newData = {};
        //     var date = arr[0].key;
        //     console.log(arr.length);
        //     console.log(arr);
        //     var wet = [];
        //     var dry = [];
        //     var hp = [];
        //     for (let i = 0; i < arr.length - 1; i++) {
        //         if (arr[i].key == date) {
        //             switch (arr[i].group) {
        //                 case "wet":
        //                     wet.push(arr[i]);
        //                     break;
        //                 case "dry":
        //                     dry.push(arr[i]);
        //                     break;
        //                 case "HP":
        //                     hp.push(arr[i]);
        //                     break;
        //             }
        //             if (!newData[date]) {
        //                 newData[date] = {};
        //                 newData[date].wet = wet;
        //                 newData[date].dry = dry;
        //                 newData[date].hp = hp;
        //             } else {
        //                 newData[date].wet = wet;
        //                 newData[date].dry = dry;
        //                 newData[date].hp = hp;
        //             }
        //         } else {
        //             wet = [];
        //             dry = [];
        //             hp = [];
        //             date = arr[i].key;
        //             i -= 1;
        //         }

        //     }
        //     return newData;
        // }
        // var d = collect(arr);
        // console.log(d);
        // var h = 0;
        // for(var item in d){
        //     h+=d[item].wet.length;
        // }
        // console.log(h);

        // function createDate(data) {

        // }
        // if (textStatus == "success") {
        //     for (let i = 0; i < data.wet.length; i++) {

        //     }
        // }

        $(".timeline-container").timeline();
    });
});