import { useState } from 'react'

function RegisterView() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    // Add your register logic here
    alert('Register not implemented')
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
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
