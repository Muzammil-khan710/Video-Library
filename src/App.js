import { Homepage, LoginPage, SignupPage } from "./Pages/index";
import { Routes, Route } from  "react-router-dom"
import { HistoryPage } from "./Pages/History";

const App = () =>  {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/history" element={<HistoryPage/>}/>
    </Routes>
    </>
  );
}

export { App }
