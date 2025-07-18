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
        {productObjects.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => onAddToCart(item)} >Add to Cart</button>
          </li>
        ))}
      </ul>
    
    </>
    )
}