import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center w-full">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
