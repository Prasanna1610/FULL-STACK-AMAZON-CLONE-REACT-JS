import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className='home'>
            <div className="home_container">
            <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className='home_row'>
            <Product 
            id="12321341"
            title="Zack Snyder's Justice League - Bluray"
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/718fAsSGrqS._SL1500_.jpg"
            />
            <Product
                        id="49538094"
                        title="THE BATMAN - FUNKO POP"
                        price={34.49}
                        rating={4}
                        image="https://cdn11.bigcommerce.com/s-0kvv9/images/stencil/1280x1280/products/288643/405820/apisee53r__37563.1568215193.jpg"
                       />

            {/*product*/}
            
        </div>

        <div className='home_row'>
        <Product
                    id="4903850"
                    title="THE HUMAN SPIDER T-Shirt"
                    price={199.99}
                    rating={3}
                    image="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1624031211_2510601.jpg" />
            <Product 
             id="23445930"
             title="VENOM DVD Collection"
             price={59.99}
             rating={1}
             image="https://cdn.hmv.com/r/w-640/hmv/files/58/58b1186a-120c-4e92-9355-985df5475736.jpg"
           />
            <Product
             id="3254354345"
             title="God Of War-Day one edition"
             price={598.99}
             rating={4}
             image="https://preview.redd.it/6yquel5ks7k01.jpg?auto=webp&s=abece4a27d4b9e480339ac80552f17c0c4ba8879"
            />
            {/*product*/}
            {/*product*/}
            {/*product*/}
        </div>

        <div className='home_row'>
        <Product
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={499.99}
                    rating={5}
                    image="https://static0.srcdn.com/wordpress/wp-content/uploads/2020/09/PS5-Box-Art.jpg"
                   />
        {/*product*/}
        </div>


            </div>
            
        </div>
    )
}

export default Home
