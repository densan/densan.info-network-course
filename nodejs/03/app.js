/**
 * Web Scraping  
 * 
 */

var request = require("request"),
    cheerio = require("cheerio"),
    Iconv = require("iconv").Iconv,
    jschardet = require("jschardet"),
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

  request.get("http://www.hit.ac.jp/gakusei", {
    proxy: proxy,
    encoding: null
  }, function (err, res, body) {
    if (err)
      console.error(err);

    var encoding = jschardet.detect(body).encoding;
    if (encoding !== "ascii" && encoding !== "utf-8") {
      var iconv = new Iconv(encoding, "UTF-8//TRANSLIT//IGNORE");
      body = iconv.convert(body);
    }

    var $ = cheerio.load(body);
    var pageTitle = $("title").text();

    console.log(pageTitle);
  });
}
