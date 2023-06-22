import React, { useEffect, useState } from 'react'
import Header from '../../Components/Hearder/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Carosel from '../../Components/Carosel/Carosel'
import Product from '../../Components/Product/Product'
import Notice from '../../Components/Notice/Notice'
import Footer from '../../Components/Footer/Footer'
import Login from '../Login/Login'
import Signup from '../SignUp/Signup'
import Trending from '../../Components/Trending/Trending'
import { getCartData } from '../../ApiCall/Api'

const Home = ({setLogedUser}) => {

  const [cartData,setCartData] =useState([])
  const [refresh,setRefresh]=useState(1)

  useEffect(()=>{
const fetchCartData = async()=>{
  try {
    const {data}=await getCartData()
    setCartData(data.data)
  } catch (error) {
    console.log(error)
  }
}
fetchCartData()
  },[refresh])

  return (
    <div>
   <Header setLogedUser={setLogedUser}/>
   <Navbar cartData={cartData} setRefresh={setRefresh}/>
   <Carosel/>
   <Product setRefresh={setRefresh} refresh={refresh}/>
   <Trending />
   <Notice/>
   <Footer/>
   {/* <Login/> */}
   {/* <Signup/> */}
    </div>
  )
}

export default Home