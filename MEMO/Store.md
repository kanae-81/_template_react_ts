# Store
stateの保存

## 役割

## 書き方
- 必要なモジュールのimport
    - createStore
    - combineReducers
    - 作成したreducers

### combineReducers()とは
- 分割したReducerをまとめる
- stateのカテゴリ毎
- オブジェクトをreturnする（staeのデーター構造）

### Providerとは（react-redux）
- propsをstoreに渡す
    - ラップしたコンポーネントにstoreの情報を渡す
- Reactコンポーネント内で、react-reduxのconnect関数を使えるようにする
    - ReactとReduxを接続してstoreを変更できるように


