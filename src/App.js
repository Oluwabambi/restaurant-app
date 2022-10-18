import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import News from './components/News';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/menu" element={<Menu />} />
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
