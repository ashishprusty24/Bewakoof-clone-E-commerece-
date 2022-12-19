

import React, { useState } from "react";
import {Bagwrapper} from "./bag.styled"

 const Bag = ({
  _id,
  title,
  price,
  strikeprice,
  image,
  qty=1,
  size,
}) => {
  
  return (
    <>
      <Bagwrapper>
        <div style={{width: '100%'}} className="productDiv">
          <div >
            <div>
              <div>{title}</div>
              <div style={{textAlign: 'left'}}>
                <span id="spfirst">₹{price}</span>
                <span ><s>₹{strikeprice}</s></span>
              </div>
              <div style={{textAlign: 'left'}} id="savedprice">You saved ₹{strikeprice - price} !</div>
             
            </div>
            <div>
              <img className="imgtag" src={image} alt="invalid-image" />
            </div>
          </div>
          <div className="buttonSection">
            <div className="cursor-pointer" >
              Remove
            </div>
            <div className="cursor-pointer" >
              Move to Wishlist
            </div>
          </div>
        </div>
      </Bagwrapper>
    </>
  );
};

export default Bag;

