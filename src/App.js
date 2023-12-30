
// impwhxort './App.css';
import Header from './components/Header';
import Women from './components/Women';
import Contact from './components/Contact';
import Men from './components/Men'; 
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Cart from './components/Cart';
import  './css/style.css';
import './css/css/bootstrap-reboot.css'
import Admin from './components/admin/Admin';
import Dashboard from './components/admin/Dashboard';
import Sidebar from './components/admin/Sidebar';
import Products from './components/admin/Products';
import AddProducts from './components/admin/AddProducts';
import Allproducts from './components/Allproducts';
import User from './components/user/User';

function App() {
  return (
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/men' element={<Men/>}/>
      <Route  path='/women' element={<Women/>}/>
      <Route  path='/about'element={<About/>}/>
      <Route  path='/contact' element={<Contact/>}/>
      <Route  path='/cart' element={<Cart/>}/>
      <Route  path='/admin' element={ <Admin/>}/>
      <Route path='/allproducts' element={<Allproducts/>} />
      <Route path={'/admindashboard'} element={
       <>
       <div class="row">
            <div class="col-3">
                 <Sidebar/>
             </div>
             <div class="col">
                 <Dashboard/>
             </div>
        </div>
       </>
       } 
      />
      <Route path={'/adminproducts'} element={
        <>
        <div class="row">
             <div class="col-3">
                  <Sidebar/>
              </div>
              <div class="col">
                  <Products/>
              </div>
         </div>
        </>
        } 
       />
      <Route path={'/adminaddproducts'} element={
        <>
        <div class="row">
             <div class="col-3">
                  <Sidebar/>
              </div>
              <div class="col-9">
                  <AddProducts/>
              </div>
         </div>
        </>
        } 
       />
       <Route path={'/adminaddproducts/:id'} element={
        <>
        <div class="row">
             <div class="col-3">
                  <Sidebar/>
              </div>
              <div class="col-9">
                  <AddProducts/>
              </div>
         </div>
        </>
        } 
       />
     </Routes>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
