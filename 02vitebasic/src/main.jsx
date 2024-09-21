import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Chai from './Chai.jsx'





// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// )
const anotherUser = "Rabindra"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'visit to google',
  anotherUser
)

  createRoot(document.getElementById('root')).render(
   reactElement
   
)
