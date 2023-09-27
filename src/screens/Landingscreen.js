import React from 'react'
import { Link } from 'react-router-dom'
function Landingscreen() {
  return (
    <div className="row landing">
     <div className="col-md-12 text-center">
          <h2 style={{color:"white",fontSize:'130px'}}>YOR STAY</h2>
          <h1 style={{color:"white"}}>There is only one boss.The guest.</h1>
          <Link to="/home">
                    <button className='btn landingbtn' style={{color:'white',backgroundcolor:'white'}}>Explore The Rooms</button>
          </Link>
     </div>
    </div>
  )
}

export default Landingscreen