import { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

// -----------------------------------------------------------------------
// NOTE FOR THE TEAM AT SYSTEM & SOLUTIONS
// -----------------------------------------------------------------------
// This is a LOCAL, browser-only auth scaffold (accounts live in
// localStorage on the visitor's own device). It's here so the Login/Signup
// flow is fully clickable end-to-end today. For a real launch, swap this
// out for a real backend — Firebase Authentication is the fastest plug-in
// and keeps this same function signatures (signup/login/logout), so the
// rest of the app won't need to change. See README.md.
// -----------------------------------------------------------------------

const AuthContext = createContext(null)
const USERS_KEY = 'sns_users_v1'
const SESSION_KEY = 'sns_session_v1'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY)
      return raw ? JSON.parse(raw) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user))
    else localStorage.removeItem(SESSION_KEY)
  }, [user])

  const getUsers = () => {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY)) || []
    } catch {
      return []
    }
  }

  const signup = ({ name, email, password }) => {
    const users = getUsers()
    if (users.some((u) => u.email === email)) {
      toast.error('An account with this email already exists')
      return false
    }
    const newUser = { name, email, password }
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]))
    setUser({ name, email })
    toast.success(`Welcome, ${name}!`)
    return true
  }

  const login = ({ email, password }) => {
    const users = getUsers()
    const match = users.find((u) => u.email === email && u.password === password)
    if (!match) {
      toast.error('Incorrect email or password')
      return false
    }
    setUser({ name: match.name, email: match.email })
    toast.success(`Welcome back, ${match.name}!`)
    return true
  }

  const logout = () => {
    setUser(null)
    toast.success('Signed out')
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
