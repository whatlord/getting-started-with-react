import { useState } from 'react';
import './App.css';

function App() {
  const [subscribed, setSubscribed] = useState(false);
  const [subscribedCount, setSubscribedCount] = useState(0);
  const [alerts, setAlerts] = useState(false);

  return (
    <section>
      <p>Please click to subscribe to my updates!</p>
      <p>Subscriber Count: {subscribedCount}</p>
      <button
        onClick={() => {
          setSubscribed(!subscribed);
          //setSubscribedCount(subscribedCount + 1); //even with these two lines, the subscription count would only
          //setSubscribedCount(subscribedCount + 1); //update by one because useState is async
          setSubscribedCount((currentCount) => subscribed ? currentCount - 1 : currentCount + 1);
          setSubscribedCount((currentCount) => subscribed ? currentCount - 1 : currentCount + 1);
          if (!alerts) setAlerts(true);
        }}
      >
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
      <button onClick={() => setAlerts(!alerts)}>
        {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
      </button>
    </section>
  );
}

export default App;
