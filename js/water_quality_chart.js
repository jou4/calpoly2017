//var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var config = {
  type: 'line',
  data: {
      labels: ["３月", "４月", "５月", "６月", "７月", "８月"],
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
      
      // チャート名称を表示したい場合
      //title: {
      //    display: true,
      //    text:'水質５段階チャート'
      //},
      tooltips: {
          enabled: false 
      },
      hover: {
          mode: 'nearest',
          intersect: true
      },
      scales: {
          xAxes: [{
              display: true,
              scaleLabel: {
                  // 横軸の単位は非表示とする
                  display: false,
                  labelString: "月"
              }
          }],
          yAxes: [{
              display: true,
              scaleLabel: {
                  // 一旦非表示。「水質認証」を縦表示に出来ていない。
                  display: false,
                  labelString: "水質認証"
              },
              ticks: {
                  suggestedMin: 1,
                  suggestedMax: 5,
                  stepSize: 1,
                  
                  // ★に変換
                  callback: function(value, index, values) {
                      var star = "★";
                      for (var i = 1; i < value; ++i) {
                          star = star + "★"; 
                      }
                      return star;
                  },
                  // 黄色に変更
                  fontColor:  '#F3D51A' 
              }
          }]
      },
      // 凡例の非表示
      legend: {
            display: false
      }
  }
};

window.onload = function() {
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = new Chart(ctx, config);
};

