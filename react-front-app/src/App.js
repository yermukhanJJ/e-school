import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddStudent from './students/AddStudent';
import EditStudent from './students/EditStudent';
import ViewStudent from './students/ViewStudent';
import Login from './components/Login';

function App() {
  return <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/add" element={<AddStudent/>}/>
        <Route exact path="/edit/:id" element={<EditStudent/>}/>
        <Route exact path="/view/:id" element={<ViewStudent/>}/>
      </Routes>
    </Router>
  </div>;
}

export default App;
