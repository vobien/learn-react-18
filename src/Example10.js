import { useMemo, useState } from "react"

function Example10() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const [products, setProducts] = useState([])

    const handleAdd = () => {
        setProducts(prev => [
            ...prev,
            {
                name,
                price: +price
            }
        ])
    }

    const total = useMemo(() => {
        const result = products.reduce((result, product) => {
            console.log('re-calc every UI re-render, typing in text box')
            return result + product.price
        }, 0)

        return result
    }, [products]) 
    
    return (
        <div>
            <input placeholder="product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>

            <p>Total: {total}</p>

            <ul>
                {
                    products.map((product, id) => 
                        <li key={id}>{product.name} - {product.price}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Example10