import React from "react";
import Fruit from "./compoent/Fruit";

const App = () => {
  const onClickButton = () =>alert()
  const cssSample = {
    color : 'red',
    fontSize: '50px'
  };
  return (
    <>
      <h1 style={cssSample}>こんにちは</h1>
      <Fruit color="orange">オレンジ</Fruit>
      <Fruit color="purple">ブドウ</Fruit>
      <Fruit color="yellow">レモン</Fruit>
{/*
      <p >オレンジ</p>
      <p>ブドウ</p>
      <p>レモン</p> */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
};

export default App;
