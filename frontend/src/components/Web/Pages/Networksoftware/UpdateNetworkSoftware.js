
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Leftsidebar from '../Common/Leftsidebar';
import Topheader from '../Common/Topheader';

function UpdateNetworkSoftware() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const navigate = useNavigate();

  // Fetch the existing data for edit functionality
  useEffect(() => {
    axios.get(`http://localhost:5000/networksoftware/${id}`)
      .then(res => {
        setName(res.data.name); // Set the name state with the fetched data
        // setEmail(res.data.email);
        // setCount(res.data.count);
        // console.log(res.data.name, 'hi');
      })
      .catch(err => console.log(err));
  }, [id]);

  // Handle form submission for updating data
  function handleSubmit(event) {
    event.preventDefault();
    axios.put(`http://localhost:5000/networksoftware/${id}`, { name })
      .then(res => {
        console.log(res);
        // navigate('/');
        navigate('/networksoftware');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="wrapper">
      <Topheader />
      <Leftsidebar />
      <div className="content-wrapper">
        <section className="content">
          <div className="container mt-3">
            <div className="card card-default">
              <div className="card-header">
                <h3 className="card-title mt-3">Network Software Update</h3>
                <div className="card-tools">
                  <Link to="/networksoftware" className="btn btn-sm btn-success">All</Link>
                </div>
              </div>
              <div className="form-Container m-3">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-6 d-flex flex-column mb-2">
                      <label>Name:<span className="required">*</span></label>
                      <input type="text" value={name} placeholder='Enter Name' className='form-control' onChange={e => setName(e.target.value)} />
                      <span style={{ fontSize: '12px' }}>Affiliate Tracking Software (HasOffers, Trakaff, Affise, In-house, etc)</span>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
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
  );
}

export default UpdateNetworkSoftware;

