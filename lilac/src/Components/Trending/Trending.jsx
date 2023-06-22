import React from 'react'
import { Data2 } from '../../Data'

const Trending = () => {
    return (
        <div className='d-flex align-items-center justify-content-center mt-4' >

            <div style={{ width: "188px", height: "135px", textAlign: "center" }}>
                <h2>Classified </h2>
                <h2>Products on the week </h2>
                <div className='d-flex gap-5 p-2' style={{ textAlign: "center", position: "relative", left: "50px" }}>
                    <i class="bi bi-arrow-left-circle"></i>
                    <i class="bi bi-arrow-right-circle"></i>
                </div>
                <button className='btn btn-info btn-sm'>Explore <i class="bi bi-caret-right"></i></button>
            </div>

            <div class="row" style={{overflowX:"scroll"}} >
                {
                    Data2?.map((item)=>{
                        return(
                            <>
                            <div class="col">
                    <div class="card mt-4" style={{width:"320px",height:"284px"}}>

                        <div style={{display:"flex",alignItems:"center",justifyContent:"start",}}>
                        <img style={{ height: "150px", aspectRatio: "9/6", borderRadius: "10px" }} src={item.img} class="card-img-top" alt="..." />
                        <button className='btn btn-info btn-sm w-25'>Trending</button>
                        </div>
                        <div class="card-body">
                            <p className=''>{item.name}</p>

                            <div className='d-flex align-items-center justify-content-between'>
                                <span style={{ color: "#00C6D7", fontWeight: "600" }}>
                                    {item.price}
                                </span>
                                <h6>
                                    <i style={{ color: "gray" }} class="bi bi-geo-alt-fill"></i>
                                    <span style={{ color: "gray",fontSize:"12px" }}>{item.location}</span>
                                </h6>

                            </div>
                        </div>
                    </div>
                </div>
                            </>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Trending