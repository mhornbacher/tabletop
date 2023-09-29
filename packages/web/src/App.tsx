import './App.scss'

import { Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Header />
      <main id="app">
        <Sidebar />
        <section id="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </section>
      </main>
    </>
  )
}

export default App
