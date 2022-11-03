import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Guard from './components/Guard';
import Machine from './components/machine/Machine';
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin';
import Worker from './components/worker/Worker';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminLogin />} />
        <Route element={<Guard />}>
          <Route path='/home' element={<Home/>} />
          <Route path='/maschinen' element={<Machine />} />
          <Route path='/mitarbeiter' element={<Worker />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
