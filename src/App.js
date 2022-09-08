import NavBar from "./common/components/NavBar";
import  {Route,Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from "./pages/Home";
import Service from "./pages/Service";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/services" element={<Service/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/contacts" element={<Contact/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
