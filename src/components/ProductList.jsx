export default function ProductList({ onAddCart }) {

    const products = [
          { id: 1, name: "T-shirt" },
          { id: 2, name: "Jeans" },
          { id: 3, name: "Sneakers" },
    ];


    return (
    <>
       <h1>Products</h1>
       <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={onAddCart} >Add to Cart</button>
          </li>
        ))}
      </ul>
    
    </>
    )
}