
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { InputGroup, Form, Button } from 'react-bootstrap'; // Add these imports

import Leftsidebar from '../Common/Leftsidebar';
import Topheader from '../Common/Topheader';

function Verticals() {
  const [verticalsData, setVerticalsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/verticals')
      .then(res => setVerticalsData(res.data))
      .catch(err => console.log(err));
  }, []);

  const renderStatus = (status) => {
    if (status === 0) {
      return <span className="badge bg-danger">Inactive</span>;
    } else {
      return <span className="badge bg-success">Active</span>;
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {

      const filteredData = verticalsData.filter(Verticals =>
        Verticals.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      // consolele.log(filteredData);
      setVerticalsData(filteredData);
    } else {
      axios.get('http://localhost:5000/verticals')
        .then(res => setVerticalsData(res.data))
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="wrapper">
      <Topheader />
      <Leftsidebar />

      <div className="content-wrapper">
        <section className="content">
          <div className="container mt-3">
            <div className="card card-default">
              <div className="card-header">
                <h3 className="card-title mt-3">Verticals list</h3>
                <div className="card-tools">
                  <Link to="/verticals/create" className="btn btn-sm btn-success">
                    <i className="fa fa-plus"></i> Add
                  </Link>
                </div>
              </div>
              <div className="card-body">
                <div className="mb-3" style={{ width: '41rem' }}>
                  <InputGroup>
                    {/* <InputGroup.Text id="btnGroupAddon">Search</InputGroup.Text> */}
                    <Form.Control
                      type="text"
                      placeholder="Search by title"
                      aria-label="Search by title"
                      aria-describedby="btnGroupAddon"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button variant="primary" onClick={handleSearch}>Search</Button>
                  </InputGroup>
                </div>
                <div className="table-responsive">
                  <table className="table table-bordered table-hover table-darks" style={{ marginLeft: '20px' }}>
                    <thead>
                      <tr className="text-center">
                        <th>Id</th>
                        <th>Title</th>
                        <th>network_count</th>
                        <th>icon</th>
                        <th>status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {verticalsData.map((Verticals, index) => (
                        <tr key={index}>
                          <td>{Verticals.id}</td>
                          <td>{Verticals.title}</td>
                          <td>{Verticals.network_count}</td>
                          <td>
                            <i className={Verticals.icon} style={{ backgroundColor: '#00ffaa' }}></i>
                          </td>
                          <td>
                            {renderStatus(Verticals.status)}
                          </td>
                          <td>
                            <div className="d-flex">
                              <div className="card-tools">
                                <Link to={`/verticals/${Verticals.id}/edit`} className="btn btn-sm btn-success" style={{ height: '21px', width: '3rem', fontSize: '8px' }}>
                                  <i className="fa fa-eye"></i> Edit
                                </Link>
                              </div>
                              <div className="card-tools mx-2">
                                <Link to={`/verticals/${Verticals.id}`} className="btn btn-sm btn-danger" style={{ height: '21px', width: '4rem', fontSize: '8px' }}>
                                  <i className="fa fa-trash"></i> Delete
                                </Link>
                              </div>
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
  );
}

export default Verticals;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { InputGroup, Form, Button } from 'react-bootstrap'; // Add these imports

// import Leftsidebar from '../Common/Leftsidebar';
// import Topheader from '../Common/Topheader';

// function Verticals() {
//   const [verticalsData, setVerticalsData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/verticals')
//       .then(res => {
//         setVerticalsData(res.data);
//         setFilteredData(res.data);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   const renderStatus = (status) => {
//     if (status === 0) {
//       return <span className="badge bg-danger">Inactive</span>;
//     } else {
//       return <span className="badge bg-success">Active</span>;
//     }
//   };

//   const handleSearch = () => {

//     const filtered = verticalsData.filter(vertical =>
//       vertical.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

//   return (
//     <div className="wrapper">
//       {/* Topheader on page  */}
//       <Topheader />

//       {/* sidebar menu */}
//       <Leftsidebar />

//       {/* Content goes to here */}
//       <div className="content-wrapper">
//         <section className="content">
//           <div className="container mt-3">
//             <div className="card card-default">
//               <div className="card-header">
//                 <h3 className="card-title mt-3">Verticals list</h3>
//                 <div className="card-tools">
//                   <Link to="/verticals/create" className="btn btn-sm btn-success">
//                     <i className="fa fa-plus"></i> Add
//                   </Link>
//                 </div>
//               </div>
//               <div className="card-body">
//                 <div className="table-responsive">
//                   <div className="mb-3" style={{ width: '41rem' }}>
//                     <InputGroup>
//                       {/* <InputGroup.Text id="btnGroupAddon">Search</InputGroup.Text> */}
//                       <Form.Control
//                         type="text"
//                         placeholder="Search by title"
//                         aria-label="Search by title"
//                         aria-describedby="btnGroupAddon"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                       />
//                       <Button variant="primary" onClick={handleSearch}>Search</Button>
//                     </InputGroup>
//                   </div>
//                   <table className="table table-bordered table-hover table-darks" style={{ marginLeft: '20px' }}>
//                     <thead>
//                       <tr className="text-center">
//                         <th>Id</th>
//                         <th>Title</th>
//                         <th>network_count</th>
//                         <th>icon</th>
//                         <th>status</th>
//                         <th>Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {filteredData.map((vertical, index) => (
//                         <tr key={index}>
//                           <td>{vertical.id}</td>
//                           <td>{vertical.title}</td>
//                           <td>{vertical.network_count}</td>
//                           <td>
//                             <i className={vertical.icon} style={{ backgroundColor: '#00ffaa' }}></i>
//                           </td>
//                           <td>
//                             {renderStatus(vertical.status)}
//                           </td>
//                           <td>
//                             <div className="d-flex">
//                               <div className="card-tools">
//                                 <Link to={`/blogss/${vertical.id}/edit`} className="btn btn-sm btn-success" style={{ height: '21px', width: '3rem', fontSize: '8px' }}>
//                                   <i className="fa fa-eye"></i> Edit
//                                 </Link>
//                               </div>
//                               <div className="card-tools mx-2">
//                                 <Link to={`/blogss/${vertical.id}`} className="btn btn-sm btn-danger" style={{ height: '21px', width: '4rem', fontSize: '8px' }}>
//                                   <i className="fa fa-trash"></i> Delete
//                                 </Link>
//                               </div>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }

// export default Verticals;






