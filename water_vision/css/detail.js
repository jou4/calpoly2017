var data = [
  { a: 3, b: 8  , c: 1  , d: 4   , e: 3,f: 1, g: 1, h: 0.01 ,i: 0.1, j: 0.1, k:0.03, l: 0.03 , m:0.01, n: 0, o:1.5 ,p: 0.11 ,q: 0.001, r: 0 , s:0 , t: 0.01 , u: 0.01 , v: 0.01 , w: 0.0005 ,x: 0 ,y: 0 , z:0.0002, aa: 0.0002  , ab: 0.001  , ac: 0.0002, ad: 0.0002, ae: 0.0006 ,af: 0.0003,ag: 0.0003, ah: 0.0002, ai: 0.002, aj: 5.4 , ak: 0.06, al: 0.07, am: 0.005, an: 5.4 , ao: 0.07, ap: 0.005, aq: 0.005},
  { a: 4, b: 8  , c: 1  , d: 3.8 , e: 3,f: 1, g: 1, h: 0.01 ,i: 0.1, j: 0.1, k:0.03, l: 0.03 , m:0.01, n: 0, o:1.5 ,p: 0.1  ,q: 0.001, r: 0 , s:0 , t: 0.01 , u: 0.01 , v: 0.01 , w: 0.0005 ,x: 0 ,y: 0 , z: 26, aa: 27  , ab: 28 , ac: 29, ad: 30, ae: 31 ,af: 32,ag: 33, ah: 34, ai: 35, aj: 36 , ak: 37, al: 28, am: 39, an: 5.4 , ao: 0.07, ap: 0.005, aq: 0.005},
  { a: 5, b: 7  , c: 1  , d: 5.4 , e: 1,f: 1, g: 1, h: 0.01 ,i: 0.1, j: 0.1, k:0.07, l: 0.01 , m:0.01, n: 0, o:1.5 ,p: 0.11 ,q: 0.001, r: 0 , s:0 , t: 0.01 , u: 0.01 , v: 0.01 , w: 0.0005 ,x: 0 ,y: 0 , z: 26, aa: 27  , ab: 28 , ac: 29, ad: 30, ae: 31 ,af: 32,ag: 33, ah: 34, ai: 35, aj: 36 , ak: 37, al: 28, am: 39, an: 5.4 , ao: 0.07, ap: 0.005, aq: 0.005},
  { a: 6, b: 7.8, c: 1  , d: 5.2 , e: 1,f: 1, g: 1, h: 0.01 ,i: 0.1, j: 0.1, k:0.06, l: 0.01 , m:0.01, n: 0, o:1.4 ,p: 0.1  ,q: 0.001, r: 0 , s:0 , t: 0.01 , u: 0.01 , v: 0.01 , w: 0.0005 ,x: 0 ,y: 0 , z: 26, aa: 27  , ab: 28 , ac: 29, ad: 30, ae: 31 ,af: 32,ag: 33, ah: 34, ai: 35, aj: 36 , ak: 37, al: 28, am: 39, an: 5.4 , ao: 0.07, ap: 0.005, aq: 0.005},
  { a: 7, b: 8.1, c: 1.1, d: 3.5 , e: 1,f: 1, g: 1, h: 0.01 ,i: 0.1, j: 0.1, k:0.01, l: 0.01 , m:0.01, n: 0, o:0.9 ,p: 0.14 ,q: 0.001, r: 0 , s:0 , t: 0.01 , u: 0.01 , v: 0.01 , w: 0.0005 ,x: 0 ,y: 0 , z: 26, aa: 27  , ab: 28 , ac: 29, ad: 30, ae: 31 ,af: 32,ag: 33, ah: 34, ai: 35, aj: 36 , ak: 37, al: 28, am: 39, an: 5.4 , ao: 0.07, ap: 0.005, aq: 0.005},
  { a: 8, b: 8  , c: 1  , d: 4   , e: 1,f: 1, g: 1, h: 0.01 ,i: 0.1, j: 0.1, k:0.01, l: 0.01 , m:0.01, n: 0, o:0.9 ,p: 0.15 ,q: 0.001, r: 0 , s:0 , t: 0.01 , u: 0.01 , v: 0.01 , w: 0.0005 ,x: 0 ,y: 0 , z: 0.0002, aa: 0.0002  , ab: 0.0002 , ac: 29, ad: 30, ae: 31 ,af: 32,ag: 33, ah: 34, ai: 35, aj: 36 , ak: 37, al: 28, am: 39, an: 5.4 , ao: 0.07, ap: 0.005, aq: 0.005}
];

