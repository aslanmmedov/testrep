
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Routes from './router/router';
const routers = createBrowserRouter(Routes);
function App() {
  return (
      <RouterProvider router = {routers}/>  
  )
}

export default App
