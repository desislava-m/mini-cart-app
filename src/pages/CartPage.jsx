import { useState } from "react"
import ProductList from "../components/ProductList"
import Cart from "../components/Cart"

export default function CartPage() {

const [ selectedProducts, setSelectedProducts ] = useState([])

function handleAddToCart(item) {
  setSelectedProducts(prev => {
    const existing = prev.find(p => p.id === item.id);
    if (existing) {
      return prev.map(p =>
        p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
      );
    } else {
      return [...prev, { ...item, quantity: 1 }];
    }
  });
}


function handleRemoveItem(product) {
    setSelectedProducts(prev => {
        const itemToRemove = prev.find(p => p.id === product.id);
        if(itemToRemove && itemToRemove.quantity > 1) {
            return prev.map(p => p.id === product.id ? {...p, quantity: p.quantity - 1} : p)
        } else {
            return prev.filter((item) => item.id !== product.id)
        }
    })
}


function handleClear() {
    setSelectedProducts([])
}

    return (
        <>
            <h1>Shopping cart</h1>
            <Cart selectedProducts={selectedProducts} onRemove = {handleRemoveItem} onClear={handleClear}/>
            <ProductList onAddToCart={handleAddToCart} />
        </>
    )
}