$(function(){

  var index = 5;

  var $valueA = $("#valueA");
  var $valueB = $("#valueB");
  var $valueC = $("#valueC");
  var $valueD = $("#valueD");
  var $valueE = $("#valueE");
  var $valueF = $("#valueF");
  var $valueG = $("#valueG");
  var $valueH = $("#valueH");
  var $valueI = $("#valueI");
  var $valueJ = $("#valueJ");
  var $valueK = $("#valueK");
  var $valueL = $("#valueL");
  var $valueM = $("#valueM");
  var $valueN = $("#valueN");
  var $valueO = $("#valueO");
  var $valueP = $("#valueP");
  var $valueQ = $("#valueQ");
  var $valueR = $("#valueR");
  var $valueS = $("#valueS");
  var $valueT = $("#valueT");
  var $valueU = $("#valueU");
  var $valueV = $("#valueV");
  var $valueW = $("#valueW");
  var $valueX = $("#valueX");
  var $valueY = $("#valueY");
  var $valueZ = $("#valueZ");
  var $valueAA = $("#valueAA");
  var $valueAB = $("#valueAB");
  var $valueAC = $("#valueAC");
  var $valueAD = $("#valueAD");
  var $valueAE = $("#valueAE");
  var $valueAF = $("#valueAF");
  var $valueAG = $("#valueAG");
  var $valueAH = $("#valueAH");
  var $valueAI = $("#valueAI");
  var $valueAJ = $("#valueAJ");
  var $valueAK = $("#valueAK");
  var $valueAL = $("#valueAL");
  var $valueAM = $("#valueAM");
  var $valueAN = $("#valueAN");
  var $valueAO = $("#valueAO");
  var $valueAP = $("#valueAP");
  var $valueAQ = $("#valueAQ");

  var $prev = $("#prev");
  var $next = $("#next");

  function showData(row){
    $valueA.text(row["a"]);
    $valueB.text(row["b"]);
    $valueC.text(row["c"]);
    $valueD.text(row["d"]);
    $valueE.text(row["e"]);
    $valueF.text(row["f"]);
    $valueG.text(row["g"]);
    $valueH.text(row["h"]);
    $valueI.text(row["i"]);
    $valueJ.text(row["j"]);
    $valueK.text(row["k"]);
    $valueL.text(row["l"]);
    $valueM.text(row["m"]);
    $valueN.text(row["n"]);
    $valueO.text(row["o"]);
    $valueP.text(row["p"]);
    $valueQ.text(row["q"]);
    $valueR.text(row["r"]);
    $valueS.text(row["s"]);
    $valueT.text(row["t"]);
    $valueU.text(row["u"]);
    $valueV.text(row["v"]);
    $valueW.text(row["w"]);
    $valueX.text(row["x"]);
    $valueY.text(row["y"]);
    $valueZ.text(row["z"]);
    $valueAA.text(row["aa"]);
    $valueAB.text(row["ab"]);
    $valueAC.text(row["ac"]);
    $valueAD.text(row["ad"]);
    $valueAE.text(row["ae"]);
    $valueAF.text(row["af"]);
    $valueAG.text(row["ag"]);
    $valueAH.text(row["ah"]);
    $valueAI.text(row["ai"]);
    $valueAJ.text(row["aj"]);
    $valueAK.text(row["ak"]);
    $valueAL.text(row["al"]);
    $valueAM.text(row["am"]);
    $valueAN.text(row["an"]);
    $valueAO.text(row["ao"]);
    $valueAP.text(row["ap"]);
    $valueAQ.text(row["aq"]);
  }

  function toggleLink(index){
    if(index == 0){
      $prev.prop("disabled", true);
    }else{
      $prev.prop("disabled", false);
    }
    if(index == data.length-1){
      $next.prop("disabled", true);
    }else{
      $next.prop("disabled", false);
    }
  }

  $prev.on("click", function(e){
    index--;
    showData(data[index]);
    toggleLink(index);
  });

  $next.on("click", function(e){
    index++;
    showData(data[index]);
    toggleLink(index);
  });

  showData(data[index]);
  toggleLink(index);

});
