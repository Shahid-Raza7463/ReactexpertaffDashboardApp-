// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Leftsidebar from '../Common/Leftsidebar';
import Topheader from '../Common/Topheader';

export default function Home() {

  // get users data
  const [usersData, setusersData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(res => setusersData(res.data))
      .catch(err => console.log(err));
  }, []);
  // get networksoftware data
  const [networksoftwareData, setnetworksoftwarData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/networksoftware')
      .then(res => setnetworksoftwarData(res.data))
      .catch(err => console.log(err));
  }, []);

  // get commissionData data
  const [commissionData, setcommissionData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/commission')
      .then(res => setcommissionData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <body>

      <div className="wrapper">

        {/* Topheader on page  */}
        <Topheader />

        {/* sidebar menu */}
        <Leftsidebar />

        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Dashboard</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard v1</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <section className="content">
            <div className="container-fluid">
              {/* <!-- Small boxes (Stat box) --> */}
              <div className="row">
                <div className="col-lg-3 col-6">
                  {/* <!-- small box --> */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      {/* <h3>150</h3> */}
                      <h3>{networksoftwareData.length}</h3>

                      <p>Network Software</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag"></i>
                    </div>
                    {/* <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
                    <Link to="/networksoftware" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
                  </div>
                </div>
                {/* <!-- ./col --> */}
                <div className="col-lg-3 col-6">
                  {/* <!-- small box --> */}
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>53<sup style={{ fontSize: '20px' }}>%</sup></h3>
                      <p>Bounce Rate</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-stats-bars"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                  </div>
                </div>
                {/* <!-- ./col --> */}
                <div className="col-lg-3 col-6">
                  {/* <!-- small box --> */}
                  <div className="small-box bg-warning">
                    <div className="inner">
                      {/* <h3>44</h3> */}
                      <h3>{usersData.length}</h3>

                      <p>User Registrations</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-person-add"></i>
                    </div>
                    {/* <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
                    <Link to="/users" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
                  </div>
                </div>
                {/* <!-- ./col --> */}
                <div className="col-lg-3 col-6">
                  {/* <!-- small box --> */}
                  <div className="small-box bg-danger">
                    <div className="inner">
                      {/* <h3>65</h3> */}
                      <h3>{commissionData.length}</h3>

                      <p>Commission Type</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-pie-graph"></i>
                    </div>
                    {/* <a href="/commission" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
                    <Link to="/commission" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
                  </div>
                </div>
                {/* <!-- ./col --> */}
              </div>
            </div>
          </section>
        </div>


        <aside class="control-sidebar control-sidebar-dark">
          {/* <!-- Control sidebar content goes here --> */}
        </aside>
      </div>
    </body >
  )
}
