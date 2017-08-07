function initMap() {

    // Const of Index for CSV Row Data
    var ID = 0;
    var PLANT = 1;
    var LAT = 2;
    var LNG = 3;
    var WATER_QUALITY = 4;

    // Const of Path for image files
    var icon1 = 'images/drop1.png';
    var icon2 = 'images/drop2.png';
    var icon3 = 'images/drop3.png';
    var icon4 = 'images/drop4.png';
    var icon5 = 'images/drop5.png';

    // Options for Google Map
    var opts = {
        zoom: 13,
        center: new google.maps.LatLng(35.538480, 139.739544)
    };

    // Google Map Instance
    var map = new google.maps.Map(document.getElementById("map"), opts);

    // read csv, then initialize map
    readCsv();

    function showMarker(rowData){

        var markerPos = { lat: parseFloat( rowData[LAT] ), lng: parseFloat( rowData[LNG] ) };

        var icon;
        switch(parseInt(rowData[WATER_QUALITY])){
            case 1:
                icon = icon1;
                break;
            case 2:
                icon = icon2;
                break;
            case 3:
                icon = icon3;
                break;
            case 4:
                icon = icon4;
                break;
            case 5:
                icon = icon5;
                break;
            default:
                console.log("unexpected WATER_QUALITY: " + rowData[WATER_QUALITY]);
                icon = icon1
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
        $canvas.append( $("<div/>").text(rowData[PLANT]) );
        $canvas.append( $("<div/>").append($("<a/>").text("more..")) );

        // make info window
        var infoWindow = new google.maps.InfoWindow({
            content: $canvas.html()
        });

        // open info window when click marker
        marker.addListener('click', function() {
            // see https://developers.google.com/maps/documentation/javascript/infowindows?hl=ja
            infoWindow.open(map, marker);
            // see http://getbootstrap.com/javascript/#modals-usage 
            // $('#detailModal').modal({}) 
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
                        showMarker(tmp[i].split(','));
                    }
                }
            }
        };
        xhr.send();    
    }
}

