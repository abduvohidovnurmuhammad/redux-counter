import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import { icrement,decrement } from './redux/redusers/counter-slice';
import { useDispatch } from 'react-redux';
function App() {
const dispatch = useDispatch()
const add = ()=>{


  dispatch(icrement(10))
}
const remove =()=>{
  dispatch(decrement())
}


  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
      <button  onClick={remove}>-</button>
      <button onClick={add}>+</button>
    </div>
  );
}

export default App;
