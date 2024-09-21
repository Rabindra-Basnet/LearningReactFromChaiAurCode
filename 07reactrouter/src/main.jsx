import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import { Home, About, Contact, Github, User, GithubLoaderInfo } from "./components"
import './index.css'

// different method  
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [

//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element:<About />
//       },
//       {
//         path: "contact",
//         element:<Contact />,
//       }
//     ]

//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route
        path='github'
        loader={GithubLoaderInfo}
        element={<Github />} />
      <Route
        path='user/:userId'
        
        element={<User />}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
