var ctxA = document.getElementById('barChart').getContext('2d');
var ctxB = document.getElementById('barChart').getContext('2d');

var laptopBackground = ctxA.createLinearGradient(0, 0, 0, 200);
var mobileBackground = ctxA.createLinearGradient(0, 0, 0, 200);
var watchBackground = ctxA.createLinearGradient(0, 0, 0, 200);
laptopBackground.addColorStop(0, 'rgba(255, 138,87, 0.6)');   
laptopBackground.addColorStop(1, 'rgba(255, 138,87, 1)');
mobileBackground.addColorStop(0, 'rgba(218, 67, 163, 0.6)');   
mobileBackground.addColorStop(1, 'rgba(175, 83, 179, 1)');
watchBackground.addColorStop(0, 'rgba(92, 126, 233, 0.6)');   
watchBackground.addColorStop(1, 'rgba(92, 126, 233, 1)');


// bar chart
var barChart =  new Chart(ctxA, {
    type: 'bar',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [
            {
                label: "Laptop",
                data: [40, 30, 60, 35, 60, 25, 50, 40],
                backgroundColor: laptopBackground,
                borderWidth: 0
            },
            {
                label: "Mobile",
                data: [50, 60, 40, 70, 35, 75, 30, 0],
                backgroundColor: mobileBackground,
                borderWidth: 0
            },
            {
                label: "Watch",
                data: [75, 20, 10, 30, 5, 66, 50, 15],
                backgroundColor: watchBackground,
                borderWidth: 0
            },
        ]
    },

    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Top Selling Categories'
            },
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
            boxWidth: 20,
            fontColor: 'black'
            }
        },
    }
});


// line chart
var config = {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [{
            label: 'Apple',
            data: [0, 30, 60, 25, 60, 25, 50, 0],
            backgroundColor: 'rgba(23, 162, 184, .6)',
            borderColor: 'rgba(23, 162, 184, .6)',
            borderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 40,
        },
        {  
            label: 'Samsung',
            data: [0, 60, 25, 80, 35, 75, 30, 0],
            backgroundColor: 'rgba(232, 62, 140, .6)',
            borderColor: 'rgba(232, 62, 140, .6)',
            borderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 40,
        },
    ],
        fill: true,
    },

       
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Product Sales'
            },
        },
        legend: {
            display: true,
            position: 'top',    
            labels: {
              boxWidth: 20,
              fontColor: 'black',
            }
        },
    }
};

window.onload = function() {
    var ctx = document.getElementById('lineChart').getContext('2d');
    window.myLine = new Chart(ctx, config);
    // window.myLine = new Chart(ctxA, barChart);
};