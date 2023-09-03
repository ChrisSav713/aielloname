import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { useTheme } from './hooks/useTheme'
import Footer from './components/footer/Footer'
import './App.css'

//pages
import Contact from './pages/contact/Contact'
import Dashboard from './pages/dashboard/Dashboard'
import Home from './pages/home/Home'
import PageError from './pages/pageError/PageError'
import Trends from './pages/trends/Trends'
import Testimonials from './pages/testimonials/Testimonials'
import Resources from './pages/resources/Resources'
import Philosophy from './pages/philosophy/Philosophy'
import About from './pages/about/About'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Tools from './pages/resources/Tools'
import Guidance from './pages/resources/Guidance'
import Staff from './pages/about/Staff'
import Future from './pages/philosophy/Future'
import Location from './pages/about/Location'
import News from './pages/trends/News'
import Blog from './pages/trends/Blog'
import { useAuthContext } from './hooks/useAuthContext'

const App = () => {
  const { mode } = useTheme()
  const { authIsReady, user } = useAuthContext()

  //aiello-data.web.app
  return (
    <div className={`App ${mode}`}>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={user ? <Dashboard /> : <Navigate to='/login' replace />}
            />
            <Route
              path='/login'
              element={!user ? <Login /> : <Navigate to='/' replace />}
            />
            <Route
              path='/signup'
              element={!user ? <Signup /> : <Navigate to='/' replace />}
            />
            <Route path='/about' element={<About />} />
            <Route path='/location' element={<Location />} />
            <Route path='/staff' element={<Staff />} />
            <Route path='/philosophy' element={<Philosophy />} />
            <Route path='/future-projects' element={<Future />} />
            <Route path='/trends' element={<Trends />} />
            <Route path='/news' element={<News />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/guidance' element={<Guidance />} />
            <Route path='/tools' element={<Tools />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<PageError />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
