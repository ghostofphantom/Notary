import React from 'react'

function Card(props) {

   const {title , desc, price} = props

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"> {title} </h5>
                            <p className="card-text">{desc}</p>
                            <a href="#" className="btn btn-primary"> {price} </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card