import React from 'react'
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <>
    <div className="container-fluid background h-100 ">
      <div className="container ">
        <div className="row mt-5 py-5 h-100">
        <div className="col-md-6  pr-5">
        <h4 className=" fonts text-white  head mt-5">
            Contect With Me
          </h4>
       
          <div className='contact'>
          <p className='text-white text-justify pr-5'>Feel free  to <span className='highlight2'>get in touch</span> with me! I'd love to hear from you and <span className='highlight2'>discuss</span> potential collaborations, projects, or just have a friendly chat.</p>
          </div>
        
         <div className='mt-4 connect'>
         <Link to="https://github.com/Saksham2k3s" target="_blank" className='nav-link'>
                  {" "}
                  
                  <h4><i class="fa-brands fa-github"></i>   Guthub</h4>
                </Link>
                <br />
                <Link
                  to="https://www.linkedin.com/in/saksham-shrivastava-07b1a1250/"
                  target="_blank"
                  className='nav-link'
                >
                  {" "}
                  <h4><i class="fa-brands fa-linkedin-in"></i>   Linkedin</h4>
                </Link>
                <br />
                <Link to="mailto:sakshamshrivastav58@gmail.com" target="_blank" className='nav-link'>
                 
                  <h4 className='h1'><i class="fa-solid fa-envelope"></i> Mail</h4>
                </Link>
                <br />
                <Link to="https:/wa.me/9131951071" target="_blank" className='nav-link'>
                <h4> <i class="fa-brands fa-whatsapp"></i> Chat</h4>
                </Link>
         </div>
         
        </div>
        <div className="col-md-6 connect ">
        <h3 className=" fonts text-white mt-5 head mt-5">
            Say Hii!!
          </h3>
          <form action="" className='form mt-4'>
          <div className="form-group">
          <label>Name:</label>
            <br />
            <input type="text" name='name' placeholder='name' className='w-100 form-control' />
          </div>
          <div className="form-group">
          <label>Email:</label>
            <br />
            <input type="email" name='email' placeholder='email' className='w-100 form-control' />
          </div>
          <div className="form-group">
          <label>Message:</label>

          <textarea  name="comment" form="usrform" className='form-control'>  
        </textarea>
</div>
          </form>
         <div className='text-center'>
         <button className="messagebtn  nav-item ms-auto mt-5  ">
                  <span>
                    Send <i className="fa-sharp fa-solid fa-paper-plane messageicon" ></i>
                  </span>
                </button>
         </div>
        </div>
        </div>
        
      </div>
      <div className="separator sticky-md-bottom">
  <div className="line"></div>
  <h5 className='text-white h5'>Connect with ❤️ By Saksham </h5>
  <div className="line " ></div>
</div>
    </div>
    </>
  )
}

export default Contact