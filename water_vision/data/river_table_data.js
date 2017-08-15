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

  var $vA = $("#vA");
  var $vB = $("#vB");
  var $vC = $("#vC");
  var $vD = $("#vD");
  var $vE = $("#vE");
  var $vF = $("#vF");
  var $vG = $("#vG");
  var $vH = $("#vH");
  var $vI = $("#vI");
  var $vJ = $("#vJ");
  var $vK = $("#vK");
  var $vL = $("#vL");
  var $vM = $("#vM");
  var $vN = $("#vN");
  var $vO = $("#vO");
  var $vP = $("#vP");
  var $vQ = $("#vQ");
  var $vR = $("#vR");
  var $vS = $("#vS");
  var $vT = $("#vT");
  var $vU = $("#vU");
  var $vV = $("#vV");
  var $vW = $("#vW");
  var $vX = $("#vX");
  var $vY = $("#vY");
  var $vZ = $("#vZ");
  var $vAA = $("#vAA");
  var $vAB = $("#vAB");
  var $vAC = $("#vAC");
  var $vAD = $("#vAD");
  var $vAE = $("#vAE");
  var $vAF = $("#vAF");
  var $vAG = $("#vAG");
  var $vAH = $("#vAH");
  var $vAI = $("#vAI");
  var $vAJ = $("#vAJ");
  var $vAK = $("#vAK");
  var $vAL = $("#vAL");
  var $vAM = $("#vAM");


  var $prev2 = $("#prev2");
  var $next2 = $("#next2");

  function showData(row){
    $vA.text(row["a"]);
    $vB.text(row["b"]);
    $vC.text(row["c"]);
    $vD.text(row["d"]);
    $vE.text(row["e"]);
    $vF.text(row["f"]);
    $vG.text(row["g"]);
    $vH.text(row["h"]);
    $vI.text(row["i"]);
    $vJ.text(row["j"]);
    $vK.text(row["k"]);
    $vL.text(row["l"]);
    $vM.text(row["m"]);
    $vN.text(row["n"]);
    $vO.text(row["o"]);
    $vP.text(row["p"]);
    $vQ.text(row["q"]);
    $vR.text(row["r"]);
    $vS.text(row["s"]);
    $vT.text(row["t"]);
    $vU.text(row["u"]);
    $vV.text(row["v"]);
    $vW.text(row["w"]);
    $vX.text(row["x"]);
    $vY.text(row["y"]);
    $vZ.text(row["z"]);
    $vAA.text(row["aa"]);
    $vAB.text(row["ab"]);
    $vAC.text(row["ac"]);
    $vAD.text(row["ad"]);
    $vAE.text(row["ae"]);
    $vAF.text(row["af"]);
    $vAG.text(row["ag"]);
    $vAH.text(row["ah"]);
    $vAI.text(row["ai"]);
    $vAJ.text(row["aj"]);
    $vAK.text(row["ak"]);
    $vAL.text(row["al"]);
    $vAM.text(row["am"]);
  }

  function toggleLink(index){
    if(index == 0){
      $prev2.prop("disabled", true);
    }else{
      $prev2.prop("disabled", false);
    }
    if(index == data.length-1){
      $next2.prop("disabled", true);
    }else{
      $next2.prop("disabled", false);
    }
  }

  $prev2.on("click", function(e){
    index--;
    showData(data[index]);
    toggleLink(index);
  });

  $next2.on("click", function(e){
    index++;
    showData(data[index]);
    toggleLink(index);
  });

  showData(data[index]);
  toggleLink(index);

});
