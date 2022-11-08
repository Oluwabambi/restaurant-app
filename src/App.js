import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import News from './components/News';
import Menu from './components/Menu';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/our-story" element={<Story />} />
      </Routes>
      <Footer />
    </Router>
    // <>
    //   <Header />
    //   <Home />
    // </>
  );
}

export default App;
