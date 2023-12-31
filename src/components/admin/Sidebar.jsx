import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Sidebar() {
    let nevigate = useNavigate();
    return (





        <div class="list-group">
            <ul class="list-group border">
                <Link to={'/admindashboard'}>
                    <li class="list-group-item list-group-item-action">  Dashboard </li>
                </Link>
                <Link to={'/adminproducts'}>
                    <li class="list-group-item list-group-item-action">  Products </li>
                </Link>
                <Link to={'/adminaddproducts'}>
                    <li class="list-group-item list-group-item-action">  Add Products </li>
                </Link>
                <Link to={'/'}>
                    <li class="list-group-item list-group-item-action"> Orders</li>
                </Link>

                <li class="list-group-item">
                    <button className='btn' style={{
                        backgroundColor: "#88c8bc",
                        fontWeight: "bold"
                    }} onClick={() => {
                        localStorage.clear();
                        nevigate('/admin')
                    }}>Logout</button>
                </li>
            </ul>
        </div>




    )
}
