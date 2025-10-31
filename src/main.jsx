// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// // import App from './App.jsx'
// import Nav_cls from './navbar.jsx'
// import Image from './content.jsx'
// import Products_sec from './product.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Nav_cls/>
//     <Image/>
//     <Products_sec/>
//   </StrictMode>,
// )
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav_cls from './navbar.jsx'
import Image from './content.jsx'
import Product_cls from './prod.jsx'
import Footer_s from './cards.jsx'
import Foot_cls from './foot.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav_cls />
    <Image />
   <Product_cls/>
   <Footer_s/>
   <Foot_cls/>
  </StrictMode>
)

