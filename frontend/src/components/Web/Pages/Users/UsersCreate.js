
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// import Leftsidebar from '../Common/Leftsidebar';
// import Topheader from '../Common/Topheader';

// function UsersCreate() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   function handleSubmit(event) {
//     event.preventDefault();
//     axios.post('http://localhost:5000/users/create', { name, email, password })
//       .then(res => {
//         console.log(res);
//         navigate('/users');
//       })
//       .catch(err => console.log(err));
//   }

//   return (
//     <div className="wrapper">
//       <Topheader />
//       <Leftsidebar />
//       <div className="content-wrapper">
//         <section className="content">
//           <div className="container mt-3">
//             <div className="card card-default">
//               <div className="card-header">
//                 <h3 className="card-title mt-3">Users Create</h3>
//                 {/* <div className="card-tools">
//                   <Link to="/users" className="btn btn-sm btn-success">All</Link>
//                 </div> */}
//               </div>
//               <div className="form-Container m-3">
//                 <form onSubmit={handleSubmit}>
//                   <div className="row">
//                     <div className="col-6 d-flex flex-column  mb-2">
//                       <label>Name:<span className="required">*</span></label>
//                       <input
//                         required
//                         type="text"
//                         placeholder='Enter Name'
//                         className='form-control'
//                         value={name}
//                         onChange={e => setName(e.target.value)}
//                       />
//                     </div>
//                     <div className="col-6 d-flex flex-column  mb-2">
//                       <label>Email:<span className="required">*</span></label>
//                       <input
//                         required
//                         type="email"
//                         placeholder='Enter Email'
//                         className='form-control'
//                         value={email}
//                         onChange={e => setEmail(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-6 d-flex flex-column  mb-2">
//                       <label>Password:<span className="required">*</span></label>
//                       <input
//                         required
//                         type="text"
//                         placeholder='Enter Password'
//                         className='form-control'
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                   <div className="row mt-3">
//                     <div className="col-6">
//                       <button className="btn btn-success btn-md">Submit</button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default UsersCreate;


import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import Leftsidebar from '../Common/Leftsidebar';
import Topheader from '../Common/Topheader';

function UsersCreate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/users/create', { name, email, password })
      .then(res => {
        console.log(res);
        navigate('/users');
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
                <h3 className="card-title mt-3">Users Create</h3>
                <div className="card-tools">
                  <Link to="/users" className="btn btn-sm btn-success">All</Link>
                </div>
              </div>
              <div className="form-Container m-3">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-6 d-flex flex-column  mb-2">
                      <label>Name:<span className="required">*</span></label>
                      <input
                        required
                        type="text"
                        placeholder='Enter Name'
                        className='form-control'
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-6 d-flex flex-column  mb-2">
                      <label>Email:<span className="required">*</span></label>
                      <input
                        required
                        type="email"
                        placeholder='Enter Email'
                        className='form-control'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 d-flex flex-column  mb-2">
                      <label>Password:<span className="required">*</span></label>
                      <input
                        required
                        type="text"
                        placeholder='Enter Password'
                        className='form-control'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
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

export default UsersCreate;