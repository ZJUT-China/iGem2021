$(function () {
    // var height = $(".affix-img").outerHeight(),
    //     width = $("#target-1-1").width(),
    //     top = $(".affix-img-container").offset().top - $(window).height(),
    //     start = $(".start").offset().top,
    //     end = $(".end").offset().top + $(".end").height();
    // $(".affix-img-container, .affix-img").css("width", width);
    // $(".affix-img-container").css("height", height);
    // // $(".affix-img").attr("data-offset-top", top);
    // $(window).scroll(function () {
    //     var pos = $(window).scrollTop()-$(window).height(),
    //         whole = end - start,
    //         length = pos - start,
    //         por = length / whole;
    //     $(".green").css("width", `${por>=1?100:por*100}%`);

    // });
    // $(".affix-img").affix({
    //     offset: {
    //         top: top,
    //     }
    // });
    // $(window).resize(function () {
    //     width = $("#target-1-1").width();
    //     $(".affix-img-container,.affix-img").css("width", width);
    //     height = $(".affix-img").height();
    //     $(".affix-img-container").css("height", height);
    //     top = $(".affix-img-container").offset().top - height - $(".nBar").height() - 10;
    //     $(".affix-img").attr("data-offset-top", top);
    // });
    // $.get("../json/proof.json", function (data) {
    //     // console.log(data[0]);
    //     $(".charts-area").each(function (index, value) {
    //         // console.log(data[index]["title"]);
    //         $(value).highcharts({
    //             title: {
    //                 text: ""
    //             },
    //             xAxis: {
    //                 title: {
    //                     text: data[index].xLabel
    //                 },
    //                 labels: {
    //                     style: {
    //                         "color": "#000",
    //                         "fontSize": "15px"
    //                     }
    //                 },
    //                 lineColor: "#000",
    //                 gridLineColor: "#000"

    //             },
    //             yAxis: {
    //                 title: {
    //                     text: data[index].yLabel
    //                 },
    //                 labels: {
    //                     format: "{value}",
    //                     style: {
    //                         "color": "#000",
    //                         "fontSize": "15px"
    //                     }

    //                 },
    //                 lineColor: "#000"
    //             },
    //             tooltip: {
    //                 shared: true
    //             },
    //             series: data[index].series
    //         });
    //     });

    // });
    $("#proof_charts_3").highcharts({
        title: {
            text: ''
        },
        xAxis: [{
            categories: ['Group1', 'Group2', 'Group3', 'Group4', 'Group5']
        }],
        yAxis: [{ // Secondary yAxis
            title: {
                text: 'Fluorescence Intensity [a.u.]'
            },
            labels: {
                format: '{value}'
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        plotOptions: {
            errorbar: {
                lineWidth: 2,
                whiskerWidth: 1,
                // stemColor: 'red',
                // stemDashStyle: 'Dash',
                whiskerLength: '40%'
            }
        },
        series: [{
            name: 'Fluorescence Intensity',
            type: 'column',
            data: [1185, 193, 376, 1075, 226],
            tooltip: {
                // pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f} mm</b> '
            }
        }, {
            name: 'error',
            type: 'errorbar',
            data: [
                [913, 1456],
                [154, 231],
                [320, 431],
                [923, 1228],
                [192, 260],
            ],
            tooltip: {
                pointFormat: '(The margin of error: {point.low}-{point.high})<br/>'
            }
        }]
    });
    $("#proof_charts_4").highcharts({
        title: {
            text: ''
        },
        xAxis: [{
            categories: [0, 1, 2, 3, 4, 5]
        }],
        yAxis: [{ // Secondary yAxis
            title: {
                text: 'Fluorescence Intensity [a.u.]'
            },
            labels: {
                format: '{value}'
            },
            opposite: true,
            id: "Fluorescence"
        }, {
            title: {
                text: 'deGFP(μM)'
            },
            labels: {
                format: '{value}'
            },
            id: "deGFP"
        }],
        tooltip: {
            shared: true
        },
        plotOptions: {
            errorbar: {
                lineWidth: 2,
                whiskerWidth: 1,
                // stemColor: 'red',
                // stemDashStyle: 'Dash',
                whiskerLength: '40%'
            }
        },
        series: [{
            name: 'Fluorescence Intensity',
            type: 'column',
            data: [191.40, 7456.14, 21009.51, 30338.93, 50944.46, 66995.47],
            tooltip: {
                // pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f} mm</b> '
            },
            yAxis: "Fluorescence"
        }, {
            name: 'error',
            type: 'errorbar',
            linkedTo: ":previous",
            yAxis: "Fluorescence",
            data: [
                [133.83, 254.72],
                [6133.86, 8227.47],
                [20127.99, 21891.03],
                [21450.27, 35554.59],
                [49989.48, 51862.71],
                [65526.27, 68391.21]

            ],
            tooltip: {
                pointFormat: '(The margin of error: {point.low}-{point.high})<br/>'
            }
        }, {
            name: 'deGFP',
            type: 'column',
            data: [0.41, 7.00, 19.30, 27.77, 46.47, 61.03],
            yAxis: "deGFP"
        }, {
            name: 'error',
            type: 'errorbar',
            linkedTo: ":previous",
            yAxis: "deGFP",
            data: [
                [0.35, 0.46],
                [5.80, 7.70],
                [18.50, 20.10],
                [19.70, 32.50],
                [45.60, 47.30],
                [59.70, 62.30]

            ],
            tooltip: {
                pointFormat: '(The margin of error: {point.low}-{point.high})<br/>'
            }
        }]
    });
    $("#proof_charts_5").highcharts({
        title: {
            text: ''
        },
        subtitle: {
            text: 'B',
            floating: true,
            align: 'left',
            style: {
                fontSize: '24px',
                fontWeight: 'bold',
                color: "#000"
            }
        },
        xAxis: [{
            categories: [0, 1, 2, 3, 4, 5],
            crosshair: true,
            title: {
                text: 'Time [h]'
            }
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}'
            },
            title: {
                text: 'deGFP [μM]'
            }
        }, { // Secondary yAxis
            title: {
                text: 'Arduino Return Value (ARV) [A.U.]'
            },
            labels: {
                format: '{value}'
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        // legend: {
        //     layout: 'vertical',
        //     align: 'left',
        //     x: 120,
        //     verticalAlign: 'top',
        //     y: 100,
        //     floating: true,
        //     backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        // },
        series: [{
            name: 'deGFP',
            type: 'column',
            yAxis: 1,
            data: [0.37, 6.75, 19.52, 30.40, 46.41, 60.60],
            tooltip: {
                valueSuffix: 'μM'
            }
        }, {
            name: 'Arduino Return Value (ARV)',
            type: 'spline',
            data: [29.67, 125.33, 317.00, 480.33, 720.67, 933.67]
        }, {
            name: 'Arduino Return Value (ARV) range',
            type: 'arearange',
            data: [
                [29, 30],
                [111, 136],
                [313, 325],
                [440, 511],
                [708, 733],
                [920, 941]
            ],
            color: Highcharts.getOptions().colors[1],
            lineWidth: 0,
            linkedTo: ":previous",
            fillOpacity: 0.3,
            zIndex: 0,
            marker: {
                enabled: false
            },
            tooltip: {
                pointFormat: '(Range : {point.low}-{point.high})<br/>'
            }
        }]
    });

});