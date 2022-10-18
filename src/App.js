import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/" element={<Home />} />
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
