import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"

type ShopCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShopCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQty: (id: number) => number
    increaseCartQty: (id: number) => void
    decreaseCartQty: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const ShopCartContext = createContext({} as
    ShopCartContext)

export function useShoppingCart() {
    return useContext(ShopCartContext)
}

export function ShopCartProvider( { children }:
    ShopCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shop-value", [])

    const cartQuantity = cartItems.reduce((quantity, item) =>
    item.quantity + quantity, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQty(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQty(id: number) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id) == null) {
                return [...currentItems, {id, quantity: 1}]
            }
            else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQty(id: number) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !==id)
            }
            else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    return (
    <ShopCartContext.Provider value={{
        getItemQty,
        increaseCartQty,
        decreaseCartQty,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity
        }}>
        {children}
        <ShoppingCart isOpen={isOpen} />
    </ShopCartContext.Provider>
    )
}