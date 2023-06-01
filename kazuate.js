// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;

let c = document.querySelector('p');
c.remove();

let f = document.querySelector('#e');
f.addEventListener('click', hantei);

hantei();
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  let yoso;
  let g = document.querySelector('input[name="a"]');
  yoso = g.value;
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let a = document.querySelector('span#kaisu');
  a. textContent = kaisu;
  let b = document.querySelector('span#answer');
  b.textContent = yoso;
  

  if (kaisu < 5){
    if (kotae == yoso){
      let w = document.querySelector('p#result');
      w.textContent = "正解です。おめでとう!";
    }else if(kotae > yoso){
      let w = document.querySelector('p#result');
      w.textContent = "まちがい、答えはもっと大きいですよ。";
    }else{
      let w = document.querySelector('p#result');
      w.textContent = "まちがい、 答えはもっと小さいですよ。";
    }
    kaisu++;
    }else{
      let w = document.querySelector('p#result');
      w.textContent = "答えは" + kotae + "でした。すでにゲームは終わっています。";
  }
} 

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
