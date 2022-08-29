import { Homepage, LoginPage, SignupPage, HistoryPage, LikedPage, WatchLaterPage, PlaylistPage } from "./Pages/index";
import { Routes, Route } from  "react-router-dom"

const App = () =>  {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/history" element={<HistoryPage/>}/>
      <Route path="/liked" element={<LikedPage/>}/>
      <Route path="/watchlater" element={<WatchLaterPage/>}/>
      <Route path="/playlist" element={<PlaylistPage/>}/>
    </Routes>
    </>
  );
}

export { App }
