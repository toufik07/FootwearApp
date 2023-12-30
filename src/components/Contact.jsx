import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="bread"><span><Link to={'/'}>Home</Link></span> / <span>Contact</span></p>
            </div>
          </div>
        </div>
      </div>

      <div id="colorlib-contact">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h3>Contact Information</h3>
              <div class="row contact-info-wrap">
                <div class="col-md-3">
                  <p><span><i class="bi bi-geo-alt-fill"></i></span> Renuka Nagar Yadrav , <br/> Gamadar galli no.2 416146</p>
                </div>
                <div class="col-md-3">
                  <p><span><i class="bi bi-telephone"></i></span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                </div>
                <div class="col-md-3">
                  <p><span><i class="bi bi-envelope"></i></span> <a href="mailto:info@yoursite.com">toufik@gmail.com</a></p>
                </div>
                <div class="col-md-3">
                  <p><span><i class="bi bi-globe"></i></span> <a href="#">yoursite.com</a></p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="contact-wrap">
                <h3>Get In Touch</h3>
                <form action="#" class="contact-form">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" class="form-control" placeholder="Your firstname"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" class="form-control" placeholder="Your lastname"/>
                      </div>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" id="email" class="form-control" placeholder="Your email address"/>
                      </div>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" class="form-control" placeholder="Your subject of this message"/>
                      </div>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label for="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" class="form-control" placeholder="Say something about us"></textarea>
                      </div>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <input type="submit" value="Send Message" class="btn btn-primary"/>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-6">
              <div id="map" class="colorlib-map"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
