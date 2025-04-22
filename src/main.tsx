import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.tsx'
import McqQuiz from './pages/McqQuiz.tsx'
import NamingQuiz from './pages/NamingQuiz.tsx'

const router = createBrowserRouter([{
  path:"/",
  element: <App/>
},{
  path:"/mcq",
  element: <McqQuiz/>
},{
  path:"/naming",
  element: <NamingQuiz/>
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
