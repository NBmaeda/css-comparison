import "./App.css";
import ButtonCSSModules from "./components/ButtonCSSModules";
import ButtonCSSinJS from "./components/ButtonCSSinJS";

function App() {
  return (
    <div className="App">
      <div className="section">
        <p className="mb-2">Tailwind CSSの場合</p>
        <button
          type="button"
          className="py-2 w-1/2 sm:w-auto
          sm:px-8 text-gray-900 bg-white
          text-sm font-medium whitespace-nowrap
          border-2 border-white rounded-md shadow-md
          focus:outline-none focus:border-indigo-700"
        >
          Button
        </button>
      </div>
      <div className="section">
        <p>CSS Modulesの場合</p>
        <ButtonCSSModules />
      </div>
      <div className="section">
        <p>CSS in JSの場合</p>
        <ButtonCSSinJS />
      </div>
    </div>
  );
}

export default App;
