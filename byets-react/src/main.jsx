import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />,
)
