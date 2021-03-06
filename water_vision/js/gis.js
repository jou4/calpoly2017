﻿// Const of Index for CSV Row Data
var ID = 0;
var PLANT = 1;
var LAT = 2;
var LNG = 3;
var WATER_QUALITY = 4;
var INDUSTRY = 5;
var TEL = 6;
var RIVER = 7;
var IMPACT = 8;
var AMOUNT = 9;
var KMLIDX = 1;
var INIT_ZOOM = 12;
var INIT_LAT = 35.518331;
var INIT_LNG = 139.603347;

// Const of Path for image files
var icon_0a = 'http://jou4.dip.jp/calpoly/water_vision/images/Ldrop0.png';
var icon_0b = 'http://jou4.dip.jp/calpoly/water_vision/images/Mdrop0.png';
var icon_0c = 'http://jou4.dip.jp/calpoly/water_vision/images/Sdrop0.png';
var icon_1a = 'http://jou4.dip.jp/calpoly/water_vision/images/Ldrop1.png';
var icon_1b = 'http://jou4.dip.jp/calpoly/water_vision/images/Mdrop1.png';
var icon_1c = 'http://jou4.dip.jp/calpoly/water_vision/images/Sdrop1.png';
var icon_2a = 'http://jou4.dip.jp/calpoly/water_vision/images/Ldrop32.png';
var icon_2b = 'http://jou4.dip.jp/calpoly/water_vision/images/Mdrop32.png';
var icon_2c = 'http://jou4.dip.jp/calpoly/water_vision/images/Sdrop32.png';
var icon_3a = 'http://jou4.dip.jp/calpoly/water_vision/images/Ldrop54.png';
var icon_3b = 'http://jou4.dip.jp/calpoly/water_vision/images/Mdrop54.png';
var icon_3c = 'http://jou4.dip.jp/calpoly/water_vision/images/Sdrop54.png';
var icon_q = 'http://jou4.dip.jp/calpoly/water_vision/images/question.png';
var icon_dot_red = 'http://jou4.dip.jp/calpoly/water_vision/images/Dot_red.png';
var icon_dot_blue = 'http://jou4.dip.jp/calpoly/water_vision/images/Dot_blue.png';

// スライダーバーで変更する部分の河川ベクトルデータ
var changingKmlURL = [
  "http://jou4.dip.jp/calpoly/water_vision/data/Tsurumigawa_color8.kml", // 8月 0
  "http://jou4.dip.jp/calpoly/water_vision/data/Tsurumigawa_color7.kml", // 7月 1
  "http://jou4.dip.jp/calpoly/water_vision/data/Tsurumigawa_color6.kml", // 6月 2
  "http://jou4.dip.jp/calpoly/water_vision/data/Tsurumigawa_color5.kml", // 5月 3
  "http://jou4.dip.jp/calpoly/water_vision/data/Tsurumigawa_color4.kml", // 4月 4
  "http://jou4.dip.jp/calpoly/water_vision/data/Tsurumigawa_color3.kml"  // 3月 5
];
var changingKmlLayer = []; // 河川ベクトルレイヤ

// 河川水質データ箇所
var riverPlotPosition = [    
    ['①',35.5145827779,139.5510591668],
    ['②',35.5117791666,139.5639822225],
    ['③',35.5139353947,139.5918986139],
  //④は非表示とする
  //['④',35.5151338347,139.5931227935],
    ['⑤',35.5162735672,139.6035429168],
    ['⑥',35.5149987256,139.6186494782],
    ['⑦',35.53311924  ,139.6186833599],
    ['⑧',35.5338976404,139.6290194931],
    ['⑨',35.5384458954,139.6559523974]
]; 

// 6か月分の河川水質データ（0:赤, 1～5:青）
var changingRiverPlotData = [
  [2, 0, 0, 3, 5, 0, 0, 2], // 8月
  [4, 3, 0, 0, 2, 0, 0, 3], // 7月
  [5, 5, 4, 2, 0, 0, 0, 0], // 6月
  [0, 3, 4, 5, 4, 0, 0, 1], // 5月
  [0, 0, 3, 3, 0, 0, 0, 4], // 4月
  [3, 0, 0, 0, 1, 2, 4, 5]  // 3月
];

// 河川水質データマーカ初期化
var riverPlotMarker = [
  new Array(8), // 8月
  new Array(8), // 7月
  new Array(8), // 6月
  new Array(8), // 5月
  new Array(8), // 4月
  new Array(8)  // 3月
];

// 工場排水データファイル
var wastewaterCsvFile = [
  "data/kojo_data8.csv", // 8月
  "data/kojo_data7.csv", // 7月
  "data/kojo_data6.csv", // 6月
  "data/kojo_data5.csv", // 5月
  "data/kojo_data4.csv", // 4月
  "data/kojo_data3.csv"  // 3月
];

// 工場排水データマーカ初期化
var wastewaterMarker = [
  new Array(26), // 8月
  new Array(26), // 7月
  new Array(26), // 6月
  new Array(26), // 5月
  new Array(26), // 4月
  new Array(26)  // 3月
];

var csvData = [
  new Array(26), // 8月
  new Array(26), // 7月
  new Array(26), // 6月
  new Array(26), // 5月
  new Array(26), // 4月
  new Array(26)  // 3月
];

var activeInfoWindow;

function initMap() {

  // Options for Google Map
  var opts = {
    zoom: INIT_ZOOM,
    center: new google.maps.LatLng(INIT_LAT, INIT_LNG)
  };

  // Google Map Instance
  var map = new google.maps.Map(document.getElementById("map"), opts);

  var kmlSrc = addTimeStampToUrl('http://jou4.dip.jp/calpoly/water_vision/data/Tamagawa.kml');
  var kmlLayer = new google.maps.KmlLayer(kmlSrc, {
    suppressInfoWindows: true,
    preserveViewport: true,
    map: map
  });
  showRiverName(KMLIDX++, kmlLayer);
  
  var kmlSrc2 = addTimeStampToUrl('http://jou4.dip.jp/calpoly/water_vision/data/Tsurumigawa.kml');
  var kmlLayer2 = new google.maps.KmlLayer(kmlSrc2, {
    suppressInfoWindows: true,
    preserveViewport: true,
    map: map
  });
  showRiverName(KMLIDX++, kmlLayer2);

  var kmlSrc3 = addTimeStampToUrl('http://jou4.dip.jp/calpoly/water_vision/data/Onda+Nara.kml');
  var kmlLayer3 = new google.maps.KmlLayer(kmlSrc3, {
    suppressInfoWindows: true,
    preserveViewport: true,
    map: map
  });
  showRiverName(KMLIDX++, kmlLayer3);

  var kmlSrc4 = addTimeStampToUrl('http://jou4.dip.jp/calpoly/water_vision/data/Toriyama+Sunada.kml');
  var kmlLayer4 = new google.maps.KmlLayer(kmlSrc4, {
    suppressInfoWindows: true,
    preserveViewport: true,
    map: map
  });
  showRiverName(KMLIDX++, kmlLayer4);

  var kmlSrc5 = addTimeStampToUrl('http://jou4.dip.jp/calpoly/water_vision/data/Kanagawa_Branch.kml');
  var kmlLayer5 = new google.maps.KmlLayer(kmlSrc5, {
    suppressInfoWindows: true,
    preserveViewport: true,
    map: map
  });
  showRiverName(KMLIDX++, kmlLayer5);
  
  for (var i = 0; i < 6; i++) {
    var changingKmlSrc = addTimeStampToUrl(changingKmlURL[i]);
    changingKmlLayer[i] = new google.maps.KmlLayer(changingKmlSrc, {
      suppressInfoWindows: true,
      preserveViewport: true,
      map: map
    });
    showRiverName(KMLIDX, changingKmlLayer[i]);
    
    if (0 < i) changingKmlLayer[i].setMap(null);
  }

  // read csv, then initialize map
  for (var i=0; i<6; i++)
  {
    var path = wastewaterCsvFile[i]; // 読み込む外部ファイル  
    readCsv(path, i);
  }

  // 中心の移動
  map.panTo(new google.maps.LatLng(INIT_LAT, INIT_LNG));

  // ズーム
  map.setZoom(INIT_ZOOM);

  // close info window when click map
  map.addListener('click', function() {
    if(activeInfoWindow){
      activeInfoWindow.close();
      activeInfoWindow = null;
    }
  });

  // 河川にドットをプロット
  showMarkerDot(map);

  function readCsv(path, monthIndex) {
  
    var xhr = null; // 使える場合はMicrosoft.XMLHTTP, 使えない場合はXMLHttpRequest
    try { xhr = new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) { xhr = new XMLHttpRequest(); }
    
    xhr.open("GET", path, true);
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4) {
        var data = xhr.responseText; // 外部ファイルの内容
        var tmp = data.split("\n");
        for (var j=0; j < tmp.length; j++){ // 工場の数だけ繰り返し
          if(tmp[j]){
            var rowData = tmp[j].split(',');
            csvData[monthIndex][rowData[ID]] = rowData;
            showMarker(rowData, monthIndex, j);
          }
        }
      }
    };
    xhr.send();
  
  } //function readCsv()
  
  function showMarker(rowData, monthIndex, positionIndex){

    var markerPos = { lat: parseFloat( rowData[LAT] ), lng: parseFloat( rowData[LNG] ) };

    var icon;
    switch(rowData[IMPACT]){
      case "A":
        switch(parseInt(rowData[WATER_QUALITY])){
          case 0:
            icon = icon_0a;
            break;
          case 1:
            icon = icon_1a;
            break;
          case 2:
            icon = icon_2a;
            break;
          case 3:
            icon = icon_3a;
            break;
          default:
            console.log("unexpected WATER_QUALITY: " + rowData[WATER_QUALITY]);
            icon = icon_0a;
            break;
        }
        break;
      case "B":
        switch(parseInt(rowData[WATER_QUALITY])){
          case 0:
            icon = icon_0b;
            break;
          case 1:
            icon = icon_1b;
            break;
          case 2:
            icon = icon_2b;
            break;
          case 3:
            icon = icon_3b;
            break;
          default:
            console.log("unexpected WATER_QUALITY: " + rowData[WATER_QUALITY]);
            icon = icon_0b;
            break;
        }
        break;
      case "C":
        switch(parseInt(rowData[WATER_QUALITY])){
          case 0:
            icon = icon_0c;
            break;
          case 1:
            icon = icon_1c;
            break;
          case 2:
            icon = icon_2c;
            break;
          case 3:
            icon = icon_3c;
            break;
          default:
            console.log("unexpected WATER_QUALITY: " + rowData[WATER_QUALITY]);
            icon = icon_0c;
            break;
        }
        break;
      case "Q":
        icon = icon_q;
        break;
      default:
        console.log("unexpected IMPACT: " + rowData[IMPACT]);
        break;
    }

    // make marker
    wastewaterMarker[monthIndex][positionIndex] = new google.maps.Marker({
      position: markerPos,
      icon: icon,
      map: map
    });    

    // 初回は8月(monthIndex==0)のみ表示
    if (monthIndex != 0) wastewaterMarker[monthIndex][positionIndex].setVisible(false);

    // make contents html in info window
    var $canvas = $("<div/>");
    var $moreInfoLink = $("<a/>").attr("href", "javascript: showDetailPopUp('" + rowData[ID] + "');").text("more..");
    $canvas.append( $("<div/>").text(rowData[PLANT]) );
    if(rowData[IMPACT] != 'Q'){
      $canvas.append( $("<div/>").append($moreInfoLink) );
    }
    // make info window
    var infoWindow = new google.maps.InfoWindow({
      content: $canvas.html()
    });

    // open info window when click marker
    wastewaterMarker[monthIndex][positionIndex].addListener('click', function() {
      if(activeInfoWindow){
        activeInfoWindow.close();
        activeInfoWindow = null;
      }
      // see https://developers.google.com/maps/documentation/javascript/infowindows?hl=ja
      infoWindow.open(map, wastewaterMarker[monthIndex][positionIndex]);
      activeInfoWindow = infoWindow;
    });

  }//function showMarker(rowData)

  function showRiverName(KmlLayerID, varKmlLayer) {
    // open info window when click marker
    google.maps.event.addListener(varKmlLayer, 'click', function(event) {
      var latlng = new google.maps.LatLng(event.latLng.lat(), event.latLng.lng());

      if(activeInfoWindow){
        activeInfoWindow.close();
        activeInfoWindow = null;
      }

      var iwopts = {
        content: riverName(KmlLayerID),
        position: latlng
      };
      var infoWindow = new google.maps.InfoWindow(iwopts);

      infoWindow.open(map);
      activeInfoWindow = infoWindow;

      // Positioning
      map.panTo(latlng);
      
    });//addListener
    
  }//function showRiverName()

  function changekmllayer(event, ui) {
  
    // 3: dispMonthIndex=5
    // 4: dispMonthIndex=4
    // 5: dispMonthIndex=3
    // 6: dispMonthIndex=2
    // 7: dispMonthIndex=1
    // 8: dispMonthIndex=0
    
    var dispMonthIndex = 8 - ui.value;
    if (dispMonthIndex < 0 || 5 < dispMonthIndex) return;
    
    for (var i=0; i<6; i++)
    {
      if (i == dispMonthIndex)
      {
        // KMLレイヤ表示
        changingKmlLayer[i].setMap(map);
        
        // 水滴（工場）表示
        for (var j=0; j<26; j++)
        {
          wastewaterMarker[i][j].setVisible(true);
        }
        
        // 河川水質表示
        for (var j=0; j<8; j++)
        {
          riverPlotMarker[i][j].setVisible(true);
        }        
      }
      else
      {
        // KMLレイヤ非表示
        changingKmlLayer[i].setMap(null);
        
        // 水滴（工場）非表示
        for (var j=0; j<26; j++)
        {
          wastewaterMarker[i][j].setVisible(false);
        }
        
        // 河川水質非表示
        for (var j=0; j<8; j++)
        {
          riverPlotMarker[i][j].setVisible(false);
        }
      }
    }
  }//function changingkmlLayer


$( function(){
  $("#slider1").slider({
    range: "max",
    min: 3,
    max: 8,
    value: 8,
    step: 1,
    slide: function(event, ui){
      $("#slider-caption").text(ui.value);
    },
    change: function(event, ui) {
    	console.log(ui.value);
   		changekmllayer(event, ui);
    }
  });

  $("#slider-caption").text($("#slider1").slider("value"));
});


    
}//function initMap()



function riverName(Layer){

  var riverName = "";

  switch(Layer.toString().substr(-1)){
    case "1":
      riverName = "多摩川"
      break;
    case "2":
      riverName = "鶴見川"
      break;
    case "3":
      riverName = "恩田川・奈良川"
      break;
    case "4":
      riverName = "鳥山川・砂田川"
      break;
    case "5":
      riverName = "支流"
      break;      
    case "6":
      riverName = "鶴見川"
      break; 
    default:
      riverName = "Unknown River"
      break;
  }//switch
  return riverName;
}//function riverName

function showMarkerDot(map){
    // 各河川地点にドットをプロット
    var red = 0;

    for (var i = 0; i < 6; i++) {
        
        for (var j = 0; j < 8; j++) {
        	var positionDetail = riverPlotPosition[j];
        	var markerPos = { lat: parseFloat(positionDetail[1]), lng: parseFloat(positionDetail[2]) };
        
	        var icon;
	        if(red == changingRiverPlotData[i][j]){
	            icon = icon_dot_red;
	        } else {
	            icon = icon_dot_blue;
	        }
	        	        
	        plotDot(markerPos, icon, map, i, j);
        }
    }
}

