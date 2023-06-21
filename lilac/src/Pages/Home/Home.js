import React from 'react'
import Header from '../../Components/Hearder/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Carosel from '../../Components/Carosel/Carosel'
import Product from '../../Components/Product/Product'
import Notice from '../../Components/Notice/Notice'
import Footer from '../../Components/Footer/Footer'
import Login from '../Login/Login'
import Signup from '../SignUp/Signup'

const Home = ({setLogedUser}) => {
  return (
    <div>
        <Header setLogedUser={setLogedUser}/>
   <Navbar/>
   <Carosel/>
   <Product/>
   {/* <Trending/> */}
   <Notice/>
   <Footer/>
   {/* <Login/> */}
   {/* <Signup/> */}
    </div>
  )
}

export default Home