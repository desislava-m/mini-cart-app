export default function ProductList({ onAddToCart }) {

    const productObjects = [
          { id: 1, name: "T-shirt" },
          { id: 2, name: "Jeans" },
          { id: 3, name: "Sneakers" },
    ];


    return (
    <>
       <h1>Products</h1>
       <ul>
        {productObjects.map((product) => (
          <li key={product.id}>
            {product.name}{" "}
            <button onClick={() => onAddToCart(product)} >Add to Cart</button>
          </li>
        ))}
      </ul>
    
    </>
    )
}