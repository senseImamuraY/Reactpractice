// import "./styles.css";
// import { useState } from "react";
// import { ColoredMessage } from "./components/ColoredMessage";
// import { CssModules } from "./components/CssModules";
// export const App = () => {
//   console.log("レンダリング");
//   const [num, setNum] = useState(0);

//   const onClickButton = () => {
//     // alert();
//     setNum(num + 1);
//   };

//   return (
//     <>
//       <div className="App">
//         <h1 style={{ color: "red" }}>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//       </div>
//       <div class="container">
//         <p>エリア1です。</p>
//       </div>
//       {/* <ColoredMessage color="blue" message="お元気ですか？" />
//       <ColoredMessage color="red" message="ハノイの塔" /> */}
//       <ColoredMessage color="pink">
//         <div>
//           <span>umeboshi</span>
//           <p>asaka</p>
//         </div>
//       </ColoredMessage>

//       <CssModules></CssModules>

//       <div class="container">
//         <p>エリア2です。</p>
//       </div>
//       <button onClick={onClickButton}>ボタン</button>
//       <p>{num}</p>
//     </>
//   );
// };

// import { useState, memo, useCallback } from "react";
// import { Child1 } from "./components/Child1";
// import { Child4 } from "./components/Child4";

// export const App = memo(() => {
//   console.log("Appレンダリング");

//   const [num, setNum] = useState(0);

//   const onClickButton = () => {
//     setNum(num + 1);
//   };

//   const onClickReset = useCallback(() => {
//     setNum(0);
//   }, []);

//   return (
//     <>
//       <button onClick={onClickButton}>ボタン</button>
//       {/* <button onClick={onClickReset}>リセットボタン</button> */}
//       <p>{num}</p>
//       <Child1 onClickReset={onClickReset} />
//       <Child4 />
//     </>
//   );
// });

import { useState } from "react";
import { Card } from "./components/Card";

export const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const onClickSwich = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwich}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};
