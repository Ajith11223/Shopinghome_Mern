import React, { useEffect, useState } from 'react'
import { Data } from '../../Data'
// import { Modal } from 'bootstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { GetAllProduct, ProductCreate, createCart } from '../../ApiCall/Api';


const Product = ({setRefresh,refresh}) => {


    const [modal, setModal] = useState(false);


    const [valid, setValid] = useState(false)

    // get all product
    const [allProduct, setAllProduct] = useState([])

    // rendar start
    const [rendar,setRendar]=useState(1)


    // fetching all product
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await GetAllProduct()
                setAllProduct(data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()

    }, [rendar,refresh])

    // form states
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [qty, setQty] = useState('')
    const [imgLink, setImgLink] = useState('')


    const toggle = () => {
        setModal(!modal)
        setProductName('')
        setPrice('')
        setQty('')
        setImgLink('')
    };

    const externalCloseBtn = (
        <button
            type="button"
            className="close"
            style={{ position: 'absolute', top: '15px', right: '15px' }}
            onClick={toggle}
        >
            &times;
        </button>
    );






    // handle submit product form
    const handleSubmit = async () => {
        setValid(true)
        if (productName.length != 0 && price.length != 0 && qty.length != 0 && imgLink.length != 0) {
            // product data
            const productData = {
                productName, price, qty, imgLink
            }

            try {
                const data = await ProductCreate(productData)
                if (data) {
                    setModal(false)
                    setRefresh((pre)=> pre + 1)
                }

            } catch (error) {
                console.log(error)
            }

        } else {
            alert("Please fill form")
        }

    }


    // cart area
    const handleCart =async(productItem)=>{
        try {
            const create = await createCart(productItem)
            if(create){
                setRendar((pre) => pre + 1)
                setRefresh((pre)=> pre + 1)
            }
        } catch (error) {
            console.log(error,"cart areaa")
        }

    }


    return (
        <div className='  flex-column mt-5 '>
            <div className='d-flex align-items-center justify-content-around'>
                <div  className='p-2'>
                    <span style={{ fontSize: "30px", fontWeight: "600" }}>Best Deal</span>
                    <div>

                        <button className='btn btn-success btn-sm' onClick={() => setModal(true)}>Add Product</button>


                        <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
                            <ModalHeader>Add Product</ModalHeader>
                            <ModalBody>

                                <div className='d-flex gap-2 flex-column'>
                                    <div >
                                        <label htmlFor="">Product Name</label>
                                        <input type="text" value={productName} onChange={(ev) => setProductName(ev.target.value)} className='form-control' />
                                    </div>
                                    {
                                        productName.length == 0 && valid ? <span style={{ color: "red" }}>Please Enter Product name</span> : ""
                                    }
                                    <div>
                                        <label htmlFor=""> Price</label>
                                        <input type="number" value={price} onChange={(ev) => setPrice(ev.target.value)} className='form-control' />
                                    </div>
                                    {
                                        price.length == 0 && valid ? <span style={{ color: "red" }}>Please Enter Price </span> : ""
                                    }
                                    <div>
                                        <label htmlFor=""> Qty</label>
                                        <input type="number" value={qty} onChange={(ev) => setQty(ev.target.value)} className='form-control' />
                                    </div>
                                    {
                                        qty.length == 0 && valid ? <span style={{ color: "red" }}>Please Enter Qty</span> : ""
                                    }

                                    <div>
                                        <label htmlFor=""> Image Link</label>
                                        <input type="text" value={imgLink} onChange={(ev) => setImgLink(ev.target.value)} placeholder='Paste image Link' className='form-control' />
                                    </div>
                                    {
                                        imgLink.length == 0 && valid ? <span style={{ color: "red" }}>Please Enter Image Link</span> : ""
                                    }
                                </div>

                            </ModalBody>
                            <ModalFooter>
                                <button className='btn btn-success btn-sm' onClick={handleSubmit} >
                                    Submit
                                </button>{' '}
                                <button className='btn btn-danger btn-sm' onClick={toggle}>
                                    Cancel
                                </button>
                            </ModalFooter>
                        </Modal>

                    </div>
                </div>
                <div style={{ color: "blue" }} className='p-2'>
                    <span>view All</span>
                </div>
            </div>
            <div className=' d-flex align-items-center justify-content-center gap-3 flex-wrap'>

                {
                    allProduct?.map((item) => {
                        return (
                            <>
                                <div class="card mb-3" style={{ maxWidth: "240px" }}>
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img style={{ width: "147px", height: "109px" }} src={item.imgLink} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">{item.productName}</h5>
                                                <p class="card-text"><small class="text-muted">{item.price}</small></p>
                                                <p class="card-text"><small class="text-muted">Qty : {item.qty}</small></p>
                                                        <div>
                                                            {
                                                                item.qty != 0 ?
                                                                <button className='btn btn-primary btn-sm' onClick={()=>handleCart(item)}>Add Cart</button>:
                                                                <button className='btn btn-danger btn-sm' >No Stock</button>
                                                            }
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
                    })
                }

            </div>
        </div>
    )
}

export default Product