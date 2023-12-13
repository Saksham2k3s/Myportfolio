import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SakshamResume from "./Saksham_Shrivastava_Resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState} from "react";
import { PulseLoader } from "react-spinners";
import { Typewriter } from 'react-simple-typewriter'

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    
      setLoading(true);

      setTimeout(()=>{
        setLoading(false);
      },10)
   
  }, []);
  return (
    <>
    {
      loading ?
     <div className="loading-div align-middle ">
       <PulseLoader
        color={'#01ffea'}
        loading={loading}
        
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
     </div> :
    
      <div className="container-fluid background h-100  pt-5">
        <div className="container pt-5 ">
          <div className="row">
           <div className="col-md-2"></div>
            <div
              className="col-md-8 sec-1 pt-5 "
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h5 className="h3"> ✋ Hii, my name is</h5>
              <h1 className="display-4 text-white">Saksham Shrivastava.</h1>
              <h1 className="display-4 text-white">
                I am a   <Typewriter
            words={['Frontend Developer', 'Open Source Contributor', 'Enthusiastic Student.']}
            loop={5} 
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
              </h1>
              <p className="pr-2 text-white">
                I am dedicated and aspiring{" "}
                <span className="highlight">web developer</span> with a strong
                passion for creating innovative and{" "}
                <span className="highlight"> user-friendly </span> web
                experiences.
              </p>
              <Link
                to={SakshamResume}
                download="Saksham Resume"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-item ms-auto"
              >
                <button className="h-btn fonts nav-item ms-auto">
                  <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                    Resume
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
}
    </>
  );
}

export default Home;
