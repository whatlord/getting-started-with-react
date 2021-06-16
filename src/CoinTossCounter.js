import { useState } from "react";
import Lister from "./Lister.js"

function CoinTossCounter() {
    const [results, setResults] = useState([]);
    const [counts, setCounts] = useState({H: 0, T: 0})
    const handleClick = (value) => {
      setResults([...results, value])
        setCounts({
            ...counts,
            [value]: counts[value] + 1
        })
    };
    const handleDeleteLast = () => {
        const last = results[results.length - 1];
        const list = results.slice(0, -1);

        setResults(list);
        if (last) {
            setCounts({
            ...counts,
            [last]: counts[last] - 1,
            });
  }
    }
    console.log(results)
    console.log(counts)
    console.log(Date.now())
    return (
      <section>
        <div>
          <button onClick={() => handleClick("H")}>Heads</button>
          <button onClick={() => handleClick("T")}>Tails</button>
          <button onClick={handleDeleteLast}>Delete Last</button>
        </div>
        <div>
            <ul>
                <li>Heads: {counts["H"]}</li>
                <li>Tails: {counts["T"]}</li>
            </ul>
        </div>
        <Lister list={results}/>
      </section>
    );
  }

  export default CoinTossCounter;