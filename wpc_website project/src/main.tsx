import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.tsx'
import McqQuiz from './pages/McqQuiz.tsx'

const router = createBrowserRouter([{
  path:"/",
  element: <App/>
},{
  path:"/mcq",
  element: <McqQuiz/>
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
