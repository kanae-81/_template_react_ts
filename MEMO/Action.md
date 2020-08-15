# Actionsについて
要求を受けて変更を依頼

## 役割
- アプリからStoreへデータを送るためのpayloadを渡す役割
- payload:情報が集まったデータの塊。
- 純粋に、受け渡すためのデータだけを記述する
- どのStateを変更するかはReducerの役割
- データの仲介役

## 書き方
- Action typeを定義してexport
- typeとpayloadを記述
- <b>プレーンなObjectを返す。これ絶対</b>
- どんな依頼の種類があるのかをReducerに伝えるための大文字export

