import React from 'react'

const Navbar = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <div className='d-flex align-items-center justify-content-center gap-5' style={{ height: "80px", color: "white", backgroundColor: "white" }}>
                {/* top */}
                <div className='d-flex gap-2'>
                    <i class="bi bi-exclude" style={{ color: "blue" }}></i>
                    <span style={{ fontSize: "18px", fontWeight: "600", color: "black" }}>Logoipsum*</span>
                </div>

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
                    <i class="bi bi-bag-check-fill" style={{ color: "black" }}></i>
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