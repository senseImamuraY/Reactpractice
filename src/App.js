import "./styles.css";

export default function App() {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <div class="container">
        <p>エリア1です。</p>
      </div>
      <div class="container">
        <p>エリア2です。</p>
      </div>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
}
