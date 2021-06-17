import './App.css';
import SubscriberForm from './SubscriberForm.js'
import { useState } from "react";
import SubscriberList from "./SubscriberList";

function App() {
  const [subscribers, setSubscribers] = useState([]);

  const createSubscriber = (newSubscriber) =>
    setSubscribers((currentSubscribers) => [
      newSubscriber,
      ...currentSubscribers,
    ]);

  const deleteSubscriber = (indexToDelete) =>
    setSubscribers((currentSubscribers) =>
      currentSubscribers.filter((post, index) => index !== indexToDelete)
    );

  return (
    <>
      <SubscriberForm createSubscriber={createSubscriber} />
      <SubscriberList
        subscribers={subscribers}
        deleteSubscriber={deleteSubscriber}
      />
    </>
  );
}

export default App;
