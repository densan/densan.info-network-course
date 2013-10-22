/**
 * 実行時にパスワードを入力させるサンプルコード
 *
 */

process.stdout.write("パスワードを入力して下さい > ");
process.stdin.resume();
process.stdin.setEncoding("utf8");

var data = "";
process.stdin.on("data", function (chunk) {
  data += chunk;

  var index = chunk.indexOf("\n");
  if (~ index) {
    process.stdin.pause();
    data = data.slice(0, index).split("\r").join("");

    main(data);
  }
});

function main(data) {
  // この中にパスワードを使ったコードを書く
  console.log("入力されたパスワードは " + data + " です。");
}
