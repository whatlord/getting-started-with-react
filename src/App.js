import './App.css';
import WelcomeBack from "./WelcomeBack.js"
import Header from "./Header.js"
import Footer from "./Footer.js"
import Holiday from "./Holiday.js"

function App() {
  return (
    <>
      <Header />
      <Holiday name="Birfday" month="September" day='3' />
      <WelcomeBack adj = "fuuny" name="Joe" />
      <WelcomeBack adj = "cool" name="Katie" />
      <WelcomeBack />
      <Footer />
    </>
  )
}

export default App;
