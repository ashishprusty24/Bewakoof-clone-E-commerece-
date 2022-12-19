import React from "react";
import Slider from "react-slick";
import styles from "./slider.module.css";
import Sliders from "./Sliders";
import { Center } from '@chakra-ui/react'
import { NavLink, useNavigate } from "react-router-dom";
const MensProduct = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2,
      //   },
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };
  const data = [
    {
      IMG: "https://images.bewakoof.com/t320/peace-out-astronaut-full-sleeve-t-shirt-navy-blue-302571-1655748388-1.jpg",
      price: "1199",
      mrp: "2999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/white-half-sleeve-t-shirt-105-1659608382-1.jpg",
      price: "632",
      mrp: "1178",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-blue-t-shirt-1092-1659608123-2.jpg",
      price: "699",
      mrp: "1999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-black-relax-t-shirt-387407-1655748035-5.jpg",
      price: "740",
      mrp: "3299",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-black-panther-portrait-t-shirt-472722-1656143727-1.jpg",
      price: "799",
      mrp: "1999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/meteor-grey-full-sleeve-t-shirt-211959-1655747978-5.jpg",
      price: "399",
      mrp: "1199",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-black-relax-t-shirt-387407-1655748035-5.jpg",
      price: "749",
      mrp: "3999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-blue-t-shirt-115-1655747790-1.jpg",
      price: "499",
      mrp: "999",
    },
  ];
  const dataA = [
    {
      IMG: "https://images.bewakoof.com/t320/starboy-oversized-fit-t-shirt-545603-1664287564-1.jpg",
      price: "499",
      mrp: "999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/don-t-grow-up-half-sleeve-t-shirt-544706-1664256006-1.jpg",
      price: "632",
      mrp: "1178",
    },
    {
      IMG: "https://images.bewakoof.com/t320/house-of-the-dragon-legacy-oversized-fit-t-shirt-544447-1664008381-1.jpg",
      price: "699",
      mrp: "1999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-black-astro-bear-printed-t-shirt-537198-1663162887-1.jpg",
      price: "350",
      mrp: "679",
    },
    {
      IMG: "https://images.bewakoof.com/t320/starboy-oversized-fit-t-shirt-545597-1664287601-1.jpg",
      price: "799",
      mrp: "1999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/gohan-half-sleeve-t-shirt-512884-1655993277-1.jpg",
      price: "399",
      mrp: "1199",
    },
    {
      IMG: "https://images.bewakoof.com/t320/house-of-the-dragon-legacy-half-sleeve-t-shirt-544448-1664168364-1.jpg",
      price: "749",
      mrp: "3999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-black-stripe-minion-relaxed-fit-t-shirt-452883-1655751697-1.jpg",
      price: "499",
      mrp: "999",
    },
  ];

  const navigate = useNavigate();
  return (
    <div id={styles.slide1}>
      <div className={styles.Box}>
        <Slider className={styles.Slider_part} {...settings}>
          <div key="1" className={styles.SingleSlider}>
            <NavLink to="/">
              {" "}
              <img
                src="https://images.bewakoof.com/uploads/grid/app/pants-1x1-upto-70--m-1664359504.gif"
                alt=""
              />
            </NavLink>
          </div>
          <div key="2" className={styles.SingleSlider}>
            <NavLink to="/">
              {" "}
              <img
                src="https://images.bewakoof.com/uploads/grid/app/oof-new-men-1-1664352274.gif"
                alt=""
              />
            </NavLink>
          </div>
          <div key="3" className={styles.SingleSlider}>
            <NavLink to="/">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/b2g1-men-1663944664.jpg"
                alt=""
              />
            </NavLink>
          </div>
          <div key="4" className={styles.SingleSlider}>
            <NavLink to="/">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/revamped-banners-B1G1-men-1663834972.jpg"
                alt=""
              />
            </NavLink>
          </div>
        </Slider>
      </div>
      <div className={styles.nDiv}>
        <div>
          <img
            className={styles.nImg}
            src="https://images.bewakoof.com/uploads/grid/app/New-thumbnail-DOTD-Men-1664353714.gif"
            alt=""
          />
          <Center w={'80%'} m='auto'>
              <h6>DESIGN OF THE DAY</h6>
          </Center>
        </div>
        <div>
          <img
            className={styles.nImg}
            src="https://images.bewakoof.com/uploads/grid/app/bestseller-1660921671.jpg"
            alt=""
          />
          <Center w={'80%'} m='auto'>
              <h6>BESTSELLER</h6>
          </Center>
        </div>
        <div>
          <img
            className={styles.nImg}
            src="https://images.bewakoof.com/uploads/grid/app/custom-men--1660921672.jpg"
            alt=""
          />
          <Center w={'80%'} m='auto'>
              <h6>CUSTOMIZATION</h6>
          </Center>
        </div>
        <div>
          <img
            className={styles.nImg}
            src="https://images.bewakoof.com/uploads/grid/app/new-arrival-1660921673.jpg"
            alt=""
          />
          <Center w={'80%'} m='auto'>
              <h6>NEW ARRIVALS</h6>
          </Center>
        </div>
        <div>
          <img
            className={styles.nImg}
            src="https://images.bewakoof.com/uploads/grid/app/last-sizes-1660921673.jpg"
            alt=""
          />
          <Center w={'80%'} m='auto'>
              <h6>LAST SIZES LEFT</h6>
          </Center>
        </div>
        <div>
          <img
            className={styles.nImg}
            src="https://images.bewakoof.com/uploads/grid/app/plus-size-1660921675.jpg"
            alt=""
          />
          <Center w={'80%'} m='auto'>
              <h6>PLUS SIZES</h6>
          </Center>
        </div>
        <div>
          <img
            className={styles.nImg}
            src="https://images.bewakoof.com/uploads/grid/app/offiicale-merch-1660921674.jpg"
            alt=""
          />
          <Center w={'80%'} m='auto'>
              <h6>OFFIICAL COLLEBRATION</h6>
          </Center>
        </div>
        <div>
          <img
            className={styles.nImg}
            src="https://images.bewakoof.com/uploads/grid/app/vote-1660921675.jpg"
            alt=""
          />
          <Center w={'80%'} m='auto'>
              <h6>VOTE FOR DESIGN</h6>
          </Center>
        </div>
        <div>
          <img
            className={styles.nImg}
            src="https://images.bewakoof.com/uploads/grid/app/PC-1660921675.jpg"
            alt=""
          />
          <Center w={'80%'} m='auto'>
              <h6>PERSONAL CARE</h6>
          </Center>
        </div>
      </div>

      <h3 className={styles.pop}>POPULAR CATEGORIES</h3>
      <div
        className={styles.popDiv}
        onClick={() => {
          navigate("#");
        }}
      >
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-printedtees-1661866118.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-plaintees-1661866117.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-oversizedtees-1661866116.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-7-1662981567.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-8-1662981567.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-6-1662981566.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.popDiv}>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-1661866109.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1661866115.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Kurtas-1657526328.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Boxers-1657526325.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-shorts-1661866118.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-accessories-covers-1661866111.jpg"
            alt=""
          />
        </div>
      </div>
      <h3 className={styles.pop}>DISCOUNT PE DISCOUNT</h3>
      <div className={styles.favD}>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-buy2-at-599-1663944665.jpg"
          alt=""
        />
        <img
          src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-clearance-zone-1663691417.jpg"
          alt=""
        />
      </div>

      <div className={styles.favD}>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/midsize-banner-Flat65Off-men-1663691416.jpg"
          alt=""
        />
        <img
          src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-buy2at899--1--1664261158.jpg"
          alt=""
        />
      </div>
      <h3 className={styles.pop}>BESTSELLER FOR MEN</h3>
      <div className={styles.slidersDiv}>
        <Sliders data={dataA} />
        <NavLink className={styles.navLinks} to="/">
          VIEW ALL
        </NavLink>
      </div>
      {/* images */}
      <div className={styles.Box}>
        <Slider className={styles.Slider_part} {...settings}>
          <div key="1" className={styles.SingleSlider}>
            <NavLink to="/">
              {" "}
              <img
                src="https://images.bewakoof.com/uploads/grid/app/ColorSplash-StaticBanner-Men-01-Live-1663744899.jpg"
                alt=""
              />
            </NavLink>
          </div>
          <div key="2" className={styles.SingleSlider}>
            <NavLink to="/">
              {" "}
              <img
                src="https://images.bewakoof.com/uploads/grid/app/pants-1x1-upto-70--m-1664359504.gif"
                alt=""
              />
            </NavLink>
          </div>
          <div key="3" className={styles.SingleSlider}>
            <NavLink to="/">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/StaticBanner-FestiveCoords-men-01-1664383562.gif"
                alt=""
              />
            </NavLink>
          </div>
          <div key="4" className={styles.SingleSlider}>
            <NavLink to="/">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/revamped-banners-B1G1-men-1663834972.jpg"
                alt=""
              />
            </NavLink>
          </div>
        </Slider>
      </div>
      <h3 className={styles.pop}>CLEREANCE ZONE</h3>
      <div className={styles.slidersDiv}>
        <Sliders data={data} />
        <NavLink className={styles.navLinks} to="/">
          VIEW ALL
        </NavLink>
      </div>
      <h3 className={styles.pop}>THE STOPPED COLLECTION</h3>
      <div className={styles.favD}>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/me-shirt-men-1658682131.jpg"
          alt=""
        />
        <img
          src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Bottomwear-Men-1663680166.jpg"
          alt=""
        />
      </div>
      <div className={styles.favD}>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/play-men-banner-1663664637.jpg"
          alt=""
        />
        <img
          src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Full-Sleeves-Men-1658308584.jpg"
          alt=""
        />
      </div>
      <div className={styles.add}>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png"
          alt=""
        />
      </div>
      <h3 className={styles.pop}>Customize your T-shirts</h3>
      <div className={styles.add}>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/design-survey-desktop-ticker-banner-1646808890.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default MensProduct;


