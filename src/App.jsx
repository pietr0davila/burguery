import './style.css'

import Header from './Components/Header.jsx'
import Main from './Components/Main.jsx'
import Products from './Components/Products.jsx'
import Contacts from './Components/Contact.jsx'
import Whatsapp from './Components/Whatsapp.jsx'
import Footer from './Components/Footer.jsx'

function App() {

  return (
    <>
      <Header />
      <Main />
      <Products />
      <Contacts />
      <Whatsapp />
      <Footer burguerShop="{Nome da hamburgueria}"/>
    </>
  )
}

export default App
