'use client'

import { useState } from 'react'
import Sidebar from '../src/components/Sidebar'
import MainContent from '../src/components/MainContent'

export default function Home() {
  const [activePage, setActivePage] = useState('about')

  return (
    <main>
      <Sidebar />
      <MainContent activePage={activePage} setActivePage={setActivePage} />
    </main>
  )
}
