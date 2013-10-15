Node.js 01
==========

概要
---
後期第 1 回目の講座で使用したコード。

* server.js   -> シンプルな Web Server
* realtime.js -> チャットのサーバサイド (Node.js で動く方)
* index.js    -> チャットのクライアントサイド (ブラウザで動く方)


実行方法
-------
### Web Server
`node server.js`

### チャット
一度だけ `npm install socket.io` を実行して Socket.IO モジュールをインストールする。

`node realtime.js` でチャットのサーバが起動する

参考 URL
----
* [Node.js 日本ユーザグループ](http://nodejs.jp/)
* [Node.js v0.10.20 マニュアル & ドキュメンテーション](http://nodejs.jp/nodejs.org_ja/docs/v0.10/api/)
