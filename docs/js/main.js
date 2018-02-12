  "use strict";

  var tiles = [];

  // 初期化関数
  (function (){
    var table = document.getElementById("table");

    for(var i = 0; i < 4; i++){
      var tr = document.createElement("tr");
      for(var j = 0; j < 4; j++){
        var td = document.createElement("td");
        var index = i * 4 + j;
        // td.className = "tile";
        td.className = index == 0 ? "tile0" : "tile";
        td.index = index;
        td.value = index;
        td.textContent = index ;
        td.onclick = click;
        tr.appendChild(td);
        tiles.push(td);
      }
      table.appendChild(tr);
    }

    for(var i = 0; i < 1000; i++){
      click({target: {index: Math.floor(Math.random() * 16)}});
    }

  })();


  // クリックされたときの関数
  function click(e){
    var i = e.target.index;

    if(i - 4 >= 0 && tiles[i - 4].value == 0){
      swap(i, i - 4);
    }
    if(i + 4 < 16 && tiles[i + 4].value == 0){
      swap(i, i + 4);
    }
    if(i % 4 != 0 && tiles[i - 1].value == 0){
      swap(i, i - 1);
    }
    if(i % 4 != 3 && tiles[i + 1].value == 0){
      swap(i, i + 1);
    }

    check();
  }

  function swap(i, j){
    var tmp = tiles[i].value;
    var tmp1 = tiles[i].className;
    tiles[i].value = tiles[j].value;
    tiles[i].textContent = tiles[j].textContent;
    tiles[i].className = tiles[j].className;
    tiles[j].className = tmp1;
    tiles[j].value = tmp;
    tiles[j].textContent = tmp;
  }

  // クリア判定
  function check(){
    var k = 0;

    for(var i = 0; i < 15; i++){
      if (tiles[i].value === i){
        k++;
      }
    }
    if (k === 15){
        document.getElementById("clear").textContent = "clear";
    } else{
        document.getElementById("clear").textContent = " ";
    }
  }
