import React, { useEffect } from "react";
import Slider from "react-slick";


function Home() {

  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <>
      <div className="sofa" style={{marginTop:"86px"}}>
      <Slider {...settings}>
          <div>
           <img src="/images/salary11.webp" alt='logo-sofa' style={{width:"100%"}} />
          </div>
          <div>
          <img src="/images/flash.webp" alt='logo-sofa' style={{width:"100%"}} />
          </div>
         
        </Slider>
      </div>
       <div className="container adds mt-2 mb-2">
        <div className="sofa-a">
          <div className="free">
            <div className="so-free">
              <img src="./images/free1.svg" className="fr-0" alt="sofa"  />
            </div>
            <div className="te-frr">
            <p className="mb-0">Free Shipping</p>
            </div>
          </div>
          <div className="free">
            <div className="so-free">
              <img src="./images/free2.svg" className="fr-0" alt="sofa"  />
            </div>
            <div className="te-frr">
            <p className="mb-0">Free Installation</p>
            </div>
          </div>
          <div className="free">
            <div className="so-free">
              <img src="./images/free3.svg" className="fr-0" alt="sofa"  />
            </div>
            <div className="te-frr">
            <p className="mb-0">1 Million+ Happy Customers</p>
            </div>
          </div>
          <div className="free">
            <div className="so-free">
              <img src="./images/free4.svg" className="fr-0" alt="sofa"  />
            </div>
            <div className="te-frr">
            <p className="mb-0">No Cost EMIs</p>
            </div>
          </div>
        </div>
       </div>

       {/* shope */}
       <div className="shop-fl">
        <div className="container">
          <div className="wr-s-p">
          <div className="card-heading mb-3 mt-3"><h4>Shop By Rooms</h4></div>
          <div className="row">
            <div className="col-md-2">
              <div className="ch-09">
                <img src="./images/shop1.webp" alt="shopa" style={{width:"100%"}}/>
                <div className="t-e-e">Bedroom</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="ch-09">
                <img src="./images/shop1.webp" alt="shopa" style={{width:"100%"}} />
                <div className="t-e-e">Bedroom</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="ch-09">
                <img src="./images/shop1.webp" alt="shopa" style={{width:"100%"}}/>
                <div className="t-e-e">Bedroom</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="ch-09">
                <img src="./images/shop1.webp" alt="shopa" style={{width:"100%"}} />
                <div className="t-e-e">Bedroom</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="ch-09">
                <img src="./images/shop1.webp" alt="shopa" style={{width:"100%"}}/>
                <div className="t-e-e">Bedroom</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="ch-09">
                <img src="./images/shop1.webp" alt="shopa" style={{width:"100%"}} />
                <div className="t-e-e">Bedroom</div>
              </div>
            </div>
          </div>
          </div>

        </div>
       </div>
    </>
  );
}

export default Home;
