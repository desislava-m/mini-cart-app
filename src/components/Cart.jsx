export default function Cart({selectedProducts, onRemove}) {

    let selectedItemsCount = selectedProducts.length;

    return (
        <>
            <h1>Cart</h1>
            <p>{selectedItemsCount === 1 ? `${selectedItemsCount} item` : `${selectedItemsCount} items`}</p>
            <ul>
                {selectedProducts.map((item) => 
                <li key={item.id}>{item.name} (x{item.quantity})
                <button onClick={() => onRemove(item.id)}>Remove</button>
                </li>)}
            </ul>
        </>
    )
}