import './App.css';
import react, { useState } from   "react"

function App() {
  // return (
  //   <section>
  //     <h1>Click the button to subscribe!</h1>
  //     <button onClick={() => console.log("Subscribed!")}>Subcribe</button>
  //   </section>
  // )



  // const handleClick = () =>{
  //   console.log("Subscribing!")
  //   alert("You subscribed!")
  // }
  // return (
  //   <section>
  //     <h1>Click the button to subscribe!</h1>
  //     <button onClick={handleClick}>Subcribe</button>
  //   </section>
  // )



  //  const handleClick = (e) =>{
  //    console.log(e.target)
  //  }
  //  return (
  //    <section>
  //      <h1>Click the button to subscribe!</h1>
  //      <button onClick={handleClick}>Subcribe</button>
  //    </section>
  //  )



  const handleSubscribe = (e) => console.log("User has been subscribed..." + subscribed);
  const [subscribed,setSubscribed] = useState(false)
  console.log("Subscribed status: ", subscribed);
  return (
    <section>
      <p>Please click to subscribe to my updates!</p>
      <button onClick={() => setSubscribed(!subscribed)}>{subscribed ? "Subscribed":"Subscribe"}</button>
    </section>
  );
}

export default App;
