import './App.css'
import NavBar from './pages/NavBar.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Back from './components/back.jsx';

/* Portfolio Pages */
import Home from './pages/Home'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

/* Space project */
import Space from './projects/space/space'
import TheCrew from './projects/space/spaceTheCrew.jsx'
import SpaceDestinations from './projects/space/spaceDestinations.jsx'
import Technology from './projects/space/spaceTechnology.jsx'

/* Anytime Fitness */
import Anytime from './projects/anytime/anytime.jsx';

/* Starlink */
import Starlink from './projects/starlink/starlink.jsx';

/* Lamborghini */
import Lamborghini from './projects/lamborghini/lamborghini.jsx';

/* Banff */
import Banff from './projects/banff/banff.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><NavBar /><Home /></>} />
        <Route path="/resume" element={<><NavBar /><Resume /></>} />
        <Route path="/contact" element={<><NavBar /><Contact /></>} />
        <Route path="/projects" element={<><NavBar /><Projects /></>} />
        <Route path="/space" element={<><Back /><Space /></>} />
        <Route path="/spaceDestinations" element={<><Back /><SpaceDestinations /></>} />
        <Route path="/theCrew" element={<><Back /><TheCrew /></>} />
        <Route path="/technology" element={<><Back /><Technology /></>} />
        <Route path="/anytime" element={<><Back /><Anytime /></>} />
        <Route path="/starlink" element={<><Back /><Starlink /></>} />
        <Route path="/lamborghini" element={<><Back /><Lamborghini /></>} />
        <Route path="/banff" element={<><Back /><Banff /></>} />
      </Routes>
    </Router>
  )
}

export default App
