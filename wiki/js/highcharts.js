Highcharts.setOptions({
    colors: ["#b2d97d", "#f9d878","#80d6ff","#b4a4db","#fda594","#ff9267"],
    credits: {
        enabled: false
    },
    exporting: {
        error: function () {
            alert("Failed to export!");
            console.error("Failed to export!");
        }
    }
});

// $.get("../json/test_1.json", function (data) {
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
$.get("../json/test.json", function (data) {
    // console.log(data[0]);
    $(".charts-area").each(function (index, value) {
        // console.log(data[index]["title"]);
        $(value).highcharts({
            title: {
                text: ""
            },
            xAxis: {
                title: {
                    text: data[index].xLabel
                },
                labels: {
                    style: {
                        "color": "#000",
                        "fontSize": "15px"
                    }
                },
                lineColor: "#000",
                gridLineColor: "#000"

            },
            yAxis: {
                title: {
                    text: data[index].yLabel
                },
                labels: {
                    format: "{value}",
                    style: {
                        "color": "#000",
                        "fontSize": "15px"
                    },
                    
                },
                minRange: 10000,
                min: 0,
                lineColor: "#000"
            },
            tooltip: {
                shared: true
            },
            series: data[index].series
        });
    });

});
// $("#container").highcharts({
//     title: {
//         text: ''
//     },
//     xAxis: [{
//         categories: ["BW25113+P70-σ28-P28-deGFP", "BW25113+P28-tetO-deGFP","BW25113+P28-tetO-deGFP+P70-σ28-P28-tetR ", "BW25113"]
//     }],
//     yAxis: [{ // Secondary yAxis
//         title: {
//             text: 'Fluorescence Intensity [a.u.]'
//         },
//         labels: {
//             format: '{value}'
//         },
//         opposite: true,
//         id: "Fluorescence"
//     }],
//     tooltip: {
//         shared: true
//     },
//     plotOptions: {
//         errorbar: {
//             lineWidth: 2,
//             whiskerWidth: 1,
//             // stemColor: 'red',
//             // stemDashStyle: 'Dash',
//             whiskerLength: '40%'
//         }
//     },
//     series: [{
//         name: 'Fluorescence Intensity',
//         type: 'column',
//         data: [31868, 14259, 4632, 2715],
//         tooltip: {
//             // pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f} mm</b> '
//         },
//         yAxis: "Fluorescence"
//     }, {
//         name: 'error',
//         type: 'errorbar',
//         linkedTo: ":previous",
//         yAxis: "Fluorescence",
//         data: [
//             [28582, 35611],
//             [13112, 15351],
//             [4098,5736],
//             [1980, 3428]

//         ],
//         tooltip: {
//             pointFormat: '(The margin of error: {point.low}-{point.high})<br/>'
//         }
//     }]
// });