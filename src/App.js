import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Inputpanel from './components/Inputpanel';
import Buildstudentapi from './components/Build-student-api';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/inputpanel",
        element: <Inputpanel />
      },
      {
        path: "/build-student-api",
        element: <Buildstudentapi />
      }
    ]
  }
    ])   

function App() {
  return (
    <div className="App" style={{height: '100vh', backgroundColor:'#9e9e9e'}}>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
