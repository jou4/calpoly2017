var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var config = {
  type: 'line',
  data: {
      labels: ["４月", "５月", "６月", "７月", "８月", "９月"],
      datasets: [
          {
              label: "水質",
              backgroundColor: window.chartColors.blue,
              borderColor: window.chartColors.blue,
              data: [
                  1,2,2,4,5,3
              ],
              // 塗り潰しはしない
              fill: false,
              // 曲線は用いない
              lineTension: 0
          }
      ]
  },
  options: {
      responsive: true,
      title:{
          display:true,
          text:'Chart.js Line Chart'
      },
      tooltips: {
          mode: 'index',
          intersect: false,
      },
      hover: {
          mode: 'nearest',
          intersect: true
      },
      scales: {
          xAxes: [{
              display: true,
              scaleLabel: {
                  display: true,
                  labelString: 'Month'
              }
          }],
          yAxes: [{
              display: true,
              scaleLabel: {
                  display: true,
                  labelString: 'Value'
              }
          }]
      },
      legend: {
            display: false
      }
  }
};

window.onload = function() {
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = new Chart(ctx, config);
};

