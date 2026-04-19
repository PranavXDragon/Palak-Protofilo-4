import { useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

export default function App() {
  const [activePage, setActivePage] = useState('about')

  return (
    <main>
      <Sidebar />
      <MainContent activePage={activePage} setActivePage={setActivePage} />
    </main>
  )
}
