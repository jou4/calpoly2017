var data = [
  { a: 3, b: 7.3, c: 7.1, d: 7, e: 4, f: 4.8, g: 9, h: 0, i: 0, j: 0.016, k:9, l: 0.44, m:0.001, n: 0.1, o:0.002, p: 0.01, q: 0.005, r: 0.0005, s:0, t: 0.0005, u: 0.0002, v: 0.0002, w: 0.0002, x: 0.0002, y: 0.0002, z:0.0002, aa: 0.0002, ab: 0.001, ac: 0.0002, ad: 0.0002, ae: 0.0006, af: 0.0003, ag: 0.0003, ah: 0.0002, ai: 0.002, aj: 5.4 , ak: 0.06, al: 0.07, am: 0.005},
  { a: 4, b: 7.4,  c: 7.1, d: 6.2, e: 4.8, f: 5.3, g: 14, h: 0, i: 0, j: 0.021, k: 10, l: 0.5, m: 0.001, n: 0.1, o: 0.0021, p: 0.01, q: 0.005, r: 0.0005, s: 0, t: 0, u: 0.0004, v: 0.0002, w: 0.0002, x: 0.0002, y: 0.0002, z: 0.0002, aa: 0.0002, ab: 0.001, ac: 0.0002, ad: 0.0002, ae: 0.0006, af: 0.0003, ag: 0.0003, ah: 0.0002, ai: 0.002, aj: 5.1, ak: 0.065, al: 0.07, am: 0.005},
  { a: 5, b: 7.4,  c: 7, d: 6.8, e: 4, f: 5, g: 13, h: 0, i: 0, j: 0.02, k: 9.3, l: 0.45, m: 0.0003, n: 0.1, o: 0.002, p: 0.01, q: 0.005, r: 0.0005, s: 0, t: 0.0005, u: 0.0002, v: 0.0002, w: 0.0002, x: 0.0002, y: 0.0002, z: 0.0002, aa: 0.0002, ab: 0.001, ac: 0.0002, ad: 0.0002, ae: 0.0006, af: 0.0003, ag: 0.0003, ah: 0.0002, ai: 0.002, aj: 6.3, ak: 0.0067, al: 0.0062, am: 0.005},
  { a: 6, b: 7.6, c: 7, d: 6.7, e: 3.6, f: 3.5, g: 9, h: 0, i: 0, j: 0.02, k: 9.2, l: 0.52, m: 0.001, n: 0.1, o: 0.002, p: 0.01, q: 0.005, r: 0.0005, s: 0, t: 0, u: 0.00023, v: 0.0002, w: 0.0002, x: 0.0002, y: 0.0002, z: 0.0002, aa: 0.0002, ab: 0.001, ac: 0.0002, ad: 0.0002, ae: 0.0006, af: 0.0003, ag: 0.0003, ah: 0.0002, ai: 0.002, aj: 6.9, ak: 0.092, al: 0.065, am: 0.005},
  { a: 7, b: 7.6, c: 7, d: 7, e: 3.3, f: 4.7, g: 10, h: 0, i: 0, j: 0, k: 7.5, l: 0.5, m: 0.0003, n: 0.1, o: 0.002, p: 0.01, q: 0.005, r: 0.0005, s: 0, t: 0.0005, u: 0.00033, v: 0.0002, w: 0.0002, x: 0.0002, y: 0.0002, z: 0.0002, aa: 0.0002, ab: 0.001, ac: 0.0002, ad: 0.0002, ae: 0.0006, af: 0.0003, ag: 0.0003, ah: 0.0002, ai: 0.002, aj: 5.7, ak: 0.062, al: 0.052, am: 0.005},
  { a: 8, b: 7.3, c: 6.9, d: 6.6, e: 3.3, f: 4.1, g: 8, h: 36000, i: 0, j: 0.023, k: 8.6, l: 0.48, m: 0.0003, n: 0.1, o: 0.002, p: 0.01, q: 0.005, r: 0.0005, s: 0, t: 0, u: 0.0002, v: 0.0002, w: 0.0002, x: 0.0002, y: 0.0002, z: 0.0002, aa: 0.0002, ab: 0.001, ac: 0.0002, ad: 0.0002, ae: 0.0006, af: 0.0003, ag: 0.0003, ah: 0.0002, ai: 0.002, aj: 7, ak: 0.07, al: 0.067, am: 0.005}
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
  var $valueAJ= $("#valueAJ");
  var $valueAK = $("#valueAK");
  var $valueAL = $("#valueAL");
  var $valueAM = $("#valueAM");


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
