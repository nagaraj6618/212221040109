
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Components/RegisterComponent/Register';
import ProductComponent from './Components/ProductComponent/ProductComponent';
// import PostComponent from './Components/PostComponent/PostComponent';
function App() {
  return (
    <div>
      {/* <Register/> */}
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/products' element={<ProductComponent/>}/>
      </Routes>
      {/* <PostComponent/> */}
    </div>
  );
}

export default App;
