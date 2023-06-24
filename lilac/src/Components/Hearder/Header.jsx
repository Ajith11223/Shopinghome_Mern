import React, { useContext } from 'react'
import AuthContext from '../../Context/AuthContext'


const Header = () => {

    const {setLogin}=useContext(AuthContext)

    // logout
    const handleLogOut =()=>{
        setLogin(false)
        localStorage.clear("user")
    }
    return (
        <div className='bg-primary d-flex align-items-center justify-content-around flex-wrap' style={{ minHeight: "40px", color: "white" }}>
            <div className='d-flex gap-3'>
                <div className='d-flex gap-2'>
                    <i className="bi bi-telephone size-10" ></i>
                    <span>9567593962</span>

                </div>
                <div className='d-flex gap-2'>
                    <i class="bi bi-envelope"></i>
                    <span>abc@gmail.com</span>
                </div>
            </div>

            {/* right end */}
            <div className='d-flex gap-3'>
                <div className='d-flex gap-2'>
                    <i class="bi bi-geo-alt-fill" style={{fontSize:"14px"}}></i>
                    <span>Calicut</span>

                </div>
                <div>
                    |
                </div>
                <div className='d-flex gap-2'>
                    <div className="btn-group">
                        <button className="btn btn-muted btn-sm dropdown-toggle " style={{ color: "white" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            $ Dollar (us)
                        </button>
                        <ul className="dropdown-menu">
                            ...
                        </ul>

                        <div className="btn-group">
                            <button className="btn btn-muted btn-sm dropdown-toggle " style={{ color: "white" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                EN
                            </button>
                            <ul className="dropdown-menu">
                                ...
                            </ul>
                        </div>

                        <div style={{textAlign:"end"}}>
                        <button className='btn btn-dark btn-sm' onClick={handleLogOut}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Header