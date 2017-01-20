window.addEventListener("DOMContentLoaded", function () {
  // H2MDの初期化
  var instance = new H2MD();

  // canvas要素の指定
  instance.canvas("player");

  // jsonpの指定
  instance.jsonp(true);

  // H2MDリソースの読み込み。「◯◯.h2md」の部分を指定する
  instance.open('./h2md/fatman.h2md', function () {
    // openに成功したら再生
    instance.play();
  });
});
