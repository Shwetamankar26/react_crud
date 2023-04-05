import { BrowserRouter, Routes,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AuthotList from './Components/AuthotList';
import AddAuthor from './Components/Services/AddAuthor';
import Navbar from './Components/Layout/Navbar';
import Update from './Components/Services/UpdateAuthor';
import UpdateAuthor from './Components/Services/UpdateAuthor';
import DeleteAuthor from './Components/Services/DeleteAuthor';




function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='Services/Add/' element={<AddAuthor/>}/>
      <Route path='Services/Show/' element={<AuthotList/>}/>
      <Route path='Services/Update/:authorid/' element={<UpdateAuthor/>}/>
      <Route path='Services/Delete/:authorid/' element={<DeleteAuthor/>}/>
    </Routes>
    </BrowserRouter>
  

    </>
  );
}

export default App;
