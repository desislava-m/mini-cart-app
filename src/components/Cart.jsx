export default function Cart({selectedProducts, onRemove, onClear}) {

    let selectedItemsCount = selectedProducts.length;

    return (
        <>
            <h1>Cart</h1>
            <p>{selectedItemsCount === 1 ? `${selectedItemsCount} item` : `${selectedItemsCount} items`}</p>
            <ul>
                {selectedProducts.map((item) => 
                <li key={item.id}>{item.name} (x{item.quantity})
                <button onClick={() => onRemove(item)}>Remove</button>
                </li>)}
            </ul>
            <button onClick={onClear}  disabled={selectedProducts.length === 0}>Clear</button>
        </>
    )
}