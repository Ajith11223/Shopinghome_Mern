import React from 'react'
import {Data} from '../../Data'

const Product = () => {
    console.log(Data)
    return (
        <div className='  flex-column mt-5 '> 
            <div className='d-flex align-items-center justify-content-around'>
                <div style={{position:"relative",right:"270px"}} className='p-2'>
                <span style={{fontSize:"30px",fontWeight:"600"}}>Best Deal</span>
                </div>
                <div style={{position:"relative",left:"270px",color:"blue"}} className='p-2'>
                <span>view All</span>
                </div>
            </div>
            <div className=' d-flex align-items-center justify-content-center gap-3 flex-wrap'>
            
            {
                Data?.map((item)=>{
                    return(
                        <>
                        <div class="card mb-3" style={{ maxWidth: "240px" }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img style={{width:"147px",height:"109px",objectFit:"cover"}} src="https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-398887-sm-r875fzgainu-481111530?$1300_1038_PNG$" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <p class="card-text"><small class="text-muted">{item.price}</small></p>
                            <div className='d-flex gap-1'>
                            <i class="bi bi-star-fill" style={{color:"yellow"}}></i>
                            <i class="bi bi-star-fill" style={{color:"yellow"}}></i>
                            <i class="bi bi-star-fill" style={{color:"yellow"}}></i>
                            <i class="bi bi-star-fill" style={{color:"yellow"}}></i>
                            <i class="bi bi-star-fill" style={{color:"yellow"}}></i>
                            (12)
                            </div>
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

export default Product