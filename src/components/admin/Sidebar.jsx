import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Sidebar() {
    let nevigate = useNavigate();
    return (
       
           
               
                    <ul class="list-group border">
                        <Link to={'/admindashboard'}>
                            <li class="list-group-item">  Dashboard </li>
                        </Link>
                        <Link to={'/adminproducts'}>
                            <li class="list-group-item">  Products </li>
                        </Link>
                        <Link to={'/adminaddproducts'}>
                            <li class="list-group-item">  Add Products </li>
                        </Link>
                        <Link to={'/'}>
                            <li class="list-group-item"> Orders</li>
                        </Link>

                        <li class="list-group-item">
                            <button className='btn' style={{
                                backgroundColor : "#88c8bc",
                                fontWeight :"bold"
                            }} onClick={()=>{
                                localStorage.clear();
                                nevigate('/admin')
                            }}>Logout</button>
                        </li>
                    </ul>
            
         
        

    )
}
