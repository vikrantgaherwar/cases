import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./component/ErrorPage";
import Header from "./component/Header";
import Home from "./component/Home";
import Login from "./component/Login";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* <Route path="/" element={<Login />} /> */}
    //     <Route
    //       path="https://vikrantgaherwar.github.io/gerenare.test.cases"
    //       element={<Header />}
    //     >
    //       <Route path="home" element={<Login />} />
    //       <Route path="about" element={<>about</>} />
    //     </Route>
    //     <Route path="*" element={<ErrorPage />} />
    //   </Routes>
    // </BrowserRouter>
    <>
      <Header />
      <Login />
    </>
  );
}

export default App;
