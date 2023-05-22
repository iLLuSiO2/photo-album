import React from "react";
import {
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';

function Gallery(){


  const img1 = require('../images/ab_cutest2.jpg');
  const img2 = require('../images/ab_expectations.jpg');
  const img3 = require('../images/ab_solo.jpg');
  const img4 = require('../images/ab_young.jpg');
  const img5 = require('../images/ab_toocute.jpg');
  const img6 = require('../images/ab_candid.jpeg');

    return (
        
      <div className="gallery_grid">
        <MDBRow>
        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0 first_row'>
          <img
            src={img1}
            className='w-100 shadow-1-strong rounded mb-4 img1'
            alt='Boat on Calm Water'
          />
  
          <img
            src={img2}
            className='w-100 shadow-1-strong rounded mb-4 img2'
            alt='Wintry Mountain Landscape'
          />
        </MDBCol>
  
        <MDBCol lg={4} className='mb-4 mb-lg-0 second_row'>
          <img
            src={img3}
            className='w-100 shadow-1-strong rounded mb-4 img3'
            alt='Mountains in the Clouds'
          />
  
          <img
            src={img4}
            className='w-100 shadow-1-strong rounded mb-4 img4'
            alt='Boat on Calm Water'
          />
        </MDBCol>
  
        <MDBCol lg={4} className='mb-4 mb-lg-0 third_row'>
          <img
            src={img5}
            className='w-100 shadow-1-strong rounded mb-4 img5'
            alt='Waves at Sea'
          />
  
          <img
            src={img6}
            className='w-100 shadow-1-strong rounded mb-4 img6'
            alt='Yosemite National Park'
          />
        </MDBCol>
      </MDBRow>
      </div>
    )
}

export default Gallery;