import './App.css';
import WelcomeBack from "./WelcomeBack.js"
import Header from "./Header.js"
import Footer from "./Footer.js"
import Holiday from "./Holiday.js"
import Quote from "./Quote";

const quote = {
  text:
    "I am great believer in luck, and I find the harder I work, the more I have of it.",
  author: "Thomas Jefferson",
};

function App() {
  return (
    <>
      <WelcomeBack adj = "fuuny" name="Joe" />
      <Quote quote={quote} />
    </>
  )
}

export default App;
