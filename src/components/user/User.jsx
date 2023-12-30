import React from 'react'


export default function User() {
    
    return (
        <div>
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
                <button type="submit" className="btn btn-primary" >Submit</button>
            </div >
        </div>
    )
}
