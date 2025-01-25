import { Typography } from '@mui/material'
import './App.css'
import Sidebar from './component/Sidebar'
import HomePage from './pages/HomePage'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SprintPage from './pages/SprintPage'
import FeaturePage from './pages/FeaturePage'
import StoryPage from './pages/StoryPage'
import StarredPage from './pages/StarredPage'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace/>}></Route>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path='/sprint' element={<SprintPage/>}></Route>
          <Route path='/feature' element={<FeaturePage/>}></Route>
          <Route path='/story' element={<StoryPage/>}></Route>
          <Route path='/starred' element={<StarredPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
