import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Allproducts() {
    const [data, setData] = useState([]);

    function loadData() {
        axios.get("https://6588549890fa4d3dabf9c2e2.mockapi.io/products")
            .then((res) => {
                setData(res.data)
            })
            .catch((rej) => {
                console.log("unable to get data" + rej);
            })
    }
    useEffect(() => {
        loadData()
    }, [])
    return (
        <div className="text-center" style={{
            display: "flex",
            flexWrap: "wrap"
        }}>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="bread"><span><Link to={'/'}>Home</Link></span> / <span>All products</span></p>
                        </div>
                    </div>
                </div>
            </div>
            {
                data.map((eachdata) => (
                    <section key={eachdata.id} style={{
                        margin:"2%"
                    }}>
                        <div className="row justify-content-center text-center" >
                            <div className="col">
                                <div class="card" style={{
                                    width: "13rem",
                                    boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
                                    margin: "5%"
                                }}>
                                    <img class="card-img-top" src={eachdata.image} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">{eachdata.title}</h5>
                                        <p class="card-text">{eachdata.desc}</p>
                                        <p className='card-text'>{eachdata.price}</p>
                                        <a href="#" class="btn btn-primary" style={{
                                            backgroundColor: "#373063",
                                            borderColor: "#373063",
                                            color: "#fff"
                                        }}>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                ))
            }
        </div>
    )
}
