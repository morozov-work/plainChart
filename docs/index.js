const plainChart = window.plainChart;

const chartParent = document.querySelector('.chartParent');


    plainChart.init(
        chartParent, 
            {
                type: 'barChart', 
                values: '46, 5, 20, 33, 15, 54, 23', 
                labels: 'a, b, c, d, e, f, g', 
                settings: {}
            }
        );