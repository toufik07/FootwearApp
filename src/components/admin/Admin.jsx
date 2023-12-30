import React, { useEffect, useState } from 'react'
import './Admin.css'
import { Route, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import { Routes } from 'react-router-dom';


export default function Admin() {

    let uname, pass;
    let nevigate = useNavigate();

    function submitData() {
        uname = document.getElementById("txt1").value
        pass = document.getElementById("txt2").value
        if (uname == "admin" && pass == "admin") {
            localStorage.setItem(uname, pass);
            nevigate('/admindashboard')
        }
        else {
            alert("please enter correct username and password");
        }

    }

    return (
        <>
            {!localStorage.getItem("admin") &&
                < div className="content" >
                    <i className="icon-shopping-cart"></i>
                    <div className="form-group">
                        <label >Username</label>
                        <input type="text" className="form-control" id="txt1" aria-describedby="emailHelp" placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" id="txt2" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn" onClick={submitData} style={
                        {
                            backgroundColor: "rgb(136, 200, 188)",
                            fontWeight: "bold"
                        }
                    }>Submit</button>
                </div >
            }
            {
                localStorage.getItem("admin") &&
                <div class="row">
                    <div class="col-3">
                        <Sidebar />
                    </div>
                    <div class="col">
                        <Dashboard />
                    </div>
                </div>
            }
        </>
    )
}
