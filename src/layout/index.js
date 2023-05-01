import React from 'react'
import './layout.css'
import { Navbar, Sidebar, Chat } from '../components'



function Layout({ children }) {


  return (
    <main className={`grid-container p-[3%] relative overflow-hidden`}>
      <section className='grid-item-1'><Sidebar /></section>
      <section className='grid-item-2' ><Navbar /></section>
      <section className='grid-item-3'>{children}</section>
      <Chat />
    </main>
  )
}

export default Layout