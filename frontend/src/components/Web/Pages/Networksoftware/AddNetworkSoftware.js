// import React from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Leftsidebar from '../Common/Leftsidebar';
import Topheader from '../Common/Topheader';

function AddNetworkSoftware() {
  const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // axios.post('http://localhost:5000/networksoftwarecreate', { name, email })
    axios.post('http://localhost:5000/networksoftware/create', { name })
      .then(res => {
        console.log(res);
        // navigate('/');
        navigate('/networksoftware');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="wrapper">
      {/* Topheader on page  */}
      <Topheader />

      {/* sidebar menu */}
      <Leftsidebar />

      {/* Content goes to hare */}
      <div className="content-wrapper">
        <section className="content">
          <div className="container mt-3">
            <div className="card card-default">
              <div className="card-header">
                <h3 className="card-title mt-3">Network Software Add</h3>
                <div className="card-tools">
                  <Link to="/networksoftware" className="btn btn-sm btn-success">All</Link>
                </div>
              </div>
              <div className="form-Container m-3">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-6 d-flex flex-column  mb-2">
                      <label for="">Name:<span className="required">*</span></label>
                      <input required type="text" placeholder='Enter Name' className='form-control' onChange={e => setName(e.target.value)} />
                      <span style={{ fontSize: '12px' }}>Affiliate Tracking Software (HasOffers, Trakaff, Affise,In-house, etc)</span>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      {/* <input type="submit" className="btn btn-success btn-md" /> */}
                      <button className="btn btn-success btn-md">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AddNetworkSoftware
