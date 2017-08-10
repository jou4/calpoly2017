// Const of Index for CSV Row Data
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
var icon_0a = 'images/Ldrop0.png';
var icon_0b = 'images/Mdrop0.png';
var icon_0c = 'images/Sdrop0.png';
var icon_1a = 'images/Ldrop1.png';
var icon_1b = 'images/Mdrop1.png';
var icon_1c = 'images/Sdrop1.png';
var icon_2a = 'images/Ldrop32.png';
var icon_2b = 'images/Mdrop32.png';
var icon_2c = 'images/Sdrop32.png';
var icon_3a = 'images/Ldrop54.png';
var icon_3b = 'images/Mdrop54.png';
var icon_3c = 'images/Sdrop54.png';
var icon_q = 'images/question.png';
var icon_dot_red = 'images/Dot_red.png';
var icon_dot_blue = 'images/Dot_blue.png';

// スライダーバーで変更する部分の河川ベクトルデータ
var changingKmlURL = [
  "http://jou4.dip.jp/calpoly/water_vision/data/Tsurumigawa_color8.kml", // 8月
  "http://jou4.dip.jp/calpoly/water_vision/data/Tsurumigawa_color7.kml", // 7月
  "http://jou4.dip.jp/calpoly/water_vision/data/Tsurumigawa_color6.kml", // 6月
  "http://jou4.dip.jp/calpoly/water_vision/data/Tsurumigawa_color5.kml", // 5月
  "http://jou4.dip.jp/calpoly/water_vision/data/Tsurumigawa_color4.kml", // 4月
  "http://jou4.dip.jp/calpoly/water_vision/data/Tsurumigawa_color3.kml"  // 3月
];
var changingKmlLayer = []; // 河川ベクトルレイヤ

// 河川水質データ箇所
var riverPlotPosition = [    
    ['①',35.5145827779,139.5510591668],
    ['②',35.5117791666,139.5639822225],
    ['③',35.5139353947,139.5918986139],
  //④は非表示とする
    ['④',35.5151338347,139.5931227935],
    ['⑤',35.5162735672,139.6035429168],
    ['⑥',35.5149987256,139.6186494782],
    ['⑦',35.53311924  ,139.6186833599],
    ['⑧',35.5338976404,139.6290194931],
    ['⑨',35.5384458954,139.6559523974]
]; 

// 6か月分の河川水質データ（0:青, 1:赤, -1:非表示）
var changingRiverPlotData = [
  [0, 1, 1, -1, 0, 0, 1, 1, 0], // 8月
  [0, 0, 1, -1, 1, 0, 1, 1, 0], // 7月
  [0, 0, 0, -1, 0, 1, 1, 1, 1], // 6月
  [1, 0, 0, -1, 0, 0, 1, 1, 0], // 5月
  [1, 1, 0, -1, 0, 1, 1, 1, 0], // 4月
  [0, 1, 1, -1, 1, 0, 0, 0, 0]  // 3月
];

// 河川水質データマーカ初期化
var riverPlotMarker = [
  new Array(9),
  new Array(9),
  new Array(9),
  new Array(9),
  new Array(9),
  new Array(9)
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
  readCsv();

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

  function showMarker(rowData){

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
    var marker = new google.maps.Marker({
      position: markerPos,
      icon: icon,
      map: map
    });    

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
    marker.addListener('click', function() {
      if(activeInfoWindow){
        activeInfoWindow.close();
        activeInfoWindow = null;
      }
      // see https://developers.google.com/maps/documentation/javascript/infowindows?hl=ja
      infoWindow.open(map, marker);
      activeInfoWindow = infoWindow;
    });

  }//function showMarker(rowData)

  function readCsv() {
    var xhr = null; // 使える場合はMicrosoft.XMLHTTP, 使えない場合はXMLHttpRequest
    try { xhr = new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) { xhr = new XMLHttpRequest(); }
    var path = "kojo_data.csv"; // 読み込む外部ファイル
    xhr.open("GET", path, true);
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4) {
        var data = xhr.responseText; // 外部ファイルの内容
        var tmp = data.split("\n");
        for (var i=0; i < tmp.length; i++){
          if(tmp[i]){
            var rowData = tmp[i].split(',');
            csvData[rowData[ID]] = rowData;
            showMarker(rowData);
          }
        }
      }
    };
    xhr.send();
  }//function readCsv()

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
    var blue = 0;
    var red = 1;

    for (var i = 0; i < 6; i++) {
        
        for (var j=0; j<9; j++) {
        	var positionDetail = riverPlotPosition[j];
        	var markerPos = { lat: parseFloat(positionDetail[1]), lng: parseFloat(positionDetail[2]) };
        
	        var icon;
	        if(blue == changingRiverPlotData[i][j]){
	            icon = icon_dot_blue;
	        } else if (red == changingRiverPlotData[i][j]) {
	            icon = icon_dot_red;
	        }
	        else
	        {
	            continue;
	        }
	        	        
	        plotDot(markerPos, icon, map, i, j);
        }
    }
}

function plotDot(markerPos, icon, map, i, j){
    // make marker
    riverPlotMarker[i][j] = new google.maps.Marker({
        position: markerPos,
        //icon: icon,
        icon: new google.maps.MarkerImage(
            icon,
            new google.maps.Size(15, 15),
            new google.maps.Point(0, 0),
            new google.maps.Point(8, 8)
            ),
        map: map
    });
    
    if (0 < i) riverPlotMarker[i][j].setVisible(false);
}

function addTimeStampToUrl(url){
  return url + "?" + new Date().getTime();
}

var csvData = {};

function showDetailPopUp(id) {
  var rowData = csvData[id];
  console.log(rowData);

  // set detail info
  $("#plant_name").text(rowData[PLANT]);
  $("#plant_industry").text(rowData[INDUSTRY]);
  $("#plant_tel").text(rowData[TEL]);
  $("#plant_river").text(rowData[RIVER]);
  $("#plant_impact").text(rowData[IMPACT]);
  $("#plant_amount").text((rowData[AMOUNT].replace(/^(-?\d+)(\d{3})/, "$1,$2")) + "\u33a5/日");
  // make chart
  // bugfix: https://github.com/chartjs/Chart.js/issues/4622
  setTimeout(function(){
    makeChart(rowData);
  }, 200);
  // show popup
  // see http://getbootstrap.com/javascript/#modals-usage 
  $('#detailModal').modal({});
}


function makeChart(rowData) {
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
            1,0,2,3,2,rowData[WATER_QUALITY]
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
            stepSize: 1,
            //水マークに変換すると文字化けするので、一旦数値表示とする
            //// 水マークに変換
            //callback: function(value, index, values) {
            //    var waterMark = "\u1F64F";
            //
            //    for (var i = 1; i < value; ++i) {
            //        waterMark = waterMark + "\u1F64F"; 
            //    }
            //    return waterMark;
            //},
            //// 黄色に設定
            //fontColor:  '#F3D51A'
          }
        }]
      },
      // 凡例の非表示
      legend: {
        display: false
      }
    }
  };
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = new Chart(ctx, config);
}

