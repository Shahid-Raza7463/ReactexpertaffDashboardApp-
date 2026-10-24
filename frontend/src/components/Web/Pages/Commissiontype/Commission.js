// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Leftsidebar from '../Common/Leftsidebar';
import Topheader from '../Common/Topheader';

export default function Commission() {

  // const [commissionData, setCommissionData] = useState([]);

  // useEffect(() => {
  //   fetchData('http://localhost:5000/commission');
  // }, []);

  // const fetchData = async (url) => {
  //   try {
  //     const response = await axios.get(url);
  //     setCommissionData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete("http://localhost:5000/commission/" + id);
  //     window.location.reload()
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const [commissionData, setcommissionData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/commission')
      .then(res => setcommissionData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      // await axios.delete("http://localhost:5000/networksoftware/" + id);
      await axios.delete(`http://localhost:5000/commission/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
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
          <div className="container mt-3">
            <div className="card card-default">
              <div className="card-header">
                <h3 className="card-title mt-3">Commission Type</h3>
                <div className="card-tools">
                  {/* <Link to="/addcommission" className="btn btn-sm btn-success">
                    <i className="fa fa-plus"></i> Add
                  </Link> */}
                  <Link to="/addcommission/create" className="btn btn-sm btn-success">
                    <i className="fa fa-plus"></i> Add
                  </Link>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered table-hover table-darks" style={{ marginLeft: '20px' }}>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {commissionData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>
                            <div className="d-flex">
                              {/* <div className="card-tools">
                                <a href=""
                                  className="btn btn-sm btn-primary">
                                  <i className="fa fa-pen"></i> Edit
                                </a>
                              </div> */}
                              <div className="card-tools">
                                <Link to={`/commission/edit/${item.id}`}
                                  className="btn btn-sm btn-primary">
                                  <i className="fa fa-pen"></i> Edit
                                </Link>
                              </div>
                              <div className="card-tools">
                                <Link to={`/commission/${item.id}`} className="btn btn-sm btn-info mx-2">
                                  <i className="fa fa-pen"></i> Show
                                </Link>
                              </div>
                              <button onClick={e => handleDelete(item.id)} className="deleteButton btn btn-sm btn-danger mx-2">
                                <i className="fa fa-trash"></i> Delete
                              </button>
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
        </section>
      </div>
    </div>
  )
}
