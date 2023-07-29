import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container-fluid background h-100 mt-5">
        <div className="container">
           
           {/* About section start */}

          <div className="row px-2 mt-4">
            <h1 className="text-center fonts text-white mt-5 head  thick-thin-underline">
              Know About Me
            </h1>
            <h4 className=" text-white font text-center  heading1">
              <span className="heading2 px-2">Who i am</span>
            </h4>
           
           <div className="col-md-6 aboutText px-5 mt-5 order-lg-1 order-2">
            <h3> Hii Everyone, I'm <span className="highlight3">Saksham Shrivastava</span> from <span className="highlight3">Gwalior, India.</span></h3>
            <h3>I am currently a 2nd-year B.C.A. student at Adarsh Science College, Gwalior. Moreover, I have a strong interest in <span className="highlight3">Web development</span>.</h3> 
            <h3>I aspire to become a proficient web developer and make a positive impact by creating innovative and user-centric online experiences.</h3>
            </div>
            <div className="col-md-6  px-5 order-lg-2 order-1 ">
            <img src='https://sagarmude.netlify.app/static/media/about.5e4e5236.svg' alt="profileimage" className="img-fluid" />
            </div>
          </div>

           {/* About section end */}

           {/* Experiance section start */}
            
           <h1 className="text-center fonts text-white mt-5 head  thick-thin-underline">
           My Experience
            </h1>
            
              
              
             <div className="row exp mt-5 pt-5">
              
              <div className="col-md-6" data-aos="zoom-in">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYUANR9TILRFPwZQI5zTsCFuYiXv-WV2etTxSlKmeSh0QU17XDLed_0ECYatqPD8rPPw&usqp=CAU" alt="pninfosys" className="img-fluid" />
              </div>
             
              <div className="col-md-6" data-aos="zoom-in">
                <h2 className="h2 mt-3">Web Design Intern</h2>
                <h3 className="h3">PNINFOSYS</h3>
                <h3 className="h3">12/2022 - 04/2023</h3>
                <p>Here, I have learned new skills like HTML, CSS, Bootstrap, and JavaScript, and gained insights into creating the frontend of a website. 
                </p>
              </div>
             </div>
               
             <div className="row exp">
              
              <div className="col-md-6" data-aos="zoom-in">
              <img src="https://img.freepik.com/free-vector/freelance-outsoursing-concept-people-working-remotely-through-internet-idea-jop-independency-free-schedule-time-management-work-efficiency-vector-flat-illustration_613284-1216.jpg?size=626&ext=jpg&ga=GA1.1.1802003475.1686590369&semt=sph" alt="pninfosys" className="img-fluid" />
              </div>
             
              <div className="col-md-6" data-aos="zoom-in">
                <h2 className="h2 mt-3">Freelancing</h2>
                <h3 className="h3">Web Designing</h3>
                <h3 className="h3">06/2022 - Present</h3>
                <p>Here, I am designing frontend of website for my clients. 
                </p>
              </div>
             </div>
              
             
            {/* Experiance section end */}

        </div>
      </div>

  
    </>
  );
}

export default About;
