import { Route, Routes } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage.js'
import GamePage from '../GamePage/GamePage.js'
import Error from '../Error/Error.js'


export default function App() {
  
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/play' element={<GamePage />} />
      <Route path='/error' element={<Error />} />
      <Route path='*' element={<Error error='*'/>} />
    </Routes>
  )
}

