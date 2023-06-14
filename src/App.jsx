import React, { useState } from "react";
import Fruit from "./compoent/Fruit";

const App = () => {
  const [num,setNum] = useState(0)
  const [onOff,setOnOff] = useState(true)
  const cssSample = {
    color : 'red',
    fontSize: '50px'
  };
  const onClickButton = () =>{
    setNum(num+1)
  }
  const onOffButton = () =>{
      setOnOff(!onOff)
  }
  if(num > 0){
    if(num % 3 === 0){
      onOff || setOnOff(true)
    }else{
      onOff && setOnOff(false)
    }
  }

  return (
    <>
      <h1 style={cssSample}>こんにちは</h1>
      <Fruit color="orange">オレンジ</Fruit>
      <Fruit color="purple">ブドウ</Fruit>
      <Fruit color="yellow">レモン</Fruit>
      <button onClick={onClickButton}>+1ボタン</button>
      <p>{num}</p>
      <button onClick={onOffButton}>OnOffボタン</button>
      {onOff && <p>表示</p> }
    </>
  )
};

export default App;
