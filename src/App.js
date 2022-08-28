import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div>
      <Header/>
      <div className="flex">
      <Sidebar/>
      <Main/>
      </div>
    </div>
  );
}

export default App;
