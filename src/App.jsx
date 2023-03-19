import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/colorfulMessage";

const App = () => {
  console.log("start");
  const [num, setNum] = useState(0);
  const [showFace, setShowFace] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickShowFace = () => {
    setShowFace(!showFace);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        showFace || setShowFace(true);
      } else {
        showFace && setShowFace(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickShowFace}>on/off</button>
      <br />
      <p>{num}</p>
      {showFace && <p>( ^ω^ )</p>}
    </>
  );
};

export default App;
