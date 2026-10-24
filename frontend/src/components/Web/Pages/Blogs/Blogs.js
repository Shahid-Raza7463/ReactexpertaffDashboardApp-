// import React from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Leftsidebar from '../Common/Leftsidebar';
import Topheader from '../Common/Topheader';

function Blogs() {

  const [blogsData, setblogsData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/blogs')
      .then(res => setblogsData(res.data))
      .catch(err => console.log(err));
  }, []);

  const renderStatus = (status) => {
    if (status === 0) {
      return <span className="badge bg-danger">Inactive</span>;
    } else {
      return <span className="badge bg-success">Active</span>;
    }
  };

  // Delete functnality
  const showConfirmation = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this item?")) {
      handleDelete(id);
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/blogs/admin/offers/${id}`)
      .then(response => {
        // Handle successful deletion (e.g., update the state to remove the deleted item from the list)
        console.log(response.data);
      })
      .catch(error => {
        console.error("There was an error deleting the item!", error);
      });
  };
  // Delete functnality end

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
                <h3 className="card-title mt-3">Blogs list</h3>
                <div className="card-tools">
                  <Link to="/networksoftware/create" className="btn btn-sm btn-success">
                    <i className="fa fa-plus"></i> Add
                  </Link>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered table-hover table-darks" style={{ marginLeft: '20px' }}>
                    <thead>
                      <tr className="text-center">
                        <th>Id</th>
                        <th>Title</th>
                        <th>preview_image</th>
                        <th>status</th>
                        <th>Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      {blogsData.map((blogs, index) => (
                        <tr key={index}>
                          <td>{blogs.id}</td>
                          <td>{blogs.title}</td>
                          <td className='text-center'>
                            <img src={blogs.preview_image} alt="Preview Image" style={{ maxWidth: '50px', maxHeight: '25px' }} />
                          </td>
                          <td>
                            {renderStatus(blogs.status)}
                          </td>
                          <td>
                            <div className="d-flex">
                              <div className="card-tools">
                                <Link to={`/blogss/${blogs.id}/edit`} className="btn btn-sm btn-success" style={{ height: '21px', width: '3rem', fontSize: '8px' }}>
                                  <i class="fa fa-eye"></i> Edit
                                </Link>
                              </div>
                              <div className="card-tools mx-2">
                                <Link to={`/blogss/${blogs.id}/edit`} className="btn btn-sm btn-primary" style={{ height: '21px', width: '3rem', fontSize: '8px' }}>
                                  <i className="fa fa-pen"></i> Edit
                                </Link>
                              </div>

                              <form action={`/admin/blogss/${blogs.id}`} method="post" className="form1">
                                <input type="hidden" name="_method" value="DELETE" />
                                <button type="submit" className="deleteButton btn btn-sm btn-danger mx-2" onClick={(e) => { e.preventDefault(); showConfirmation(e); }} style={{ height: '21px', width: '3rem', fontSize: '8px' }}>
                                  <i className="fa fa-trash"></i> Delete
                                </button>
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
        </section>
      </div>
    </div>
  )
}

export default Blogs
