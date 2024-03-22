import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/addUser" element={<AddUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
