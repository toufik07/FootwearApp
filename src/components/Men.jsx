import React from 'react'
import { Link } from 'react-router-dom'

export default function Men() {
  return (
    <div id='page'>
      <div class="breadcrumbs">
        <div class="container">
          <div class="row">
            <div class="col">
              <p class="bread"><span><Link to={'/'}>Home</Link></span> / <span>Men</span></p>
            </div>
          </div>
        </div>
      </div>

      <div class="breadcrumbs-two">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="breadcrumbs-img" style={{ backgroundImage: "url('../images/cover-img-1.jpg')" }}>
                <h2>Men's</h2>
              </div>
              <div class="menu text-center">
                <p><a href="#">New Arrivals</a> <a href="#">Best Sellers</a> <a href="#">Extended Widths</a> <a href="#">Sale</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="colorlib-featured">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 text-center">
              <div class="featured">
                <div class="featured-img featured-img-2" style={{backgroundImage:"url('../images/men.jpg')"}}>
                  <h2>Casuals</h2>
                  <p><a href="#" class="btn btn-primary btn-lg">Shop now</a></p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 text-center">
              <div class="featured">
                <div class="featured-img featured-img-2" style={{backgroundImage:"url('../images/women.jpg')"}}>
                  <h2>Dress</h2>
                  <p><a href="#" class="btn btn-primary btn-lg">Shop now</a></p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 text-center">
              <div class="featured">
                <div class="featured-img featured-img-2" style={{backgroundImage:"url('../images/item-11.jpg')"}}>
                  <h2>Sports</h2>
                  <p><a href="#" class="btn btn-primary btn-lg">Shop now</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
