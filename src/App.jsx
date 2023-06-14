import React from "react";

const App = () => {
  const onClickButton = () =>alert()
  return (
    <>
      <h1>こんにちは</h1>
      <p>エクスポートとインポートの確認</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
};

export default App;
