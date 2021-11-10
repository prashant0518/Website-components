import React from "react";
import { useGlobalContext } from "./stripe";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './stripe1.css';

const Hero = () => {
    const { submenuclose } = useGlobalContext();
    return <section className="  conatiner-fluid px-0" onMouseOver={submenuclose}>
       
     <div className=" row  p-5 mt-lg-5 ">
        <div className="col-md-8 d-flex flex-column team justify-content-md-around justify-content-between">
            <h2 className="heading  align-self-sm-start  fw-bold align-self-xl-center  ">Payments <br /> Infrastructure <br />for the internet</h2>
            <p className="text-muted  align-self-sm-start  align-self-xl-center  para"> Millions of companies of all sizes—from startups to Fortune 500s—use
                Stripe’s software and APIs to accept payments, send payouts, and
                manr businesses online.</p>
            <button className="btn btn-danger  align-self-sm-start  align-self-xl-center botn ">Start Now</button>
        </div>
        <div className="col-md-4 ">
            <img src="https://raw.githubusercontent.com/john-smilga/react-projects/eccc3539430dff2c92afdc5e2c6e7fbb74f147f1/13-stripe-submenus/final/src/images/phone.svg" className="d-none d-md-inline-block phone  img-fluid " alt="phone-img"></img>

        </div>
        </div>
    </section>
}
export default Hero