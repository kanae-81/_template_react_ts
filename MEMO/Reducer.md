# Reducersについて
stateの変更を管理する

## 役割
- Actionsからデータを受け取り、Storeのstateをどう変更するのかを決める
- 現在のStoreのstatewを常に知っている。在庫管理的な。
- Store内のstateの管理人

## 書き方
- initialState
 - アプリに必要なstateを全て記述
- Actionsのimport
- state(現在のstateの状態),actionの２つを引数に指定
- switch文で記述, Actionのタイプに応じてそれぞれの変更方法を記述
- reducerが返す値は、そのままstoreに反映されるので、returnされていないstateがある場合、storeから消え去る！！！！


## 便利なスプレッド構文
- 配列やオブジェクトの要素を展開する
```
const a = {id:1, user:'Taro'}
console.log({...a}) // {id:1, user:'Taro'}

const b = {text: 'Hello'}
console.log({...a, ...b}) // {id:1, user:'Taro', text:'Hello'}
```
