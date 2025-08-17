// function App() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">Navbar</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Link</a>
//             </li>
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
//                 aria-expanded="false">
//                 Dropdown
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <li><a className="dropdown-item" href="#">Action</a></li>
//                 <li><a className="dropdown-item" href="#">Another action</a></li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li><a className="dropdown-item" href="#">Something else here</a></li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link disabled">Disabled</a>
//             </li>
//           </ul>
//           <form className="d-flex">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//             <button className="btn btn-outline-success" type="submit">Search</button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './App.css';

function App() {
  return (
    <div>
     {}
      <nav className="navbar navbar-expand-lg navbar-light bg-warning px-4">
        <a className="navbar-brand fw-bold" href="#">Notary</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Practice Areas</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Testimonials</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      {}
      <div className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            {}
            <div className="col-md-6 text-white">
              <h1 className="fw-bold">Notary Public & Legal Solutions</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.
              </p>
            </div>

            {}
            <div className="col-md-5 offset-md-1">
              <div className="bg-white p-4 rounded shadow">
                <h5>Book an Appointment</h5>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="mb-3">
                    <input type="date" className="form-control" placeholder="Select Date" />
                  </div>
                  <button type="submit" className="btn btn-warning w-100">Book Appointment</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
