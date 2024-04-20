import {Route, Routes} from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage.js'


export default function App() {
  
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>
  )
}

