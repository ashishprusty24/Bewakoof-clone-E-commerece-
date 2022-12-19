import React from "react";
import styles from "./footer.module.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div id={styles.footdivs}>
      <div id={styles.footer}>
        <h1 className={styles.H1}>Bewakoof</h1>
        <div className={styles.footerGrid}>
          <div>
            <h4>CUSTOMERS SERVICE</h4>
            <p>
              <a href="/">Contact us</a>
            </p>
            <p>
              <a href="/">Track Order</a>
            </p>
            <p>
              <a href="/">Return Order</a>
            </p>
            <p>
              <a href="/">Cancel Order</a>
            </p>
          </div>
          <div>
            <h4>COMPANY</h4>
            <p>
              <a href="/">About us</a>
            </p>
            <p>
              <a href="/">We're Hiring</a>
            </p>
            <p>
              <a href="/">Terms & Conditions</a>
            </p>
            <p>
              <a href="/">Privacy Policy</a>
            </p>
            <p>
              <a href="/">Blog</a>
            </p>
          </div>
          <div>
            <h4>CONNECT WITH US</h4>
            <p>
              <a href="/">4.7M People Like this</a>
            </p>
            <p>
              <a href="/">1M Followers</a>
            </p>
          </div>
          <div>
            <h4>KEEP UP TO DATE</h4>
            <div className={styles.inpbtn}>
              <input placeholder="Enter Email id" />
              <button className={styles.btn}>Subscribe</button>
            </div>
          </div>
          <div>
            <p>
              <a href="/">15 Days return policy</a>
            </p>
            <p>
              <a href="/">Cash on delivery*</a>
            </p>
          </div>
          <div>
            <h4>DOWNLOAD THE APP</h4>
            <div id={styles.imgDiv}>
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://images.bewakoof.com/web/app_android_v1.png"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://itunes.apple.com/in/app/bewakoof/id1100190514?mt=8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://images.bewakoof.com/web/app_ios_v1.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4>100% SECURE PAYMENT</h4>
            <div>
              <img
                src="https://images.bewakoof.com/web/secure-payments-image.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <hr />

        <div className={styles.footerGrid} id={styles.footerGrid}>
          <div>
            <h3>
              <NavLink to="#">MEN'S CLOTHING</NavLink>
            </h3>
            <p>
              <NavLink to="#">Top Wear</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's New Arrivals</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Half Sleeve T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Hoodies & Sweatshirts</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Long Sleeve T-shirts</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Printed T-shirts</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Plain T-shirts</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Vests</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Polo T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Kurtas</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Combo T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Shirts</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Nightwear</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Plus Size Store</NavLink>
            </p>
            <br />
            <p>
              <NavLink to="#">Bottom Wear</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Pajamas</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Boxer Shorts</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Shorts</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Track Pants</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Pants</NavLink>
            </p>
            <br />
            <p>
              <NavLink to="#">Featured</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Flip Flops</NavLink>
            </p>
            <p>
              <NavLink to="#">Men's Sliders</NavLink>
            </p>
            <p>
              <NavLink to="#">Marvel T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="#">Disney T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="#">Avengers T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="#">Star Wars T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="#">Batman T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="#">Superman T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="#">Joker T-Shirts</NavLink>
            </p>
          </div>
          <div>
            <h3>
              <NavLink to="#">WOMEN'S CLOTHING</NavLink>
            </h3>
            <p>
              <NavLink to="#">Women's Top Wear</NavLink>
            </p>
            <p>
              <NavLink to="#">Women's New Arrivals</NavLink>
            </p>
            <p>
              <NavLink to="#">Women's T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="#">Women's Hoodies & Sweatshirts</NavLink>
            </p>
            <p>
              <NavLink to="#">Women's Top Wear</NavLink>
            </p>
            <p>
              <NavLink to="#">Women's 3/4 Sleeve T-Shirts</NavLink>
            </p>
            <p>
              <NavLink to="#">Women's Kurtis</NavLink>
            </p>
            <p>
              <NavLink to="#">Women's Kurtis</NavLink>
            </p>
            <p>
              <NavLink to="#">Women's Nightwear</NavLink>
            </p>
            <p>
              <NavLink to="#">Women's Plus Size Store</NavLink>
            </p>
            <br />
            <p>
              <NavLink to="#">Women's Bottom Wear</NavLink>
            </p>
            <p>
              <a href="#">Women's Pajamas</a>
            </p>
            <p>
              <a href="#">Women's Boxer Shorts</a>
            </p>
            <p>
              <a href="#">Women's Jeans</a>
            </p>
            <p>
              <a href="#">Women's Joggers</a>
            </p>
            <p>
              <a href="#">Women's Shorts</a>
            </p>
            <br />
            <p>
              <a href="#">BAGS</a>
            </p>
            <p>
              <a href="#">Laptop Bags</a>
            </p>
            <p>
              <a href="#">Small Backpacks</a>
            </p>
            <br />
            <p>
              <a href="#">Featured</a>
            </p>
            <p>
              <a href="#">Women's Slides</a>
            </p>
            <p>
              <a href="#">Women's Flip Flops</a>
            </p>
          </div>
          <div>
            <h3>
              <a href="/">MOBILE COVERS</a>
            </h3>
            <p>
              <a href="/">Brands</a>
            </p>
            <p>
              <a href="/">Realme</a>
            </p>
            <p>
              <a href="/">Samsung</a>
            </p>
            <p>
              <a href="/">Xiaomi</a>
            </p>
            <p>
              <a href="/">Oneplus</a>
            </p>
            <p>
              <a href="/">Vivo</a>
            </p>
            <p>
              <a href="/">Oppo</a>
            </p>
          </div>
          <div className={styles.footerEnd}>
            <h4>
              <a href="/">FANBOOK</a>
            </h4>
            <h4>
              <a href="/">OFFERS</a>
            </h4>
            <h4>
              <a href="/">SITEMAP</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
