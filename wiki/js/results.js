$("#results_charts_1").highcharts({
    title: {
        text: ''
    },
    xAxis: [{
        categories: ["BW25113+P70-σ28-P28-deGFP", "BW25113+P28-tetO-deGFP","BW25113+P28-tetO-deGFP+P70-σ28-P28-tetR ", "BW25113"]
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
        data: [31868, 14259, 4632, 2715],
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
            [28582, 35611],
            [13112, 15351],
            [4098,5736],
            [1980, 3428]

        ],
        tooltip: {
            pointFormat: '(The margin of error: {point.low}-{point.high})<br/>'
        }
    }]
});