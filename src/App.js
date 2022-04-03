
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Grandpa from './components/Grandpa/Grandpa.jsx';
import Header from './components/Header/Header.jsx';
import Help from './components/Help/Help.jsx';
import Home from './components/Home/Home.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Order from './components/Order/Order.jsx';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/about' element={<About></About>}></Route>
         <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
         <Route path='/help' element={<Help></Help>}></Route>
         <Route path='*' element={<NotFound></NotFound>}></Route>
       </Routes>
    </div>
  );
}

export default App;
