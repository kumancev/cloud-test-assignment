import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Form from './sections/Form/Form.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/create',
    element: <Form />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
