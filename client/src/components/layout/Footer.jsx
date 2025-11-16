import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="h-16 bg-slate-900 flex items-center justify-between px-4 fixed bottom-0 left-0 w-full z-40 text-slate-100">
      <div className="text-sm">&copy; {new Date().getFullYear()} Pre-Order Dining</div>
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:text-amber-300 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-amber-300 transition-colors">About</Link>
        <Link to="/restaurant" className="hover:text-amber-300 transition-colors">Restaurant</Link>
        <Link to="/login" className="hover:text-amber-300 transition-colors">Login</Link>
      </div>
    </footer>
  )
}

export default Footer