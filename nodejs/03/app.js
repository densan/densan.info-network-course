/**
 * Web Scraping  
 * 
 */

var request = require("request"),
    cheerio = require("cheerio"),
    url = require("url");

process.stdout.write("認証情報を入力 > ");
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

function main(auth) {
  var proxy = null;

  if (auth) {
    proxy = url.format({
      protocol: "http",
      host: "proxy5.hit.ac.jp:8080",
      auth: auth
    });
  }

  request.get("https://github.com/ww24/densan.info-network-course", {
    proxy: proxy
  }, function (err, res, body) {
    if (err)
      console.error(err);

    var $ = cheerio.load(body);
    var pageTitle = $("title").text();

    console.log(pageTitle);
  });
}
