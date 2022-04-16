Highcharts.setOptions({
    colors: ["#b2d97d", "#f9d878","#80d6ff","#b4a4db","#fda594","#ff9267","#9e2c2a","#da70d6"],
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