import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="h-16 bg-amber-600 flex items-center justify-between px-4 fixed bottom-0 left-0 w-full z-40 text-white">
      <div className="text-sm">&copy; {new Date().getFullYear()} Pre-Order Dining</div>
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/restaurant" className="hover:underline">Restaurant</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </footer>
  )
}

export default Footer