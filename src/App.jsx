import ContainerWrapper from './components/popular-movies'
import './style/style.css';
import Navbar from './components/navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home';
import MovieContextProvider from './context/movie-context';
import PopularMoviesWrapper from './components/popular-movies';
import UpcomingMovies from './components/upcoming-movies';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children:[
      {
        path: '/',
        element: <PopularMoviesWrapper/>
      },
      {
        path: '/upcoming',
        element: <UpcomingMovies/>
      },
    ],
  },
  
  
])

function App() {


  return (
    <>
   <MovieContextProvider>
   <RouterProvider router={router}/>
   </MovieContextProvider>
    </>
  )
}

export default App
