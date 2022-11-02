import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Guard from './components/Guard';
import AdminLogin from './components/pages/AdminLogin';
import Home from './components/pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminLogin />} />
        <Route element={<Guard />}>
        <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
