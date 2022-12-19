import React, { useEffect, useState } from "react";
import Bag from "./Bag";
import { CartWrapper } from "./cart.styled.js";
import axios from "axios";
import { Button, HStack, Heading, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Cart = () => {
  let [mrp, setMrp] = useState(0);
  let [total, setTotal] = useState(0);
  const [bag, setBag] = useState([]);
  useEffect(() => {
    const data = axios
      .get("https://messhobackend-production.up.railway.app/cart/")
      .then((data) => {
        console.log(data.data, "cartdata");
        setBag(data.data);
      })
      .catch((error) => console.log(error));
    let sum = bag.reduce(function (accumulator, curValue) {
      return accumulator + curValue.price;
    }, 0);
    setMrp(sum);
    setTotal(mrp - 200);
    console.log(sum);
  }, [bag]);

  const token = localStorage.getItem("token");
  return (
    <div style={{ marginTop: "11rem" }}>
      {!token && (
        <>
          <h1>
            You need to <Link to="/login">Login</Link> First
          </h1>
        </>
      )}
      {token && (
        <CartWrapper>
          <div>
            <div style={{ textAlign: "left" }} className="headingDiv">
              <span>My Bag {bag.length} </span> item(s)
            </div>
            <div className="container">
              <div className="leftcont">
                <div className="truckDiv">
                  <img
                    className="truckmove"
                    src="https://images.bewakoof.com/web/Red-truck.png"
                    alt="truck"
                  />
                  <span>Yay! You get FREE delivery on this order</span>
                </div>
                <div style={{ width: "100%" }}>
                  {bag.map((el) => {
                    return <Bag key={el._id} {...el} />;
                  })}
                </div>
              </div>
              <div className="rightcont">
                <div className="saveExtra">Save extra ₹230 with TriBe</div>
                <div className="simplehappy10">
                  Whistles! Get extra 10% Cashback on prepaid orders above
                  Rs.699. Coupon code - HAPPY10.
                </div>

                <div className="priceSection">
                  <div className="coupenDiv">
                    <span>Have a Coupon / Referral / Gift Card ?</span>
                    <span>Redeem </span>
                  </div>
                  <div className="prsummary">Price Summary</div>
                  <div className="summarysec">
                    <div>
                      <span>Total MRP (Incl. of taxes) </span>
                      <span>₹ {mrp}</span>
                    </div>
                    <div>
                      <span>Delivery Fee </span>
                      <span>FREE</span>
                    </div>
                    <div>
                      <span>Bag Discount </span>
                      <span></span>
                      200
                    </div>
                    <div>
                      <span>Subtotal </span>
                      <span></span>₹ {total}
                    </div>
                  </div>
                  <div className="saving">
                    You are saving ₹ 200 on this order
                  </div>
                  <div className="totalDiv">
                    <div>
                      <p>Total</p>
                      <p>₹ {total}</p>
                    </div>
                   
                      <Button variant="contained">   <Link to="/payment">Continue</Link> </Button>
                      About
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CartWrapper>
      )}
    </div>
  );
};

export default Cart;
