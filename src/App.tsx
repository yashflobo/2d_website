import { Route, Routes, Navigate } from 'react-router-dom'
import LandingPage from './pages/Landing'
import WIPPage from './pages/WIP'

function App() {
  return (
    <Routes>
      <Route path="/" element={<WIPPage />} />
      <Route path="/preview" element={<LandingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
