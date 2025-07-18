import { useState } from "react"
import ProductList from "../components/ProductList"
import Cart from "../components/Cart"

export default function CartPage() {

const [ selectedProducts, setSelectedProducts ] = useState([])

function handleAddToCart(item) {
    setSelectedProducts([...selectedProducts, item])
}

    return (
        <>
            <h1>Shopping cart</h1>
            <Cart selectedProducts={selectedProducts}/>
            <ProductList onAddToCart={handleAddToCart} />
        </>
    )
}