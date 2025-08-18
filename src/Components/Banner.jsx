import React from 'react'

function Banner() {
  return (
    <section>
        <div className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
      
            <div className="col-md-6 text-white">
              <h1 className="fw-bold">Notary Public & Legal Solutions</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.
              </p>
            </div>

      
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
                  <button type="submit" className="btn w-100">Book Appointment</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner