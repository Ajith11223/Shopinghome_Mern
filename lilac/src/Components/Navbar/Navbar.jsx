import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';
import { removeitem } from '../../ApiCall/Api';

const Navbar = ({cartData,setRefresh}) => {
    
    const [modal,setModal]=useState(false)
    const toggle = () => setModal(!modal);

    //open modal
    const handleOpen =()=>{
        setModal(true)
    }

    // handle
    const handleRemove =async(cartItem)=>{
        try {
            const remov = await removeitem(cartItem)
            if(remov){
              
                setRefresh((pre)=> pre + 1)
            }

        } catch (error) {
            console.log("error delete cart")
        }

    }
    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <div className='d-flex align-items-center justify-content-center gap-5' style={{ height: "80px", color: "white", backgroundColor: "white" }}>
                {/* top */}
                <div className='d-flex gap-2'>
                    <i class="bi bi-exclude" style={{ color: "blue" }}></i>
                    <span style={{ fontSize: "18px", fontWeight: "600", color: "black" }}>Logoipsum*</span>
                </div>

                {/* modal */}
                <Modal isOpen={modal} size='xl' toggle={toggle} >
        <ModalHeader toggle={toggle}>Product Cart</ModalHeader>
        <ModalBody>
        <div className=' d-flex align-items-center justify-content-center gap-3 flex-wrap'>

{
  cartData.length != 0? cartData?.map((item) => {
        return (
            <>
                <div class="card mb-3" style={{ maxWidth: "240px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img style={{ width: "147px", height: "109px", objectFit: "cover" }} src={item.imgLink} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{item.productName}</h5>
                                <p class="card-text"><small class="text-muted">${item.price}</small></p>
                                {/* <p class="card-text"><small class="text-muted">Qty : {item.qty}</small></p> */}
                                        <div>
                                        <button className='btn btn-danger btn-sm' onClick={()=> handleRemove(item)} >Remove</button>
                                        </div>
                                <div className='d-flex gap-1 mt-2'>
                                    <i class="bi bi-star-fill" style={{ color: "yellow" }}></i>
                                    <i class="bi bi-star-fill" style={{ color: "yellow" }}></i>
                                    <i class="bi bi-star-fill" style={{ color: "yellow" }}></i>
                                    <i class="bi bi-star-fill" style={{ color: "yellow" }}></i>
                                    <i class="bi bi-star-fill" style={{ color: "yellow" }}></i>
                                    (12)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }) : <h4>Cart Empty</h4>
}

</div>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '} */}
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

                <div>
                    <div class="btn-group " style={{ width: "110px" }}>
                        <button type="button" class="btn btn-secondary btn-sm">Action</button>
                        <button type="button" class="btn btn-secondary btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            {/* <li><hr class="dropdown-divider"></li> */}
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{ width: "554px" }}>
                    <div class="input-group mb-1">
                        <input type="text" class="form-control" placeholder="Search Here" aria-label="Search Here" aria-describedby="basic-addon2" />
                        <span class="input-group-text" id="basic-addon2">
                            <i class="bi bi-search"></i>
                        </span>
                    </div>
                </div>

                <div className='d-flex gap-3'>
                    <i class="bi bi-heart" style={{ color: "black" }}></i>
                    <i class="bi bi-bag-check-fill" onClick={handleOpen} style={{ color: "black" }}>
                         <span  style={{padding:"0px 4px",backgroundColor:"black",
                         borderRadius:"50%",position:"relative",bottom:"5px",color:"white",fontSize:"12px"}}>{cartData?.length}</span> </i>
                    <i class="bi bi-person-circle" style={{ color: "black" }}></i>
                </div>

                <div>
                    <button className='btn btn-info '>classifieds</button>
                </div>

            </div>

            <div className='d-flex mt-2'>
                <div>
                    <select class="form-select" aria-label="Default select example" style={{ width: "142px" }}>
                        <option selected>All Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className='mt-1'>
                    <ul className='d-flex gap-3' style={{listStyle:"none"}}>
                        <li>Books</li>
                        <li>Electronics</li>
                        <li>Real Estate</li>
                        <li>Cars Bikes</li>
                        <li>Darm-Furniture</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Music</li>
                        <li>Hobies Games</li>
                        <li>Toys</li>
                        <li>Kids</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar