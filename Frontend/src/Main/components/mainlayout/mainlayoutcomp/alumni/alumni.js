import React from "react";
import "./alumni.css";
import alu from "./IMG_1010.JPG";
import samsung from "./samsung.png";
import amazon from "./amazon.png";

const Alumni = () => {
  return (
    <div classname="backfull">
      <div className="alumnihead">
        <h1>
          Our Alumni's <hr className="alumnihr2" />
        </h1>
      </div>

      <div className="cars">
        <div className="online">
      <div className="carousel-wrapper">
 <div className="carousel" data-flickity>
    <div className="carousel-cell">
    <div className="cellimb">
    <img src={alu}/>
    </div>
   
      <h3><i class="fas fa-quote-left"></i></h3>
      <p>Hey,I am this and my name is this and i do this and i would like to do this
      <hr className="alumnihr" /></p>
      <h5>WORK COMPANY</h5>
      <div class="line"></div>
      <div class="price">
        <span>Parag Thakur</span>
      </div>
    </div>
    <div className="carousel-cell">
    <div className="cellimb">
    <img src={alu}/>
    </div>
   
      <h3><i className="fas fa-quote-left"></i></h3>
      <p>Hey,I am this and my name is this and i do this and i would like to do this
      <hr className="alumnihr" /></p>
      <h5>WORK COMPANY</h5>
      <div className="line"></div>
      <div className="price">
        <span>Parag Thakur</span>
      </div>
    </div>
    <div className="carousel-cell">
    <div className="cellimb">
    <img src={alu}/>
    </div>
   
      <h3><i class="fas fa-quote-left"></i></h3>
      <p>Hey,I am this and my name is this and i do this and i would like to do this
      <hr className="alumnihr" /></p>
      <h5>WORK COMPANY</h5>
      <div className="line"></div>
      <div className="price">
        <span>Parag Thakur</span>
      </div>
    </div>
    <div className="carousel-cell">
    <div className="cellimb">
    <img src={alu}/>
    </div>
   
      <h3><i class="fas fa-quote-left"></i></h3>
      <p>Hey,I am this and my name is this and i do this and i would like to do this
      <hr className="alumnihr" /></p>
      <h5>WORK COMPANY</h5>
      <div className="line"></div>
      <div className="price">
        <span>Parag Thakur</span>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
      
  );
};

export default Alumni;
