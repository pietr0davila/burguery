import './style.css'

import Header from './Components/Header.jsx'
import Main from './Components/Main.jsx'
import Products from './Components/Products.jsx'
import Apresentation from './Components/Apresentation.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'

function App() {

  return (
    <>
      <Header />
      <Main />
      <Products />
      <Apresentation />
      <Contact />
      <Footer burguerShop="{Nome da hamburgueria}"/>
    </>
  )
}

export default App
