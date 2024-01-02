import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./component/ErrorPage";
import Header from "./component/Header";
import Home from "./component/Home";
import Login from "./component/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Header />}>
          <Route path="home" element={<Login />} />
          <Route path="about" element={<>about</>} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
