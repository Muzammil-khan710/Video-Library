import { Header } from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
