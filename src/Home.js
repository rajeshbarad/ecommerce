import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {
  return (
    <>
     <Carousel>
      <Carousel.Item >
        <div className='imgg'>
        <img src='/img/pexels-pixabay-267301.jpg'/>
        </div>
        <Carousel.Caption>
            <div className='slider-text-inner'>
          <h1>MEN'S</h1>
          <h3>SHOES</h3>
          <h4>COLLECTION</h4>
          <p>New trending shoes</p>
          <p>
            <button>
            Shop Collection
            </button>
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='imgg'>
      <img src='/img/hoka-zinal-13085-1643565794.jpg'/>
      </div>
        <Carousel.Caption>
        <div className='slider-text-inner'>
          <h1>MEN'S</h1>
          <h3>SHOES</h3>
          <h4>COLLECTION</h4>
          <p>New trending shoes</p>
          <p>
            <button>
            Shop Collection
            </button>
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='imgg'>
      <img src='/img/run-reebok-running-shoes-64e3beadbe692.jpg'/>
      </div>
        <Carousel.Caption>
        <div className='slider-text-inner'>
          <h1>MEN'S</h1>
          <h3>SHOES</h3>
          <h4>COLLECTION</h4>
          <p>New trending shoes</p>
          <p>
            <button>
            Shop Collection
            </button>
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className='lib-intro'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center intro'>
            <h2>It started with a simple idea: Create quality, well-designed products that I wanted myself.</h2>
          </div>
        </div>
      </div>
    </div>

    <div className='lib-product'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='featured text-center'>
              <img src='/img/pexels-photo-267320.jpeg'/>
              <p>
                <a href='#'>Shop Men's Collection</a>
              </p>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='featured text-center'>
              <img src='/img/item-10.jpg'/>
              <p>
                <a href='#'>Shop Women's Collection</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='product-Seller'>
      <h1>
      BEST SELLERS
      </h1>
      <div className='container'>
        <div className='row '>
          <div className='col-md-3 text-center'>
              <div className='product-enter border'>
                <img src='/img/item-1.jpg'/>
                 <h2>Women's Boots Shoes Maca</h2>
                 <span>$139.00</span>
              </div>
            </div>
          <div className='col-md-3 text-center'>
              <div className='product-enter border'>
                <img src='/img/item-2.jpg'/>
                 <h2>Women's Minam Meaghan</h2>
                 <span>$139.00</span>
              </div>
          </div>
          <div className='col-md-3 text-center'>
              <div className='product-enter border'>
                <img src='/img/item-3.jpg'/>
                 <h2>Men's Taja Commissioner</h2>
                 <span>$139.00</span>
            </div>
          </div>
          <div className='col-md-3 text-center'>
              <div className='product-enter border'>
                <img src='/img/item-4.jpg'/>
                 <h2>Russ Men's Sneakers</h2>
                 <span>$139.00</span>
              </div>
          </div>
          <div className='col-md-3 text-center'>
              <div className='product-enter border'>
                <img src='/img/item-5.jpg'/>
                 <h2>Women's Boots Shoes Maca</h2>
                 <span>$139.00</span>
              </div>
          </div>
          <div className='col-md-3 text-center'>
              <div className='product-enter border'>
                <img src='/img/item-6.jpg'/>
                 <h2>Women's Boots Shoes Maca</h2>
                 <span>$139.00</span>
              </div>
          </div>
          <div className='col-md-3 text-center'>
              <div className='product-enter border'>
                <img src='/img/item-7.jpg'/>
                 <h2>Women's Boots Shoes Maca</h2>
                 <span>$139.00</span>
              </div>
          </div>
          <div className='col-md-3 text-center'>
              <div className='product-enter border'>
                <img src='/img/item-8.jpg'/>
                 <h2>Women's Boots Shoes Maca</h2>
                 <span>$139.00</span>
              </div>
          </div>
          <div className='col-md-3 text-center'>
              <div className='product-enter border'>
                <img src='/img/item-9.jpg'/>
                 <h2>Women's Boots Shoes Maca</h2>
                 <span>$139.00</span>
              </div>
          </div>
          <div className='col-md-3 text-center'>
              <div className='product-enter border'>
                <img src='/img/item-10.jpg'/>
                 <h2>Women's Boots Shoes Maca</h2>
                 <span>$139.00</span>
              </div>
          </div>
          <div className='col-md-3 text-center'>
              <div className='product-enter border'>
                <img src='/img/item-11.jpg'/>
                 <h2>Women's Boots Shoes Maca</h2>
                 <span>$139.00</span>
              </div>
          </div>
          <div className='col-md-3 text-center'>
              <div className='product-enter border'>
                <img src='/img/item-12.jpg'/>
                 <h2>Women's Boots Shoes Maca</h2>
                 <span>$139.00</span>
              </div>
          </div>
          <div className='col-md-3 text-center'>
              <div className='product-enter border'>
                <img src='/img/item-13.jpg'/>
                 <h2>Women's Boots Shoes Maca</h2>
                 <span>$139.00</span>
              </div>
          </div>
          <div className='col-md-3 text-center'>
              <div className='product-enter border'>
                <img src='/img/item-14.jpg'/>
                 <h2>Women's Boots Shoes Maca</h2>
                 <span>$139.00</span>
              </div>
          </div>
          <div className='col-md-3 text-center'>
              <div className='product-enter border'>
                <img src='/img/item-15.jpg'/>
                 <h2>Women's Boots Shoes Maca</h2>
                 <span>$139.00</span>
              </div>
          </div>
          <div className='col-md-3 text-center'>
              <div className='product-enter border'>
                <img src='/img/item-16.jpg'/>
                 <h2>Women's Boots Shoes Maca</h2>
                 <span>$139.00</span>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div className='slider-text-inner2 text-center'>
      <p>
        <button className='btn2'>Shop All Products</button>
      </p>
    </div>

    <div className='colorlib-partner text-center'>
      <h2>Trusted Partners</h2>
      <div className='container'>
        <div className='row row-cols-lg-5'>
          <div className='col'>
          <div className='partner-logo'>
          <img src='/img/brand-1.jpg'/>
          </div>
        </div>
        <div className='col'>
          <div className='partner-logo'>
          <img src='/img/brand-2.jpg'/>
          </div>
        </div>
        <div className='col'>
          <div className='partner-logo'>
          <img src='/img/brand-3.jpg'/>
          </div>
        </div>
        <div className='col'>
          <div className='partner-logo'>
          <img src='/img/brand-4.jpg'/>
          </div>
        </div>
        <div className='col '>
          <div className='partner-logo'>
          <img src='/img/brand-5.jpg'/>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="footer-area">
      <div className='container'>
        <div className='row row-cols-md-5'>
          <div className='col footer-col'>
            <h4>About Footwear</h4>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
            <ul className='footer-icon'>
              <li><i class="fa-brands fa-twitter"></i></li>
              <li><i class="fa-brands fa-facebook-f"></i></li>
              <li><i class="fa-brands fa-linkedin"></i></li>
              <li><i class="fa-brands fa-dribbble"></i></li>
            </ul>
          </div>
          <div className='col footer-col'>
            <h4>Customer Care</h4>
            <ul>
              <li><a href='#'>Contact</a></li>
              <li><a href='#'>Returns/Exchange</a></li>
              <li><a href='#'>Gift Voucher</a></li>
              <li><a href='#'>Wishlist</a></li>
              <li><a href='#'>Special</a></li>
              <li><a href='#'>Customer Services</a></li>
              <li><a href='#'>Site maps</a></li>
             
            </ul>
          </div>
          <div className='col footer-col'>
            <h4>Information</h4>
            <ul>
              <li><a href='#'>About us</a></li>
              <li><a href='#'>Delivery Information</a></li>
              <li><a href='#'>Privacy Policy</a></li>
              <li><a href='#'>Support</a></li>
              <li><a href='#'>Order Tracking</a></li>
            </ul>
          </div>
          <div className='col footer-col'>
            <h4>News</h4>
            <ul>
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>Press</a></li>
              <li><a href='#'>Exhibitions</a></li>
            </ul>
          </div>
          <div className='col footer-col'>
            <h4>Contact Information</h4>
            <ul>
              <li><a href='#'>291 South 21th Street, Suite 721 New York NY 10016</a></li>
              <li><a href='#'>+ 1235 2355 98</a></li>
              <li><a href='#'>info@yoursite.com</a></li>
              <li><a href='#'>yoursite.com</a></li>
            </ul>
          </div>
        </div>
        <div className='copy'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <p>Copyright © 2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by Colorlib Demo Images: Unsplash Pexels.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
