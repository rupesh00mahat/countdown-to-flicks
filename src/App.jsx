import ContainerWrapper from './components/container-wrapper'
import './style/style.css';
import Navbar from './components/navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Welcome to countdown flicks</div>
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
