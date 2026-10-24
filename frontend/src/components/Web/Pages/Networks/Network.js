// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Leftsidebar from '../Common/Leftsidebar';
import Topheader from '../Common/Topheader';

export default function Network() {

  const [networksData, setNetworksData] = useState([]);
  const [contactusData, setContactusData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // Call fetchData function for networks
    fetchData('http://localhost:5000/networks', setNetworksData);

    // Call fetchData function for contactus
    fetchData('http://localhost:5000/contactus', setContactusData);

    // Call fetchData function for users
    fetchData('http://localhost:5000/', setUsersData);
  }, []);

  const fetchData = async (url, setDataFunction) => {
    try {
      const response = await axios.get(url);
      setDataFunction(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // after click join now button 
  const handleJoin = (networkUrl) => {
    // Implement the logic for handling the join action here
    console.log("Join button clicked for network URL:", networkUrl);
    // For example, you can redirect the user to the network URL
    window.location.href = networkUrl;
  };


  return (

    <div className="wrapper">
      {/* Topheader on page  */}
      <Topheader />

      {/* sidebar menu */}
      <Leftsidebar />

      {/* Content goes to hare */}
      <div className="content-wrapper">
        <section className="content">
          {/* <div className="container-fluid"> */}
          <div className="container mt-3">
            <div className="card card-default">
              <div className="card-header">
                <h1 className="card-title" style={{ fontSize: '23px' }}>Users Management</h1>
                <div className="card-tools">
                  <a href="" className="btn btn-sm btn-success">
                    <i className="fa fa-plus"></i> Addaa
                  </a>
                </div>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  {/* <table className="table table-bordered table-hover table-darks" style={{ marginLeft: '20px' }}>
                    <thead>
                      <tr>
                        <th>Select</th>
                        <th>Network ID </th>
                        <th>Network Name</th>
                        <th>Network Type </th>
                        <th>Network Url</th>
                        <th>Network Description</th>
                        <th>Offer Count</th>
                        <th>Min Payout</th>
                        <th>Referral Commission</th>
                        <th>Affiliate Tracking Software</th>
                        <th>Status</th>
                        <th>Sponsored</th>
                        <th>Top Network</th>
                        <th>Featured</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>



                      {networksData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.network_id}</td>
                          <td>{item.network_name}</td>
                          <td>{item.network_type}</td>
                          <td>{item.network_url}</td>
                          <td>{item.network_description}</td>
                          <td>{item.offer_count}</td>
                          <td>{item.min_payout}</td>
                          <td>{item.referral_commission}</td>
                          <td>{item.affiliate_tracking_software}</td>
                          <td>{item.email}</td>
                          <td>{item.email}</td>
                          <td>{item.email}</td>
                          <td>{item.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table> */}
                  <table className="table table-bordered table-hover table-darks" style={{ marginLeft: '20px' }}>
                    <thead>
                      <tr>
                        <th>Network ID</th>
                        <th>Network Name</th>
                        <th>Network Type</th>
                        <th>Network Url</th>
                        <th>Network Description</th>
                        <th>Offer Count</th>
                        <th>Min Payout</th>
                        <th>Referral Commission</th>
                        <th>Affiliate Tracking Software</th>
                        <th>Status</th>
                        <th>Sponsored</th>
                        <th>Top Network</th>
                        <th>Featured</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {networksData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.network_id}</td>
                          <td>{item.network_name}</td>
                          <td>{item.network_type}</td>
                          <td>
                            <div style={{ width: '58px', overflow: 'hidden' }}>
                              {item.network_url}
                            </div>
                          </td>
                          <td>
                            <div style={{ height: '58px', overflow: 'hidden' }}>
                              {item.network_description}
                            </div>
                          </td>
                          <td>{item.offer_count}</td>
                          <td>{item.min_payout}</td>
                          <td>{item.referral_commission}</td>
                          <td>{item.affiliate_tracking_software}</td>
                          <td>
                            {item.status === 0 ? <span className="badge bg-secondary">Pending</span> : item.status === 1 ? <span className="badge bg-success">Approved</span> : <span className="badge bg-danger">Rejected</span>}
                          </td>
                          <td>
                            {item.is_sponsored === 0 ? <p>0</p> : <span className="badge bg-success">Sponsored</span>}
                          </td>
                          <td>
                            {item.is_top_network === 0 ? <p>0</p> : <span className="badge bg-success">Top</span>}
                          </td>
                          <td>
                            {item.is_featured === 0 ? <p>0</p> : <span className="badge bg-success">Featured</span>}
                          </td>
                          <td>
                            <div className="d-flex">
                              <div className="card-tools">
                                <a href="" className="btn btn-sm btn-primary" style={{ height: '21px', width: '3rem', fontSize: '8px' }}>
                                  <i className="fa fa-pen"></i> Edit
                                </a>
                              </div>
                              <form action='' method="post" className="form1">
                                <button type="submit" className="deleteButton btn btn-sm btn-danger mx-2" style={{ height: '21px', width: '4rem', fontSize: '8px' }}><i className="fa fa-trash"></i> Delete</button>
                              </form>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
      </div>
    </div>
  )
}
