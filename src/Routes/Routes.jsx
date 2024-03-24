import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Blog from "../Pages/Blog";
import Blogs from "../Pages/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import Home from "../Pages/Home";
import Content from "../components/Content";
import Author from "../components/Author";

export const router = createBrowserRouter([
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
        element: <Blogs />,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=20'),
      },
      {
        path: '/blog/:id',
        element: <Blog></Blog>,
          loader: ({ params }) => fetch(`https://dev.to/api/articles/${params?.id}`),
          children: [
              {
                  index: true,
                  element: <Content></Content>
              },
              {
                  path: 'author',
                  element: <Author></Author>
              }
        ]
      },
    
      {
        path: '/bookmarks',
        element:<Bookmarks></Bookmarks>,
      }
    ]
  },
 
])
