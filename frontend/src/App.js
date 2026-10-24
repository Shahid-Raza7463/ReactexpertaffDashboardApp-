import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Web/Pages/Home/Home';
import Network from './components/Web/Pages/Networks/Network';
import Commission from './components/Web/Pages/Commissiontype/Commission';
import AddCommission from './components/Web/Pages/Commissiontype/AddCommission';
import AddNetworkSoftware from './components/Web/Pages/Networksoftware/AddNetworkSoftware';
import Users from './components/Web/Pages/Users/Users';
// import About from './components/Web/Pages/About/About';
import NetworkSoftware from './components/Web/Pages/Networksoftware/NetworkSoftware';
import UpdateNetworkSoftware from './components/Web/Pages/Networksoftware/UpdateNetworkSoftware';

import './App.css';
import UpdateCommission from './components/Web/Pages/Commissiontype/UpdateCommission';
import ShowUser from './components/Web/Pages/Users/ShowUser';
import Showcommissiontype from './components/Web/Pages/Commissiontype/Showcommissiontype';
import Blogs from './components/Web/Pages/Blogs/Blogs';
import Verticals from './components/Web/Pages/verticals/Verticals';
import UsersCreate from './components/Web/Pages/Users/UsersCreate';

const App = () => {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/network" element={<Network />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/verticals" element={<Verticals />} />

          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<ShowUser />} />
          <Route path="/users/create" element={<UsersCreate />} />
          {/* <Route path="/users/edit/:id" element={<EditUser />} /> */}
          {/* <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<ShowUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} /> */}

          {/* commissiontype */}
          {/* indexing */}
          <Route path="/commission" element={<Commission />} />
          {/* create */}
          <Route path="/addcommission/create" element={<AddCommission />} />
          {/* <Route path="/commission/:id" element={<UpdateCommission />} /> */}
          {/* edit */}
          <Route path="/commission/edit/:id" element={<UpdateCommission />} />
          {/* view / showing data  */}
          <Route path="/commission/:id" element={<Showcommissiontype />} />
          {/* commissiontype end  */}


          {/* networksoftware */}
          <Route path="/networksoftware" element={<NetworkSoftware />} />
          <Route path="/networksoftware/create" element={<AddNetworkSoftware />} />
          <Route path="/networksoftware/:id" element={<UpdateNetworkSoftware />} />
          {/* networksoftware end  */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
