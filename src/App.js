import "./App.css";
import Multiplier from "./components/Multiplier";
import Count from "./components/Count";
import Divider from "./components/Divider";
import Subtracter from "./components/Subtracter";
import Increment from "./components/Increament";
import Decrement from "./components/Decrement";

function App() {
  return (
    <div className="App">
      <Multiplier />
      <Divider />
      <Subtracter />
      <Count />
      <Increment />
      <Decrement />
    </div>
  );
}

export default App;
