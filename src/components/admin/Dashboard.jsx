import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div class="row container p-2 mb-2 .bg-light">
            <nav aria-label="breadcrumb" style={{ fontSize: "small" }}>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to={'/admin'}>ADMIN</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">DASHBOARD</li>
                </ol>
            </nav>

            <div className="row">
                <div className="user col">
                    <div class="card text-center" style={{
                        width: "15rem",
                        backgroundColor: "#88c8bc",
                        borderRadius:"15px"
                    }}>
                        <img class="card-img-top" src={require("./images/users.png")} alt="Card image cap" />
                        <div class="card-body">
                            <hr className='border border-dark'/>
                            <a href="#" class="btn border border-dark" style={{
                                backgroundColor: "#88c8bc",
                                fontWeight: "bold"
                            }}>Users</a>
                        </div>
                    </div>
                </div>
                <div className="product col">
                    <div class="card text-center" style={{
                        width: "15rem",
                        backgroundColor: "#88c8bc",
                        borderRadius:"15px"
                    }}>
                        <img class="card-img-top" src={require("./images/products.png")} alt="Card image cap" />
                        <div class="card-body">
                            <hr  className='border border-dark'/>
                            <a href="#" class="btn border border-dark" style={{
                                backgroundColor: "#88c8bc",
                                fontWeight: "bold"
                            }}>Products</a>
                        </div>
                    </div>
                </div>
                <div className="order col">
                    <div class="card text-center" style={{
                        width: "15rem",
                        backgroundColor: "#88c8bc",
                        borderRadius:"15px"
                    }}>
                        <img class="card-img-top" src={require("./images/icon-order-1.png")} alt="Card image cap" />
                        <div class="card-body">
                            <hr className='border border-dark'/>
                            <a href="#" class="btn border border-dark" style={{
                                backgroundColor: "#88c8bc",
                                fontWeight: "bold"
                            }}>Orders</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
