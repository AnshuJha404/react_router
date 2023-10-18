import {NavLink} from 'react-router-dom'
import { useAuth } from './Auth'
export const Navbar=()=>{
    const auth = useAuth()
    return(
        <nav>
           <NavLink to='/'>Home</NavLink>
           <NavLink to ='/about'>About</NavLink>
           <NavLink to='/Products'>Products</NavLink>
           <NavLink to='/profile'>Profile</NavLink>
        
       {
        !auth.user &&(
            <NavLink to='/login'>
            Login
            </NavLink>
        )
       }
        </nav>
    )
}