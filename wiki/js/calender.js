// 下面这句注释的作用是防止jshint插件误报
/* jshint esversion: 6 */
function debounce(func, wait, immediate) {
    let timer;
    return function () {
        // console.log(this);
        let context = this;
        let args = arguments;
        if (timer) clearTimeout(timer);
        if (immediate) {
            var callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait);
            if (callNow) func.apply(context, args);
        } else {
            timer = setTimeout(function () {
                func.apply(context, args);
            }, wait);
        }
    };
}
(function ($) {
    function reduse(arr, callback, initValue) {
        let result = initValue;
        for (let i = 0; i < arr.length; i++) {
            result = callback(result, arr[i], i, arr);
        }
        return result;
    }

    function splice(arr, start, length) {
        let res = arr.splice(start, length);
        return res;
    }
    var Calender = {
        target: {},
        monthDay: [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        able: [],
        data: {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDay()
        },
        isLeep: function (year) {
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        },
        whatWeek: function (year, month, day = 1) {
            let sum = 0;
            sum += (year - 1) * 365 + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + day;
            for (let i = 0; i < month - 1; i++) {
                sum += this.monthDay[i];
            }
            if (month > 2) {
                if (this.isLeep(year)) {
                    sum += 29;
                } else {
                    sum += 28;
                }
            }
            return sum % 7;
        },
        howlong: function (year, month) {
            if (month == 2) {
                if (this.isLeep(year)) {
                    return 29;
                } else {
                    return 28;
                }
            } else {
                return this.monthDay[month - 1];
            }
        },
        showCalender: function () {
            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                short_months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                short_week = ['Sun', 'Mon', 'Tue', 'wed', 'Thu', 'Fri', 'Sat'],
                days = `<tr>`,
                year = this.data.year,
                month = this.data.month,
                monthLength = this.howlong(year, month),
                firstDay = this.whatWeek(year, month),
                now = new Date(),
                date = {
                    year: now.getUTCFullYear(),
                    month: now.getMonth() + 1,
                    day: now.getDate()
                },
                _class = "";
            if (month > 1) {
                for (let i = 0; i < firstDay; i++) {
                    let n = this.howlong(year, month - 1) - firstDay + i + 1;
                    days += `<td class="notThis calender_cell" id="c${year}${month-1}${n}">${n}</td>`;
                }
            } else {
                for (let i = 0; i < firstDay; i++) {
                    let n = this.howlong(year - 1, 12) - firstDay + i + 1;
                    days += `<td class="notThis calender_cell" id="c${year}${month-1}${n}">${n}</td>`;
                }
            }
            var change = firstDay;
            for (let i = 1; i <= monthLength; i++) {
                if (year == date.year && month == date.month && i == date.day) {
                    _class = `curDate`;
                } else {
                    _class = `thisDate`;
                }
                days += `<td class="${_class} calender_cell" id="c${year}${month}${i}">${i}</td>`;
                change = (change + 1) % 7;
                if (change == 0 && i != monthLength) {
                    days += `</tr><tr>`;
                }
            }
            if (change != 0) {
                let t = 1;
                for (let i = change; i < 7; i++) {
                    days += `<td class="notThis calender_cell" id="c${month==12?year+1:year}${month==12?1:month}${t}">${t}</td>`;
                    t += 1;
                }
                days += `</tr>`;
            }
            var calender = `<div class="calender_item"><div class="calender_head text-center"><span class="preview">&lt;</span><span class="year">${year}</span><span class="month">${short_months[month - 1]}</span><span class="next">&gt;</span></div><div class="calender_body"><table><thead><tr><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr></thead><tbody>${days}</tbody></table></div><span class="glyphicon glyphicon-calendar"></span></div>`;
            $(this.target).html(calender);
            $(".next").on('click', function () {
                Calender.next();
            });
            $(".preview").on('click', function () {
                Calender.preview();
            });
            setTimeout(() => {
                this.callback();
                this.slidedown();
                this.mouseMove();
            }, 500);
        },
        reFresh: function () {
            // this.data.year = parseInt($(this.target).attr("data-year"));
            // this.data.month = parseInt($(this.target).attr("data-month"));
            // this.showCalender();
            $(this.target).on("dataChange", function () {
                // console.log("change");
                if (parseInt($(this.target).attr("data-year")) != Calender.data.year || parseInt($(this.target).attr("data-month")) != Calender.data.month) {
                    Calender.data.year = parseInt($(Calender.target).attr("data-year"));
                    Calender.data.month = parseInt($(Calender.target).attr("data-month"));
                    Calender.showCalender();
                }
            });
            $(this.target).trigger("dataChange");
        },
        next: function () {
            // console.log("next");
            let month = this.data.month,
                year = this.data.year,
                nextMonth = month + 1;
            if (nextMonth > 12) {
                nextMonth = 1;
                year += 1;
            }
            $(this.target).attr("data-year", year);
            $(this.target).attr("data-month", nextMonth);
            this.reFresh();
        },
        preview: function () {
            let month = this.data.month,
                year = this.data.year,
                lastMonth = month - 1;
            if (lastMonth < 1) {
                lastMonth = 12;
                year -= 1;
            }
            $(this.target).attr("data-year", year);
            $(this.target).attr("data-month", lastMonth);
            this.reFresh();
        },
        callback: function () {},
        slidedown: function () {
            $(".slidedown").click(debounce((e) => {
                let target = $(e.target).attr("data-href"),
                    height = $(`${$(e.target).attr("data-href")}`).height(),
                    screenHeight = $(window).height(),
                    y = $(target).offset().top - screenHeight / 2 + height;
                $("body,html").animate({
                    scrollTop: y
                }, 1000);
            }, 1000, true));
        },
        mouseMove: function () {
            const offset = 30;
            const angles = [];
            for (let i = 0; i <= 360; i += 45) {
                angles.push((i * Math.PI) / 180);
            }
            let nearBy = [];

            function clearNearBy() {
                // console.log(nearBy);
                let length = nearBy.length;
                $.each(splice(nearBy, 0, length), (index, e) => {
                    e.style.borderImage = null;
                });
            }
            $(".calender_cell").each((index, b) => {
                // console.log(b);
                $(b).mouseleave((e) => {
                    // $(e.target).css("background", "black");
                    $(e.target).css("border-image", null);
                    $(e.target).css("border", "1px solid transparent");
                });
                $(b).mouseenter((e) => {
                    clearNearBy();
                });
                $(b).on("mousemove", (e) => {
                    $(e.target).css("border", "1px solid transparent");
                    const rect = $(e.target).offset();
                    const x = e.pageX - rect.left;
                    const y = e.pageY - rect.top;
                    // console.log(x);
                    // $(e.target).css("background", `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.25),rgba(255,255,255,0) )`);
                    $(e.target).css("border-image", `radial-gradient(20% 65% at ${x}px ${y}px ,rgba(110,203,220,0.7),rgba(110,203,220,0.7),rgba(110,203,220,0.1) ) 9 / 2px / 0px stretch `);
                });
            });
            const body = $(".calender_body");
            body.on("mousemove", (e) => {
                // console.log(e);
                const x = e.clientX;
                const y = e.clientY;
                clearNearBy();
                nearBy = reduse(angles, (acc, rad, i, arr) => {
                    const cx = Math.floor(x + Math.cos(rad) * offset);
                    const cy = Math.floor(y + Math.sin(rad) * offset);
                    const element = document.elementFromPoint(cx, cy);
                    // console.log($(element));
                    if (element !== null) {
                        // console.log($(element).hasClass("calender_cell"));
                        if ($(element).hasClass("calender_cell") && acc.findIndex((ae) => ae.id === element.id) < 0) {
                            const brect = element.getBoundingClientRect();
                            // console.log(brect);
                            const bx = x - brect.left;
                            const by = y - brect.top;
                            // console.log(element.style.borderImage);
                            if (!element.style.borderImage)
                                element.style.borderImage = `radial-gradient(${offset * 2}px ${
                                offset * 2
                              }px at ${bx}px ${by}px ,rgba(110,203,220,0.7),rgba(110,203,220,0.1),transparent ) 9 / 1px / 0px stretch `;
                            return [...acc, element];
                        }
                    }
                    return acc;
                }, []);
            });
            body.onmouseleave = (e) => {
                clearNearBy();
            };
        }
    };
    $.fn.calender = function (callback) {
        var that = this;
        // that.prototype=Calender;
        Calender.target = that;
        Calender.callback = callback;
        Calender.data.year = parseInt($(that).attr("data-year"));
        Calender.data.month = parseInt($(that).attr("data-month"));
        // Calender.showCalender();
        $.when(Calender.showCalender()).done(callback());
        Calender.reFresh();
        // if(callback && typeof(callback)==="function"){
        //     callback();
        // }
    };

})(jQuery);
$(document).ready(function () {
    $(".calender").calender(function () {
        var that = this;
        $(".timeline-content-title").each(function (index, value) {
            // console.log(index);
            let h = $(value).text();
            $(`#c${h.replace(/[^\d]/g, '')}`).attr("data-href", `#t${h.replace(/[^\d]/g, '')}`).addClass("slidedown able");
        });

    });


    $(window).scroll(debounce(() => {
        $(".calender_active").removeClass("calender_active");
        let id = $(".timeline-item--active").attr("id");
        if ($(`#c${id.replace(/[^\d]/g, '')}`).length > 0) {
            // console.log($(`#c${id.replace(/[^\d]/g, '')}`));
            $(`#c${id.replace(/[^\d]/g, '')}`).addClass("calender_active");
        } else {
            let t = $(".timeline-item--active .timeline-content-title").text(),
                length = t.length,
                monthIndex = t.indexOf('.') + 1,
                dayIndex = t.lastIndexOf('.') + 1,
                month = t.slice(monthIndex, dayIndex - 1),
                day = t.slice(monthIndex);
            // console.log(monthIndex);
            $(".calender").attr("data-month", month);
            $(".calender").calender(function () {
                var that = this;
                $(".timeline-content-title").each(function (index, value) {
                    // console.log(index);
                    let h = $(value).text();
                    $(`#c${h.replace(/[^\d]/g, '')}`).attr("data-href", `#t${h.replace(/[^\d]/g, '')}`).addClass("slidedown able");
                });
            });
            $(".calender").find(`#c${id.replace(/[^\d]/g, '')}`).addClass("calender_active");
        }
    }, 20, false));
});