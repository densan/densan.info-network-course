Node.js 03
==========

概要
---
後期第 3 回目の講座で使用したコード。

* password.js  -> 実行時にパスワードの入力を求めるサンプルコード 
* app.js       -> Web Scraping のサンプルコード
* package.json -> モジュールの依存関係を記述できるファイル

動作方法
-------
`app.js` を動作させるためには request, cheerio, jschardet, iconv が必要です。  
それぞれ `npm` コマンドで入れるのは大変なので、 `package.json` を追加しておきました。活用して下さい。

具体的には...

1. `package.json` を作業ディレクトリにダウンロード
1. そのディレクトリで `npm install` を実行
1. すると、必要なモジュールが全てインストールされる

非常に便利です。

参考 URL
--------
* [request](https://github.com/mikeal/request)
* [cheerio](http://matthewmueller.github.io/cheerio/)
