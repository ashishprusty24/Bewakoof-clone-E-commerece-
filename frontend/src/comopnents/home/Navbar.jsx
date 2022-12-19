import React, { useEffect, useState } from "react";
import styles from "./main.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
// import { Tabs,TabList,Tab } from "@chakra-ui/react"
import axios from "axios"

const Navbar = () => {
 
  const [bag,setBag] = useState([])
  const [active, setActive] = useState("Men")
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if(token){
      const data=  axios
      .get("https://messhobackend-production.up.railway.app/cart/")
      .then(data => {
        // console.log(data.data)
        setBag(data.data)
      })
      .catch(error => console.log(error));
    }
   
  })

  return (
    <div id={styles.fixedNav}>
      <div className={styles.upperD}>
        <div className={styles.upperN}>
          <div className={styles.left}>
            <div>
              <NavLink className={styles.linkNav} to="#">
                Offer
              </NavLink>
            </div>
            <div>
              <NavLink className={styles.linkNav} to="#">
                Fanbook
              </NavLink>
            </div>
            <div className="flexItemsCenter">
              <BsPhone className={styles.bsIcon} />
              <NavLink className={styles.linkNav} to="#">
                {" "}
                Download App
              </NavLink>
            </div>
            <div>
              <NavLink className={styles.linkNav} to="/Mbr">
                TriBe Membership
              </NavLink>
            </div>
          </div>
          <div className={styles.RightUN}>
            <div>
              <NavLink className={styles.linkNav} to="#">
                Contact us
              </NavLink>
            </div>
            <div>
              <NavLink className={styles.linkNav} to="#">
                Track Order
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div id={styles.navBar}>
        <div id={styles.menuNav}>
          <li>
            <NavLink to="/">
              <img
                src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
                alt="logo"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              onClick={() => setActive("")}
            >
              MEN
            </NavLink>
            <div id={styles.mainMenuOne}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink
                      to="/product/men"
                      onClick={() => setActive("")}
                    >
                      <h5>TopWear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                       to="/product/men"
                      onClick={() => setActive("")}
                    >
                      Printed T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                    to="/product/men"
                      onClick={() => setActive("")}
                    >
                      Oversized T-shirts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                    to="/product/men"
                      onClick={() => setActive("")}
                    >
                      Fashion T-Shirts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                       to="/product/men"
                      onClick={() => setActive("")}
                    >
                      {" "}
                      Plain T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                       to="/product/men"
                      onClick={() => setActive("")}
                    >
                      Half Sleeve T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                       to="/product/men"
                      onClick={() => setActive("")}
                    >
                      Full Sleave T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Shirts</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Vests</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Co-ord Sets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Kurtas</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Henleys</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Jackets</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Sweatshirt & Hoodie
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Sweaters
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Customize T-shirts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Sweaters
                    </NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/men">
                      <h5>Bottomwear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      onClick={() => setActive("")}
                    >
                      Joggers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Boxers</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Sorts</NavLink>
                  </li>
                  <li>
                    <NavLink to="#"> Pnats</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Jeans</NavLink>
                  </li>
                  <li>
                    <NavLink to="#"></NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Joggers</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Plus Size Store
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Briefs</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="#">
                      <h5>Ethnic Fusion Wear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      onClick={() => setActive("")}
                    >
                      Activewear
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Neharu Jackets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#"></NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      {" "}
                      <h5>Regional</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Marati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#"></NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Bengali T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Gujrati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Tamil T-Shirt
                    </NavLink>
                  </li>
                </ul>

                <hr />
                <ul className={styles.TypesOfMenu}>
                  <li>
                    <NavLink to="#">
                      <img
                        src="https://images.bewakoof.com/nav_menu/Anime-Bewakoof-Homepage-NavigationCircleIcon-final-1632292125.jpg"
                        alt=""
                      />
                      <span>Amine Collection</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navi-collab-icon-1579514101.gif"
                        alt=""
                      />
                      <span>Collbration</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <img
                        src="https://images.bewakoof.com/nav_menu/nav-icon-1617643368.png"
                        alt=""
                      />
                      <span>Shop Unique Brands</span>
                    </NavLink>
                  </li>
                 
                  <li>
                    <NavLink to="#">
                      <img
                        src="https://images.bewakoof.com/nav_menu/bewakoof-men-logo-last-size-1592822253.png"
                        alt=""
                      />
                      <span>Last Size Left</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="#" onClick={() => setActive("")}>
              WOMEN
            </NavLink>
            <div id={styles.mainMenutwo}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink  to="/product/women">
                      <h5>TopWear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/product/women"
                      onClick={() => setActive("")}
                    >
                      Half Sleeve T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/product/women">
                      Full Sleeve T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/product/women"
                      onClick={() => setActive("")}
                    >
                      Printed T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/product/women"> Kurties</NavLink>
                  </li>
                  <li>
                    <NavLink to="/product/women">Vest</NavLink>
                  </li>
                  <li>
                    <NavLink to="#"></NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Polo T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Shirts</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Kurtas</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/product/women">
                      <h5>Bottom Wear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/product/women"
                      onClick={() => setActive("")}
                    >
                      Joggers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Neharu Jackets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#"></NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      {" "}
                      <h5>Reginal</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Marati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#"></NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Bengali T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Gujrati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Tamil T-Shirt
                    </NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="#">
                      <h5>Ethnic Fusion Wear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      onClick={() => setActive("")}
                    >
                      Pyjamas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Neharu Jackets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#"></NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      {" "}
                      <h5>Reginal</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Marati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#"></NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Bengali T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Gujrati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      Tamil T-Shirt
                    </NavLink>
                  </li>
                </ul>
                <ul className={styles.second}>
                  <li>
                    <NavLink to="#">
                      <img
                        src="https://images.bewakoof.com/nav_menu/Anime-Bewakoof-Homepage-NavigationCircleIcon-final-1632292125.jpg"
                        alt=""
                      />
                      <span>Amine Collection</span>
                    </NavLink>
                  </li>
                  {/* <li><NavLink to="#"><https://images.bewakoof.com/nav_menu/WinterWear-Bewakoof-Homepage-NavigationCircleIcon-1630653435.png" alt=""/><span>Winter Collection</span></NavLink></li> */}
                  <li>
                    <NavLink to="#">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navi-collab-icon-1579514101.gif"
                        alt=""
                      />
                      <span>Collebration</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <img
                        src="https://images.bewakoof.com/nav_menu/nav-icon-1617643368.png"
                        alt=""
                      />
                      <span>Shop Unique Brands</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <img
                        src="https://images.bewakoof.com/nav_menu/new-arrival-icon-1625237098.png"
                        alt=""
                      />
                      <span>Upcomming Collection</span>
                    </NavLink>
                  </li>
                  
                </ul>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="#">MOBILE COVERS</NavLink>
            <div id={styles.mainMenuThree}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink to="#">
                      <h2 className={styles.dropH2}>POPULAR</h2>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/product/mobile">
                      <h3>Xiaomi</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/product/mobile">Realme 9 Power</NavLink>
                  </li>
                  <li>
                    <NavLink to="/product/mobile">Xiaomi Mi 10T</NavLink>
                  </li>
                  <li>
                    <NavLink to="/product/mobile">Xiaomi Redami K2</NavLink>
                  </li>
                  <li>
                    <NavLink to="/product/mobile">
                      <h3>Sumsang Galaxy F62</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#"></NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Sumsung Galaxy F41</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Sumsumg Galaxy A30</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="#">
                      <h3>Oneplus</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Oneplus 9R</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Oneplus 8 pro</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Oneplus 8T</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      {" "}
                      <h3>Realme</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Realme 6</NavLink>
                  </li>
                  <li>
                    <NavLink to="#"></NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Realme 5</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="#">
                      <h3>Apple</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">iphone 14</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">iphone 14</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">iphone 14 pro</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <h3>Vivo</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">vovo vii Pro</NavLink>
                  </li>
                  <li>
                    <NavLink to="#"></NavLink>
                  </li>
                  <li>
                    <NavLink to="#"> Vivo X60</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Vivo Y91</NavLink>
                  </li>
                </ul>
                <hr />
                <ul></ul>

                <ul>
                  <li>
                    <NavLink to="#">
                      <span></span>
                      <img
                        src="https://images.bewakoof.com/nav_menu/bewakoof-online-fashion-COTM-mobile-cover-navigation-box-desktop-1612275399.jpg"
                        alt=""
                      />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </div>
        <div id={styles.searchBars}>
          <li>
            <div className={styles.iconInput}>
              <IoSearchOutline />
              <input
                type="text"
                id={styles.inpSrch}
                placeholder="search by product,category or collection"
              ></input>
            </div>
            <div id={styles.searchBarsData}></div>
          </li>
          {!token && (
            <NavLink
              id={styles.loginButton}
              className={styles.lInk}
              to="/login"
              onClick={() => {
                console.log("Hey")
                setActive("")
                // navigate('/login')
              }}
            >
              Login
            </NavLink>
          )}

          {token && (
             <NavLink
             id={styles.loginButton}
             className={styles.lInk}
             to="#"
             onClick={() => {
              setActive("")
              localStorage.clear();
            }}
           >
             Logout
           </NavLink>
          )}
         

         
          <li>
            <p
              className="cursor-pointer text-xl"
              onClick={() => {
                // if (!user?.user?.email) {
                //   return navigate("#");
                // }
                navigate(`/cart`);
              }}
            >
              <span className="relative">
                <IoBagOutline />
                <span className="absolute top-[-5px] left-3 text-[11px] flexItemsCenter justify-center bg-[#fdd835] rounded-full h-[18px] w-[18px] text-center">
                  {bag.length}
                </span>
              </span>
            </p>
          </li>
        </div>
      </div>
      <hr className={styles.hrLine} />

      <div id={styles.dataBar}>
       <li>
           <NavLink  style={{ textDecoration: 'none',
                fontSize: "16px",
                margin: "10px 30px",
                color:"#333",    
                fontWeight:"800" }}
                
            
            to="/product/men"
            onClick={() => {
                
                setActive("Men")
                console.log(active)
            }}
          >
            MEN
          </NavLink>
        </li>
        <li>
          <NavLink
           style={{ textDecoration: 'none',
           fontSize: "16px",
           margin: "10px 30px",
           color:"#333",    
           fontWeight:"800" }}
            to="/product/women"
            onClick={() => setActive("Women")}
          >
            WOMEN
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
           style={{ textDecoration: 'none',
           fontSize: "16px",
           margin: "10px 30px",
           color:"#333",    
           fontWeight:"800" }}
            
            to="/product/mobile"
            onClick={() => setActive("Accessory")}
          >
            ACCESSORIES
          </NavLink>
        </li>
           

      </div>
    </div>
  );
};

export default Navbar;

