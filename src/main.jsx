import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Blogs from './Pages/Blogs.jsx'
import Bookmarks from './Pages/Bookmarks.jsx'
import MainLayouts from './Layouts/MainLayouts.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        //path:'/',
        element:<Home></Home>,
      },
      {
        path: '/blogs',
        loader: ()=>fetch('https://dev.to/api/articles?per_page=20&top=20'),
        element:<Blogs></Blogs>,
      },
      {
        path: '/bookmarks',
        element:<Bookmarks></Bookmarks>,
      }
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={ router} />
      
  </>,
)
