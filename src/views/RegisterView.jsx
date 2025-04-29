import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function RegisterView() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match!')
      return
    }
    const users = JSON.parse(localStorage.getItem('users')) || []
    if (users.find(u => u.email === form.email)) {
      setError('Email already registered')
      return
    }
    const newUser = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password
    }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    setError('')
    alert('Registration successful! Please login.')
    navigate('/login')
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      <input type="password" name="confirmPassword" placeholder="Re-enter Password" value={form.confirmPassword} onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  )
}

export default RegisterView
