import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import HomeView from './views/HomeView'
import MoviesView from './views/MoviesView'
import GenreView from './views/GenreView'
import DetailView from './views/DetailView'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import ErrorView from './views/ErrorView'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorView />,
    children: [
      { index: true, element: <HomeView /> },
      { path: "login", element: <LoginView /> },
      { path: "register", element: <RegisterView /> },
      { path: "movies", element: <MoviesView /> },
      { path: "movies/genre/:genreId", element: <GenreView /> },
      { path: "movies/details/:movieId", element: <DetailView /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
