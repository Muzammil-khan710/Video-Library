import { Homepage, LoginPage, SignupPage } from "./Pages/index";
import { Routes, Route } from  "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>}/>
    </Routes>
    </>
  );
}

export default App;
