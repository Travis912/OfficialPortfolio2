import './App.css'
import NavBar from './pages/NavBar.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Back from './components/back.jsx';

/* Portfolio Pages */
import Home from './pages/Home'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

/* Other Projects */
import Starlink from './projects/starlink/starlink.jsx';
import Lamborghini from './projects/lamborghini/lamborghini.jsx';
import Banff from './projects/banff/banff.jsx';
import ConnectFour from './projects/connectFour/connectFour.jsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<><NavBar /><Home /></>} />
        <Route path="/resume" element={<><NavBar /><Resume /></>} />
        <Route path="/contact" element={<><NavBar /><Contact /></>} />
        <Route path="/projects" element={<><NavBar /><Projects /></>} />
        <Route path="/starlink" element={<><Back /><Starlink /></>} />
        <Route path="/lamborghini" element={<><Back /><Lamborghini /></>} />
        <Route path="/banff" element={<><Back /><Banff /></>} />
        <Route path="/connectFour" element={<><Back /><ConnectFour /></>} />
      </Routes>
    </HashRouter>
  )
}

export default App
