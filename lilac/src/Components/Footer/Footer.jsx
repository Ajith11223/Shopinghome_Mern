import React from 'react'

const Footer = () => {
    return (
        <div className='mt-5 d-flex align-items-center justify-content-center gap-5 p-3'>
            <div className='d-flex gap-3 flex-column' style={{width:"300px"}}>
                <div className='d-flex gap-2'>
                    <i class="bi bi-exclude" style={{ color: "blue" }}></i>
                    <p style={{ fontSize: "18px", fontWeight: "600", color: "black" }}>Logoipsum*</p>
                </div>
                <p style={{ flexWrap: "wrap", color: "gray" }}>Lorem ipsum dolor  Numquam minus maiores, magni minima laboriosam eaque et facere iusto saepe dolorem unde,
                    nisi vitae in .</p>

                <div className='d-flex gap-4 '>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-facebook"></i>
                </div>

            </div>

            <div className='d-flex gap-2 flex-column align-items-center justify-content-center '>
                <p style={{ fontSize: "18px", fontWeight: "600", color: "black" }}>Quick Links</p>
                <ul style={{ listStyle: "none", color: "gray" }} className='d-flex flex-column gap-2'>
                    <li>Products</li>
                    <li>Classfields</li>
                    <li>Contact Us</li>
                    <li>Login</li>
                    <li>Sign Up</li>
                </ul>
            </div>

            <div className='d-flex gap-2 flex-column align-items-center justify-content-center '>
                <p style={{ fontSize: "18px", fontWeight: "600", color: "black" }}>Customer Area</p>
                <ul style={{ listStyle: "none", color: "gray" }} className='d-flex flex-column gap-2'>
                    <li>My Acounts</li>
                    <li>Order</li>
                    <li>Tracking List</li>
                    <li>Terms</li>
                    <li>Privacy  Policy</li>
                </ul>
            </div>

            <div className='d-flex gap-2 flex-column align-items-center justify-content-center '>
                <p style={{ fontSize: "18px", fontWeight: "600", color: "black" }}>Vendor Area</p>
                <ul style={{ listStyle: "none", color: "gray" }} className='d-flex flex-column gap-2'>
                    <li>Partner With Us</li>
                    <li>Training</li>
                    <li>Proceduers</li>
                    <li>Trems</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

          
          
            <div className='d-flex gap-2 flex-column align-items-center justify-content-center ' style={{width:"320px"}}>
            <p style={{ fontSize: "18px", fontWeight: "600", color: "black" }}>Contact</p>
            <span style={{ flexWrap: "wrap", color: "gray" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur  repellendus id iste esse soluta.</span>

            <div className='d-flex gap-4'>
                <i class="bi bi-headset"></i>

                <div className='d-flex flex-column'>
                    <span style={{flexWrap:"nowrap"}}>have an question ?</span>
                    <span style={{color:"blue"}}>+91 9988998899</span>
                </div>
                <button className='btn btn-muted btn-sm' style={{border:"1px solid blue",width:"70px"}}>Chat Us</button>

               
                
            </div>

                  <div>
                    <img style={{width:"160px",height:"35px"}} src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg" alt="" />
                    <img style={{width:"160px",height:"50px"}} src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="" />
                </div>
            </div>


        </div>
    )
}

export default Footer