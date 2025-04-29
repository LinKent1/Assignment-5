import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="logo">Wetflix</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  )
}

export default Header
