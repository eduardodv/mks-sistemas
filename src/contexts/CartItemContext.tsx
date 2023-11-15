import { ReactNode, createContext, useState } from 'react'

interface CartItem {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  quantity: number
}

interface CartItemContextType {
  cartItems: CartItem[]
  totalItemsInCart: number
  addToCart: (item: CartItem) => void
}

interface CartItemContextProviderProps {
  children: ReactNode
}

export const CartItemContext = createContext({} as CartItemContextType)

export function CartItemContextProvider({
  children,
}: CartItemContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  console.log(cartItems)

  const totalItemsInCart = cartItems.length

  function addToCart(item: CartItem) {
    const alreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id,
    )

    if (alreadyExistsInCart < 0) {
      setCartItems([...cartItems, item])
    } else {
      const updatedItems = [...cartItems]
      updatedItems[alreadyExistsInCart].quantity += item.quantity

      setCartItems(updatedItems)
    }
  }

  return (
    <CartItemContext.Provider
      value={{
        cartItems,
        totalItemsInCart,
        addToCart,
      }}
    >
      {children}
    </CartItemContext.Provider>
  )
}
