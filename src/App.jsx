import Router from "./routes/Router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div >
  
      <Router />
      <ToastContainer position="top-center"  autoClose={2000} />
    </div>
  );
}

export default App;
