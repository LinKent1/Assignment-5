import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Header() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    setUser(loggedInUser)
  }, [])

  const logout = () => {
    localStorage.removeItem('loggedInUser')
    setUser(null)
    navigate('/')
  }

  return (
    <header className="header">
      <div className="logo">Wetflix</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        {user ? (
          <>
            <span>Welcome, {user.firstName}</span>
            <button onClick={logout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
