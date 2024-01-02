import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./component/ErrorPage";
import Header from "./component/Header";
import Home from "./component/Home";
import Login from "./component/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="https://vikrantgaherwar.github.io/testcases/"
          element={<Login />}
        />
        <Route
          path="https://vikrantgaherwar.github.io/testcases/"
          element={<Header />}
        >
          <Route path="home" element={<Home />} />
          <Route path="about" element={<>about</>} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
