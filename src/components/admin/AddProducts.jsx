import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function AddProducts() {

  const[title,setTitle] = useState('');
  const[category,setCat] = useState('');
  const[price,setPrice] = useState('');
  const[mrp,setMrp] = useState('');
  const[image,setImage] = useState('');
  const[desc,setDesc] = useState('');

  const data = {
    title,
    category,
    price,
    mrp,
    image,
    desc
  }

  let {id} = useParams();

  let nevigate = useNavigate();
  
  function handleSubmit(e){
    e.preventDefault();
    if(id === undefined){
      // code to be add the data to the database
      //to hold a page 
      axios.post("https://6588549890fa4d3dabf9c2e2.mockapi.io/products/",data)
      .then((res) =>{
        alert("data added successfully")
        setTitle("")
        setCat("")
        setDesc("")
        setImage("")
        setMrp("")
        setPrice("")
      })
      .catch((res) =>{
        alert("unable to add the data")
      })
    }
    else{
      // code to be change the perticular data
      axios.put("https://6588549890fa4d3dabf9c2e2.mockapi.io/products/"+id,data)
      .then((res) =>{
        alert("data updated successfully...")
        nevigate('/adminproducts')
      })
      .catch((rej) => {
        alert("unable to update the data")
      })
    }
  }
 
  useEffect(() =>{

    if(id !== undefined){
       axios.get("https://6588549890fa4d3dabf9c2e2.mockapi.io/products/"+ id)
       .then((res) => {
        setTitle(res.data.title)
        setCat(res.data.category)
        setDesc(res.data.desc)
        setImage(res.data.image)
        setMrp(res.data.mrp)
        setPrice(res.data.price)
       })
    }
  },[])
  
  return (
    <div className='container  p-2 mb-2 .bg-light'>

      <nav aria-label="breadcrumb" style={{ fontSize:"small"}}>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to={'/admin'}>ADMIN</Link></li>
          <li class="breadcrumb-item active" aria-current="page">{ (id)? "EDIT " : "ADD "}PRODUCTS</li>
        </ol>
      </nav>
      <form class="row g-3">
        <div class="col-md-6">
          <label class="form-label">Title</label>
          <input type="text" class="form-control border  border-dark" id="inputEmail4" value={title} onChange={
            (e) =>{
             setTitle(e.target.value)
            }
          }/>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Category</label>
          <select id="inputState" class="form-select border  border-dark" value={category} onChange={
            (e) =>{
             setCat(e.target.value)
            }
          }>
            <option selected>Choose...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="inputAddress" class="form-label">Price</label>
          <input type="number" class="form-control border  border-dark" id="inputAddress" value={price} onChange={
            (e) =>{
             setPrice(e.target.value)
            }
          }/>
        </div>
        <div class="col-md-4">
          <label for="inputAddress2" class="form-label">MRP</label>
          <input type="number" class="form-control border  border-dark" id="inputAddress2" value={mrp} onChange={
            (e) =>{
             setMrp(e.target.value)
            }
          }/>
        </div>

        <div class="col-md-4">
          <label for="inputState" class="form-label">Image</label>
          <input type="url" name="" id="inputCity" class="form-control border  border-dark" value={image} onChange={
            (e) =>{
             setImage(e.target.value)
            }
          }/>
        </div>
        <div class="col-md-8">
          <label for="inputCity" class="form-label">Description</label>
          <textarea name="" id="" cols="30" rows="5" class="form-control border  border-dark" value={desc}
          onChange={(e)=>{
            setDesc(e.target.value)
          }}
          ></textarea>
        </div>
        <div class="col-md-12">
          <button type="submit" class="btn" style={
            {
              backgroundColor: "rgb(136, 200, 188)",
              fontWeight: "bold"
            }
          }  onClick={
            handleSubmit
          }>Submit</button>
        </div>
      </form>
    </div>
  )
}
