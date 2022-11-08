import { RouterProvider } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import "./App.css";
import { router } from "./routes/Router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
