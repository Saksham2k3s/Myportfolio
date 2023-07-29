import React from 'react'
import { Link } from 'react-router-dom'
function Projectlist(props) {
  return (
   <>
    <div className="card mx-auto mt-4 " style={{width: "18rem"}}>
   
  <img className=" img-fluid mainimg" src={props.image} alt="Card imagecap" ma />
  
  <div className="card-body">
    <h5 className='h3'>{props.project_name}</h5>
    
    <div className='row gy-6 tech-img'>
    {props.technologies.map((imageURL, index) => (
        <img key={index} src={imageURL} alt={`Technology ${index}`} className='img-fluid' />
      ))}
    </div>
    <p className="card-text " style={{fontSize:'16px'}}>{props.Description}</p>
    <div className='d-flex justify-content-around'>
    <Link to={props.demo} target='_blank' ><button  className='btn1 btn'>Demo</button></Link>
   < Link to={props.source} target='_blank'><button  className='btn2 btn'>Source Code</button></Link>
    </div>
  </div>
</div>
   </>
  )
}

export default Projectlist