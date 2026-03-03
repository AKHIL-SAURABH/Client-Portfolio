import { Routes, Route, Navigate } from "react-router-dom"
import Landing from './pages/LandingPage'
import ProjectDetails from './pages/ProjectDetails'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/projects/" element={<Navigate to="/" replace />} />
        <Route path="/projects" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
