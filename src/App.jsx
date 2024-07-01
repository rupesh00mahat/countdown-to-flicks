import ContainerWrapper from './components/container-wrapper'
import './style/style.css';
import Navbar from './components/navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }
])

function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
