import React from 'react'

const Notice = () => {
  return (
    <div className='d-flex bg-primary align-items-center justify-content-center mt-5 flex-wrap' style={{minHeight:"285px",color:"white"}} >

        <div className='d-flex gap-5 col-6 w-50'>
        <i class="bi bi-envelope-paper" style={{fontSize:"40px"}}></i>
        <div>
            <h3>Sign Up for Newsletter</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,  <br /> temporibus similique. Beatae laborum inventore in.</p>
        </div>
        </div>

        <div>
        <div class="input-group mb-3 col-6 ">
  <input type="text" class="form-control p-2" style={{maxWidth:"400px"}} placeholder="Enter Your Email" aria-label="" aria-describedby="basic-addon2" />
  <span class="input-group-text bg-secondary " id="basic-addon2">Subcribe</span>
</div>
        </div>

    </div>
  )
}

export default Notice