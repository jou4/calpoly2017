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

var activeInfoWindow;

function initMap() {

    // Options for Google Map
    var opts = {
        zoom: 13,
        center: new google.maps.LatLng(35.538480, 139.739544)
    };

    // Google Map Instance
    var map = new google.maps.Map(document.getElementById("map"), opts);

    var kmlSrc = addTimeStampToUrl('http://jou4.dip.jp/calpoly/data/W05-08_13_Tokyo_Tamagawa.kml');
    //var kmlSrc = addTimeStampToUrl('http://jou4.dip.jp/calpoly/data/W05-08_14_Kanagawa_tamagawa.kml');
    //var kmlSrc = addTimeStampToUrl('http://jou4.dip.jp/calpoly/data/Tamagawa.kml');
    var kmlLayer = new google.maps.KmlLayer(kmlSrc, {
        suppressInfoWindows: true,
        preserveViewport: false,
        map: map
    });

    var kmlSrc2 = addTimeStampToUrl('http://jou4.dip.jp/calpoly/data/W05-08_14_Kanagawa_Tsurumigawa.kml');
    var kmlLayer2 = new google.maps.KmlLayer(kmlSrc2, {
        suppressInfoWindows: true,
        preserveViewport: false,
        map: map
    });

    // read csv, then initialize map
    readCsv();

    /*
   var kmlSrc2 = 'http://jou4.dip.jp/calpoly/data/W05-08_14_Kanagawa_tamagawa.kml';
    //var kmlSrc = 'http://jou4.dip.jp/calpoly/data/Tamagawa.kml';
   var kmlLayer2 = new google.maps.KmlLayer(kmlSrc2, {
       suppressInfoWindows: true,
       preserveViewport: false,
       strokeColor: "#00FF00",
       map: map
       });
       */
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
        $canvas.append( $("<div/>").append($moreInfoLink) );

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

        // close info window when click map
        map.addListener('click', function() {
            if(activeInfoWindow){
                activeInfoWindow.close();
                activeInfoWindow = null;
            }
        });
    }

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
    }
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
    $("#plant_amount").text(rowData[AMOUNT]);
    // make chart
    makeChart(rowData);
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
                        //                        // 水マークに変換
                        //                        callback: function(value, index, values) {
                        //                            var waterMark = "\u1F64F";
                        //
                        //                            for (var i = 1; i < value; ++i) {
                        //                                waterMark = waterMark + "\u1F64F"; 
                        //                            }
                        //                            return waterMark;
                        //                        },
                        //                        // 黄色に設定
                        //                        fontColor:  '#F3D51A'
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

