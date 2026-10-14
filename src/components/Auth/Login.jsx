import { useState } from 'react'
import PropTypes from 'prop-types'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = (event) => {
    event.preventDefault()
    handleLogin(email, password)
  }

  return (
    <main className='min-h-screen flex items-center justify-center p-6'>
      <form onSubmit={submit} className='w-full max-w-sm rounded-xl border border-emerald-500 p-8'>
        <h1 className='mb-2 text-2xl font-semibold'>Employee Management</h1>
        <p className='mb-6 text-sm text-gray-300'>Sign in with a demonstration account.</p>
        <label htmlFor='email' className='block mb-2'>Email</label>
        <input id='email' type='email' autoComplete='username' required value={email}
          onChange={(event) => setEmail(event.target.value)}
          className='mb-4 w-full rounded border border-gray-400 bg-transparent px-3 py-2' />
        <label htmlFor='password' className='block mb-2'>Password</label>
        <input id='password' type='password' autoComplete='current-password' required value={password}
          onChange={(event) => setPassword(event.target.value)}
          className='mb-6 w-full rounded border border-gray-400 bg-transparent px-3 py-2' />
        <button type='submit' className='w-full rounded bg-emerald-600 px-4 py-2 font-medium'>Sign in</button>
      </form>
    </main>
  )
}

Login.propTypes = { handleLogin: PropTypes.func.isRequired }

export default Login
