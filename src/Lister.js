function Lister({list}){
    const coins = list.map((coin, index) => <li key={index}>{(coin==="H") ? "Heads":"Tails"}</li>)


    return (
        <div>
            <ol>
                {coins}
            </ol>
        </div>
    )

}

export default Lister;