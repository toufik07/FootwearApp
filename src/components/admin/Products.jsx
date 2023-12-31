import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Products() {

  const [productsdata, setProductsData] = useState([]);


  // to delete the data
  function deleteData(id){
    axios.delete("https://6588549890fa4d3dabf9c2e2.mockapi.io/products/"+id)
    .then((res) =>{
      loadData()
    })
    .catch((rej) =>{
      alert("unable to delete an item")
    })
  }

  // to fetch all data from database
  function loadData() {
    axios.get("https://6588549890fa4d3dabf9c2e2.mockapi.io/products")
      .then((res) => {
        //  setData(res.data)
        setProductsData(res.data)
      })
      .catch((rej) => {
        alert("enable to get the data")
      })
  }

  //this method execute automatically when first time the component will render
  useEffect(() => {
    loadData();
  },[])

  return (
    <div className="container p-2 mb-2 .bg-light">
      <nav aria-label="breadcrumb" style={{ fontSize: "small" }}>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to={'/admin'}>ADMIN</Link></li>
          <li class="breadcrumb-item active" aria-current="page">PRODUCTS</li>
        </ol>
      </nav>
      <table class="table bg-white">
        <thead className="border rounded-pill thead-light" style={{
               backgroundColor: "rgb(136, 200, 188)"
           }}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col-2">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">MRP</th>
            <th scope="col-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            productsdata.map((data,i) => (
              <tr key={i}>
                <th scope="row">{i+1}</th>
                <td><img src={data.image} alt="" style={{
                  width:"100px"
                }}/></td>
                <td>{data.title}</td>
                <td>{data.category}</td>
                <td>{data.price}</td>
                <td>{data.mrp}</td>
                <td>
                  <Link to={'/adminaddproducts/' + data.id}><button className='btn' style={{
               backgroundColor: "rgb(136, 200, 188)"
           }}>Edit</button></Link>
                  <button className='btn' onClick={()=>{
                    deleteData(data.id)
                  }} style={{
               backgroundColor: "rgb(136, 200, 188)"
           }}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>

  )
}
