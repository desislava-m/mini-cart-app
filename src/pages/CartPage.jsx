import { useState } from "react"
import ProductList from "../components/ProductList"
import Cart from "../components/Cart"

export default function CartPage() {

const [ productCount, setProductCount ] = useState(0)

function handleAddToCart() {
    setProductCount(prev => prev + 1)
}

    return (
        <>
            <h1>Shopping page</h1>
            <Cart count={productCount}/>
            <ProductList onAddCart={handleAddToCart} />
        </>
    )
}