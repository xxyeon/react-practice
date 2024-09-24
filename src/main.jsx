import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from '@/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookDetails from '@/pages/BookDetails'
import Help from '@/pages/Help'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'books/:bookId',
    element: <BookDetails />,
  },
  {
    path: 'help',
    element: <Help />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
