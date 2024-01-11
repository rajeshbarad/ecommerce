import React from 'react'
import './Header.css';
import Home from './Home';

export default function Header() {
  return (
    <>
    <div className='top-menu'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='logo'>
              <a href='#'>Footwear</a>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='menu'>
              <ul>
                <li><a href='#'>HOME</a></li>
                <li><a href='#'>MEN</a></li>
                <li><a href='#'>WOMEN</a></li>
                <li><a href='#'>ABOUT</a></li>
                <li><a href='#'>CONTAIN</a></li>
              </ul>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='search-group'>
            <input type='text' className='search-in'placeholder='search'></input>
            <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className='sale'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='sale-title'>
              <h4>25% off (Almost) Everything! Use Code: Summer Sale</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Home/>
    </>
  )
}
