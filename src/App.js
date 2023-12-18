import "./App.css";
//import DemoComponent from "./DemoComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Home from "./components/Home/Home";
import ResumeListing from "./pages/ResumeListing";
//import ResumeCreate from "./pages/ResumeCreate";
import Body from "./pages/Body/Body";
import ResumeDetails from "./pages/ResumeDetails";
import ResumeEdit from "./pages/ResumeEdit";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResumeListing />}></Route>
          <Route path="/resumeProfile/create" element={<Body />}></Route>
          <Route
            path="/resumeProfile/edit/:id"
            element={<ResumeEdit />}
          ></Route>
          <Route
            path="/resumeProfile/details/:id"
            element={<ResumeDetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
