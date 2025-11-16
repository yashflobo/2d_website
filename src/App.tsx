import { Route, Routes, Navigate } from 'react-router-dom'
import LandingPage from './pages/Landing'
import WIPPage from './pages/WIP'
import Registration from './pages/Registration'
import ThankYou from './pages/ThankYou'

function App() {
  return (
    <Routes>
      <Route path="/" element={<WIPPage />} />
      <Route path="/preview" element={<LandingPage />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
