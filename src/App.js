import React from 'react'
import { Navbar } from './components/Navbar';
import {Routes,Route} from 'react-router-dom' ;
import { Profile } from './components/Profile';
import { Authprovider } from './components/Auth';
import Login from './components/Login' ;
import { RequireAuth } from './components/RequireAuth';
import { Home } from './components/Home';
//import { About } from './components/About';
import { Nomatch } from './components/Nomatch';
import { Products } from './components/Products';
import { Users } from './components/Users';
import OrderSummary from './components/OrderSummary';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin'; 
const LazyAbout = React.lazy(()=> import('./components/About')) ;
function App() {
  return (
    
      <Authprovider>
    <Navbar/>
    
      <Routes>
     
        <Route path ='/' element ={<Home/>}></Route>
        <Route path ='about' element={
          <React.Suspense fallback ='Loading...'>
            <LazyAbout/>
          </React.Suspense>}>

          </Route>
        <Route path ='order-summary' element={<OrderSummary/>}></Route>
        <Route path ='products' element ={<Products/>}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path ='featured' element={<FeaturedProducts/>}/>
          <Route path ='new'element={<NewProducts/>}/>
        </Route>
        <Route path ='users' element={<Users/>}>
           <Route path =':userId' element={<UserDetails/>}/>
           <Route path ='admin' element ={<Admin/>}/>
         </Route>
        <Route path='*' element={<Nomatch/>}></Route>
         
          <Route path ='profile' element={<RequireAuth><Profile/></RequireAuth>}/>
          <Route path ='login' element={<Login/>}/>
        </Routes>
      
        </Authprovider>
   
  );
}

export default App;
