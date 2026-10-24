import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function Showcommissiontype() {
  const { id } = useParams();
  const [user, setUser] = useState(null); // Initialize as null to handle loading state

  useEffect(() => {
    axios.get(`http://localhost:5000/commission/${id}`)
      .then(res => {
        console.log(res.data.length)
        if (res.data.length > 0) {
          setUser(res.data[0]); // Assuming the response is an array
        } else {
          console.error('User not found');
        }
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="card card-default">
      <div className="card-header" style={{ marginTop: '10px' }}>
        <h1 className="card-title" style={{ fontSize: '23px' }}>Show User</h1>
        <div className="card-tools">
          <Link to="/users" className="btn btn-sm btn-success">Back</Link>
        </div>
      </div>
      <div className="row" style={{ marginLeft: '20px' }}>
        <div className="col-xs-12 col-sm-12 col-md-12">
          <div className="form-group">
            <strong>Name:</strong>
            {user.id}
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12">
          <div className="form-group">
            <strong>Email:</strong>
            {user.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcommissiontype;
