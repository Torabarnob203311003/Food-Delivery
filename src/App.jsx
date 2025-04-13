import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Home />
      <ToastContainer position='top-right' autoClose={2000} />
    </div>
  );
}

export default App;
