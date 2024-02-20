import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <iframe
        id="chatmate-chatbot-widget-iframe"
        style="
position: fixed;
bottom: 8px;
right: 8px;
width: 80px;
height: 80px;
border: none;
z-index: 1000;"
        src="https://chatmate.fly.dev/e95f87ab-d525-4a8e-b9ca-4fe17e5c3d23/widget"
        title="chatbot-preview"
      ></iframe>
      <script src="https://chatmate.fly.dev/iframeResizer.js"></script>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello
        </a>
      </header>
    </div>
  );
}

export default App;
