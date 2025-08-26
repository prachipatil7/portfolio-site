import { useContext } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import Home from './pages/Home'
import BlogPost from './components/BlogPost/BlogPost'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <Router>
      <div id='top' className={`${themeName} app`}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-blog/:id" element={<BlogPost />} />
        </Routes>

        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  )
}

export default App
