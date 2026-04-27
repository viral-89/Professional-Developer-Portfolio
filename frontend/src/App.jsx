import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import Home from './pages/Home';
import CaseStudy from './components/CaseStudy/CaseStudy';
import BlogPost from './components/BlogPost/BlogPost';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="app" data-theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
