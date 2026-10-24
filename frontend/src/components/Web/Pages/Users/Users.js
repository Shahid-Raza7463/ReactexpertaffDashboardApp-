// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Leftsidebar from '../Common/Leftsidebar';
import Topheader from '../Common/Topheader';

export default function Users() {

  // get users data
  const [usersData, setusersData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(res => setusersData(res.data))
      .catch(err => console.log(err));
  }, []);

  // display inactive and active 
  // i can not use if statment in react html code 
  const renderStatus = (status) => {
    if (status === 0) {
      return <span className="badge bg-danger">Inactive</span>;
    } else {
      return <span className="badge bg-success">Active</span>;
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
                  <Link to="/users/create" className="btn btn-sm btn-success">
                    <i className="fa fa-plus"></i> Add
                  </Link>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered table-hover table-darks" style={{ marginLeft: '20px' }}>
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {usersData.slice(0, 10).map((item, index) => ( */}
                      {usersData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          {/* <td>{item.status}</td> */}
                          <td>
                            {/* {item.status === 0 ? (
                              <span className="badge bg-danger">Inactive</span>
                            ) : (
                              <span className="badge bg-success">Active</span>
                            )} */}
                            {renderStatus(item.status)}
                          </td>
                          <td>
                            <Link className="btn btn-info" to={`/users/${item.id}`}>Show</Link>
                            {/* <Link className="btn btn-primary" to={`/users/edit/${item.id}`}>Edit</Link> */}
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
