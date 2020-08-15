# Fluxフロー
https://qiita.com/knhr__/items/5fec7571dab80e2dcd92
## コンポーネント
- ユーザーが触れる。見ることができる
- 商品が陳列されてる

## コンテナー
- コンポーネントを包み込む、コンポーネントをまとめてる
- お店自体
- storeと接続されたコンポーネント
- ここでイベントが発生するとActionへ

## Action
- 要求を受けて伝える。
- 変更要求を、状態管理局へ依頼。dispatch
- 店員さん

## Reducer
- 状態や変更を管理する
- Actionからの要求を受けて、何をどうするかを管理する

## Store
- 状態を保存する
- Reducerから状態変更方法を受け取る

## mapStateProps,mapDispatchToProps
- 変更された状態をコンテナーに伝える。
