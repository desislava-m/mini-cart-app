export default function Cart({selectedProducts}) {

    return (
        <>
            <h1>Cart</h1>
            <p>{selectedProducts.length} items</p>
            <ul>{selectedProducts.map((item, index) => <li key={item.id + "-" + index}>{item.name}</li>)}</ul>
        </>
    )
}