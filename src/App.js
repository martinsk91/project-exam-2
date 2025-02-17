import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Locations from './components/locations';
import About from './components/about';
import VenueDetailPage from './components/venuedetail';
import Register from './components/register'; //


function App() {
  return (
    <Router>
    <Header />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about" element={<About />} />
          <Route path="/venue/:id" element={<VenueDetailPage />} /> 
        </Routes>

    </Router>
  );
}
export default App;


