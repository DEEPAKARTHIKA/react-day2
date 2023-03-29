import React from 'react'
import img1 from "../images/cake1.jpg";
import img2 from "../images/cake2.jpg";
import img3 from "../images/cake3.jpg";
import img4 from "../images/cake4.jpg";
import img5 from "../images/cake5.jpg";

import "../Components/web.css";

export default function Web() {
  return (
    <section id='header3'>
    <div className='divmain'>
     <div className='product'>
        <img src={img1} alt="" />
        <h2>Black Forest</h2>
        <h2>Price : Rs.530</h2>
        
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img2} alt="" />
        <h2>Blue Berry</h2>
        <h2>Price : Rs.570</h2>
       
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img3} alt="" />
        <h2>German Choco</h2>
        <h2>Price :Rs.580</h2>
        
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img4} alt="" />
        <h2>Redvelvet</h2>
        <h2>Price :Rs.680</h2>
        
      <a href='' className='btn'>Buy Now</a>
     </div>
    </div>



    <div className='divmain'>
     <div className='product'>
        <img src={img5} alt="" />
        <h2>Strawberry</h2>
        <h2>Price : Rs.650</h2>
        
      <a href='' className='btn'>Buy Now</a>
     </div>
     {/* <div className='product1'>
        <img src={img6} alt="" />
        <h2>MK46</h2>
        <h2>Price : $200</h2>
        <h2>Range : Long </h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img7} alt="" />
        <h2>Sr1911</h2>
        <h2>Price : $20</h2>
        <h2>Type : Pistol</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img8} alt="" />
        <h2>Famas</h2>
        <h2>Price : $350</h2>
        <h2>Range : Long</h2>
      <a href='' className='btn'>Buy Now</a>
     </div> */}

    </div>
    </section>
  )
}