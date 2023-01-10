import "./App.css";
import ButtonCSSModules from "./components/ButtonCSSModules";
import ButtonCSSinJS from "./components/ButtonCSSinJS";
import ButtonMUI from "./components/ButtonMUI";

function App() {
  return (
    <div className="App">
      <div className="section">
        <p className="mb-1">Tailwind CSSの場合</p>
        <button
          type="button"
          className="py-2 w-1/2 sm:w-auto
          sm:px-8 text-white bg-blue-600
          text-sm font-medium whitespace-nowrap
          rounded-md shadow-md
          transition-all ease-in-out duration-300
          hover:bg-blue-800 hover:shadow-lg"
        >
          Button
        </button>
      </div>
      <div className="section">
        <p className="mb-1">CSS Modulesの場合</p>
        <ButtonCSSModules />
      </div>
      <div className="section">
        <p className="mb-1">CSS in JSの場合</p>
        <ButtonCSSinJS />
      </div>
      <div className="section">
        <p className="mb-1">Material UIの場合</p>
        <ButtonMUI />
      </div>
    </div>
  );
}

export default App;
