import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import { Student } from "./components/Student";

function App() {
  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <Student></Student>
    </div>
  );
}

export default App;