function plotDot(markerPos, icon, map, monthIndex, positionIndex){
    // make marker
    riverPlotMarker[monthIndex][positionIndex] = new google.maps.Marker({
        position: markerPos,
        icon: new google.maps.MarkerImage(
            icon,
            new google.maps.Size(15, 15),
            new google.maps.Point(0, 0),
            new google.maps.Point(8, 8)
            ),
        map: map
    });
    
    // 初期状態では８月のみ表示、他は非表示
    if (0 < monthIndex) riverPlotMarker[monthIndex][positionIndex].setVisible(false);
    
    // open info window when click marker
    riverPlotMarker[monthIndex][positionIndex].addListener('click', function() {
      if(activeInfoWindow){
        activeInfoWindow.close();
        activeInfoWindow = null;
      }
      
      // make chart
      // bugfix: https://github.com/chartjs/Chart.js/issues/4622
      setTimeout(function(){
        makeRiverChart(positionIndex); // 河川水質箇所jの６か月間水質グラフを表示する
      }, 200);
      // show popup
      // see http://getbootstrap.com/javascript/#modals-usage 
      $('#riverDetailModal').modal({});
    });
}

function addTimeStampToUrl(url){
  return url + "?" + new Date().getTime();
}

//var csvData = {};

function showDetailPopUp(id) {
  var rowData8 = csvData[5][id]; // 基本データは８月のものを使う
  console.log(rowData8);

  var rowData7 = csvData[4][id];
  var rowData6 = csvData[3][id];
  var rowData5 = csvData[2][id];
  var rowData4 = csvData[1][id];
  var rowData3 = csvData[0][id];

  var monthWaterQuality = [
    rowData8[WATER_QUALITY],
    rowData7[WATER_QUALITY],
    rowData6[WATER_QUALITY],
    rowData5[WATER_QUALITY],
    rowData4[WATER_QUALITY],
    rowData3[WATER_QUALITY]
  ];

  // set detail info
  $("#plant_name").text(rowData8[PLANT]);
  $("#plant_industry").text(rowData8[INDUSTRY]);
  $("#plant_tel").text(rowData8[TEL]);
  $("#plant_river").text(rowData8[RIVER]);
  $("#plant_impact").text(rowData8[IMPACT]);
  $("#plant_amount").text((rowData8[AMOUNT].replace(/^(-?\d+)(\d{3})/, "$1,$2")) + "\u33a5/日");
  // make chart
  // bugfix: https://github.com/chartjs/Chart.js/issues/4622
  setTimeout(function(){
    makeIndustryChart(monthWaterQuality);
  }, 200);
  // show popup
  // see http://getbootstrap.com/javascript/#modals-usage 
  $('#detailModal').modal({});
}


