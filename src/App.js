import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Locations from './components/locations';
import About from './components/about';


function App() {
  return (
    <Router>
    <Header />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about" element={<About />} />
        </Routes>

    </Router>
  );
}
export default App;


