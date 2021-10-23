# Storybook for React tutorialのメモ

[https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/)

```
$ cd taskbox
```

## 3画面

|項目                |技術     |起動      |見る画面  |
|:-------------------|:--------|:---------|:---------|
|(自動)テストランナー|Jest     |ターミナル|ターミナル|
|コンポーネント開発  |StoryBook|ターミナル|ブラウザ  |
|アプリ              |React    |ターミナル|ブラウザ  |

## CDD(コンポーネントドリブン開発)

[https://www.componentdriven.org/](https://www.componentdriven.org/)

メリット

- 品質
  - コンポーネントを独立して構築
  - 関連する状態を定義
  - 作ったUIが様々なシナリオで動作検証可能
- 耐久性
  - コンポーネントレベルでテストすることで、バグを早期&ピンポイント発見
  - 画面テストよりも手間がかからない
- 速度
  - コンポーネントライブラリやデザインシステムから既存のコンポーネントを再利用可能
    - 色々できてくると速く組み立てることが可能になる
- 効率性
  - UIを個別のコンポーネントに分解し、複数のチームメンバーで分担することで、開発・設計を並列化

## メモ1

- コンポーネント
  - src/components/XXX.js
- ストーリーファイル
  - src/components/XXX.stories.js
