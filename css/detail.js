var data = [
  { a: 3, b: 7.3,   c: 7.1  , d: 7 , e: 5,f: 6, g: 7, h: 8 ,i: 9, j: 10, k:11  , l: 12 , m:13, n: 14,o: 15,p: 16,q: 17, r: 18, s:19 , t: 20 , u: 21, v: 22, w: 23,x: 24,y: 25, z: 26, aa: 27  , ab: 28 , ac: 29, ad: 30, ae: 31 ,af: 32,ag: 33, ah: 34, ai: 35, aj: 36 , ak: 37, al: 28, am: 39},
  { a: 4, b: 22,  c: 33 , d: 3 , e: 5,f: 6, g: 7, h: 8 ,i: 9, j: 10, k:11  , l: 12 , m:13, n: 14,o: 15,p: 16,q: 17, r: 18, s:19 , t: 20 , u: 21, v: 22, w: 23,x: 24,y: 25, z: 26, aa: 27  , ab: 28 , ac: 29, ad: 30, ae: 31 ,af: 32,ag: 33, ah: 34, ai: 35, aj: 36 , ak: 37, al: 28, am: 39},
  { a: 5, b: 222, c: 333, d: 3 , e: 5,f: 6, g: 7, h: 8 ,i: 9, j: 10, k:11  , l: 12 , m:13, n: 14,o: 15,p: 16,q: 17, r: 18, s:19 , t: 20 , u: 21, v: 22, w: 23,x: 24,y: 25, z: 26, aa: 27  , ab: 28 , ac: 29, ad: 30, ae: 31 ,af: 32,ag: 33, ah: 34, ai: 35, aj: 36 , ak: 37, al: 28, am: 39},
  { a: 6, b: 2,   c: 3  , d: 3 , e: 5,f: 6, g: 7, h: 8 ,i: 9, j: 10, k:11  , l: 12 , m:13, n: 14,o: 15,p: 16,q: 17, r: 18, s:19 , t: 20 , u: 21, v: 22, w: 23,x: 24,y: 25, z: 26, aa: 27  , ab: 28 , ac: 29, ad: 30, ae: 31 ,af: 32,ag: 33, ah: 34, ai: 35, aj: 36 , ak: 37, al: 28, am: 39},
  { a: 7, b: 22,  c: 33 , d: 3 , e: 5,f: 6, g: 7, h: 8 ,i: 9, j: 10, k:11  , l: 12 , m:13, n: 14,o: 15,p: 16,q: 17, r: 18, s:19 , t: 20 , u: 21, v: 22, w: 23,x: 24,y: 25, z: 26, aa: 27  , ab: 28 , ac: 29, ad: 30, ae: 31 ,af: 32,ag: 33, ah: 34, ai: 35, aj: 36 , ak: 37, al: 28, am: 39},
  { a: 8, b: 222, c: 333, d: 3 , e: 5,f: 6, g: 7, h: 8 ,i: 9, j: 10, k:11  , l: 12 , m:13, n: 14,o: 15,p: 16,q: 17, r: 18, s:19 , t: 20 , u: 21, v: 22, w: 23,x: 24,y: 25, z: 26, aa: 27  , ab: 28 , ac: 29, ad: 30, ae: 31 ,af: 32,ag: 33, ah: 34, ai: 35, aj: 36 , ak: 37, al: 28, am: 39}
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
