import './App.scss'

import { Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'

function App() {
  return (
    <>
      <Header />
      <main id="app">
        <Sidebar />
        <section id="content">
          <Routes>
          </Routes>
        </section>
      </main>
    </>
  )
}

export default App
