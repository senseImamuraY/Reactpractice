import "./styles.css";
import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";
export const App = () => {
  console.log("レンダリング");
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    // alert();
    setNum(num + 1);
  };

  return (
    <>
      <div className="App">
        <h1 style={{ color: "red" }}>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <div class="container">
        <p>エリア1です。</p>
      </div>
      {/* <ColoredMessage color="blue" message="お元気ですか？" />
      <ColoredMessage color="red" message="ハノイの塔" /> */}
      <ColoredMessage color="pink">
        <div>
          <span>umeboshi</span>
          <p>asaka</p>
        </div>
      </ColoredMessage>

      <CssModules></CssModules>

      <div class="container">
        <p>エリア2です。</p>
      </div>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
