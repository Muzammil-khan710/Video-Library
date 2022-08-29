import { Homepage, Loginpage } from "./Pages/index";
import { Routes, Route } from  "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<Loginpage/>} />
    </Routes>
    </>
  );
}

export default App;
