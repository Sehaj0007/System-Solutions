import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'

const CartContext = createContext(null)
const STORAGE_KEY = 'sns_cart_v1'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (component) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === component.id)
      if (existing) {
        return prev.map((i) => (i.id === component.id ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { ...component, qty: 1 }]
    })
    toast.success(`${component.name} added to your build`)
  }

  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const updateQty = (id, qty) => {
    if (qty < 1) return removeItem(id)
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)))
  }

  const clearCart = () => setItems([])

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
    const gst = Math.round(subtotal * 0.18)
    const total = subtotal + gst
    const count = items.reduce((sum, i) => sum + i.qty, 0)
    return { subtotal, gst, total, count }
  }, [items])

  const value = { items, addItem, removeItem, updateQty, clearCart, ...totals }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
