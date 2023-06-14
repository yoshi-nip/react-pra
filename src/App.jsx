import React from "react";

const App = () => {
  const onClickButton = () =>alert()
  const cssSample = {
    color : 'red',
    fontSize: '50px'
  };
  return (
    <>
      <h1 style={cssSample}>こんにちは</h1>
      <p>スタイルの当て方について確認</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
};

export default App;