function makeIndustryChart(monthWaterQuality) {
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
            monthWaterQuality[0],
            monthWaterQuality[1],
            monthWaterQuality[2],
            monthWaterQuality[3],
            monthWaterQuality[4],
            monthWaterQuality[5],
          ],
          // 塗り潰しはしない
          fill: false,
          // 曲線は用いない
          lineTension: 0
        }, {
          label: "境界線",
          backgroundColor: window.chartColors.red,
          borderColor: window.chartColors.red,
          data: [0.5,0.5,0.5,0.5,0.5,0.5],
          fill: false,
          pointRadius : 0,
          pointHitRadius : 0
        }
      ]
    },
    options: {
      responsive: true,

      // チャート名称を表示したい場合
      //title: {
      //    display: true,
      //    text:'排水水質認証グラフ'
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
            display: false,
          },
          ticks: {
            //0～3の4段階を想定
            suggestedMin: 0,
            suggestedMax: 3,
            stepSize: 1
          }
        }]
      },
      // 凡例の非表示
      legend: {
        display: false
      },
      // 各ポイントでイベントを拾わないための逃げ処理
      events: [
      ]
    }
  };
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = new Chart(ctx, config);
}

function makeRiverChart(positionIndex) {

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
            changingRiverPlotData[5][positionIndex], // 3月水質レベル
            changingRiverPlotData[4][positionIndex], // 4月
            changingRiverPlotData[3][positionIndex], // ：
            changingRiverPlotData[2][positionIndex],
            changingRiverPlotData[1][positionIndex],
            changingRiverPlotData[0][positionIndex]
          ],
          // 塗り潰しはしない
          fill: false,
          // 曲線は用いない
          lineTension: 0
        }, {
          label: "境界線",
          backgroundColor: window.chartColors.red,
          borderColor: window.chartColors.red,
          data: [0.5,0.5,0.5,0.5,0.5,0.5],
          fill: false,
          pointRadius : 0,
          pointHitRadius : 0
        }
      ]
    },
    options: {
      responsive: true,

      // チャート名称を表示したい場合
      //title: {
      //    display: true,
      //    text:'河川水質認証グラフ'
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
            display: false,
          },
          ticks: {
            //0～5の6段階を想定
            suggestedMin: 0,
            suggestedMax: 5,
            stepSize: 1
          }
        }]
      },
      // 凡例の非表示
      legend: {
        display: false
      },
      // 各ポイントでイベントを拾わないための逃げ処理
      events: [
      ]
    }
  };
  var ctx = document.getElementById("canvas2").getContext("2d");
  window.myLine = new Chart(ctx, config);
}