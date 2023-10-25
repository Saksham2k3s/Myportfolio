import React from 'react';
import Projectlist from './Projectlist';
import Projectdata from './Projectdata';
function Project() {
  return (
    <>
       <div className="container-fluid project background mt-5 pt-2 pb-5">
     <div class = "container ">
     <h1 className="text-center fonts text-white mt-5 head  thick-thin-underline">
              My Projects
            </h1>
            <h4 className=" text-white font text-center  heading1">
              <span className="heading2 px-2">What i do</span>
            </h4>
      <div className="row mt-5  ">
        <div className="col-12 mx-auto">
          <div className="row  gy-3 ">
          {
            Projectdata.map((val,idx)=>{
              return <Projectlist key={idx} image={val.image} project_name = {val.project_name}  Duration= {val.Duration} Description = {val.Description} technologies = {val.technologies} demo = {val.demo} source = {val.source} />
            })
          }
          </div>
        </div>
        </div> 
  </div>
     </div>
    </>
  );
}

export default Project;
