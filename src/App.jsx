
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Routes from './router/router';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const routers = createBrowserRouter(Routes);
function App() {
  return (
    <>
      <RouterProvider router = {routers}/>  
       <ToastContainer position="top-right" autoClose={3000} />
      </>
  )
}

export default App
