import { Route, Routes } from 'react-router-dom';
import './App.css';
import Library from './Componets/Library';
import NewBlog from './Componets/NewBlog';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Library />}/>
      <Route path='/newblog' element={<NewBlog/>} />
      </Routes>
    </>
  );
}

export default App;
