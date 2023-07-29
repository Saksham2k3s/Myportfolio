import React from 'react'

function Rough() {
  return (
    <>
      <div className="container-fluid effect">
    <div className="container py-5">
    <h4 className="text-center fonts text-white mt-5 head  thick-thin-underline">
            My skills
          </h4>
          <ul style={{zIndex:'1'}} className='display-2'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
     <h1 className='text-black text'  style={{zIndex:'1'}}>       I have developed a diverse set of skills that make me
                well-equipped to tackle various challenges. I have a strong
                foundation in programming languages such as Java,
                enabling me to develop efficient and scalable software
                solutions. Additionally, I have experience in web development,
                including HTML, CSS, and JavaScript, which allows me to create
                engaging and user-friendly websites.</h1>
    </div>
  </div>

  <div className="container-fluid" style={{height:'400px', zIndex:'0', color:'red'}}></div>
  <div className="container-fluid" style={{height:'400px', zIndex:'1', color:'black'}}></div>
    </>
  )
}

export default Rough