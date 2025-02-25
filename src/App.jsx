import './style/style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home';
import MovieContextProvider from './context/movie-context';
import PopularMoviesWrapper from './components/popular-movies';
import UpcomingMovies from './components/upcoming-movies';
import HomePage from './pages/HomePage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children:[
      {
        path: '/',
        element: <HomePage/>
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
