function GroceryList({items}){
    const rows =  items.map(({item,quantity},index)=> (
        <tr key={index}>
            <td>{quantity}</td>
            <td>{item}</td>
        </tr>
    ))

    return (
        <table>
            <thead>
                <tr>
                    <th>Quantity</th>
                    <th>Item</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
           
    )
}

export default GroceryList;