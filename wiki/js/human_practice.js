/*下面的注释防止jshint插件误报*/
/* jshint esversion: 6 */
$(function () {
    var data = {};
    $.get("https://2021.igem.org/wiki/images/f/fc/T--ZJUT-China--hp.txt", (res) => {
        data = $.parseJSON(res);
        // console.log(value);
        // console.log(id, value);
        $(".figure-pie").highcharts({
            chart: {
                type: "pie"
            },
            title: {
                text: data["pie-1"].title
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: "proportion",
                data: data["pie-1"].data
            }]
        });
    });
    $.get('https://2021.igem.org/wiki/images/3/3e/T--ZJUT-China--reading_number.csv', function (csv) {
        $(".figure-line").highcharts({
            data: {
                csv: csv
            },
            title: {
                text: "Data trend"
            },
            xAxis: {
                tickWidth: 0,
                gridLineWidth: 1,
                labels: {
                    align: 'left'
                },
                dateTimeLabelFormats: {
                    week: '%Y-%m-%d'
                }
            },
            yAxis: [{
                title: {
                    text: null
                },
                labels: {
                    align: 'left',
                    x: 3,
                    y: 16,
                    format: '{value:.,0f}'
                },
                showFirstLabel: false
            }],
            legend: {
                align: 'left',
                verticalAlign: 'top',
                y: 20,
                floating: true,
                borderWidth: 0
            },
            tooltip: {
                shared: true,
                crosshairs: true,
                dateTimeLabelFormats: {
                    day: '%Y-%m-%d'
                }
            },
            plotOptions: {
                marker: {
                    lineWidth: 1
                }
            }
        });
    });
    $(".question").change((e) => {
        let id = $(e.target).val();
        console.log(id);
        $(".figure-pie").highcharts({
            chart: {
                type: "pie"
            },
            title: {
                text: data[id].title
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: "proportion",
                data: data[id].data
            }]
        });
    });
    $.get('https://2021.igem.org/wiki/images/e/eb/T--ZJUT-China--biomarkers_table.txt', function (data) {
        data=$.parseJSON(data);
        var table = `<div class="table-responsive" style="height: 500px;"><table class="table table-bordered table-hover"><thead>`;
        data.forEach(function (arr, index) {
            table+=`<tr>`;
            if (index == 0) {
                
                arr.forEach(function (item, i) {
                    // console.log(item);
                    table += `<td>${item}</td>`;
                });
                table += `</tr></thead><tbody>`;
            }else{
                arr.forEach(function(item,i){
                    table+=`<td>${item}</td>`;
                });
                table+=`</tr>`;
            }

        });
        table +=`</tbody></table>`;
        $("#biomarkers_table").html(table);
    });
});