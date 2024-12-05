import React from 'react';
import './FlipBoxStyles.css';
// import pravidhiImage from '../assets/images/new/techlogo.webp';
import graphics from '../assets/images/new/kalkriti.webp';
import content from '../assets/images/new/content.webp';
import eductation from '../assets/images/new/eductation.webp';
import research from '../assets/images/new/Anveshan.webp';
import cultural from '../assets/images/new/SANGAM.webp';
import photo from '../assets/images/new/pratibimb.webp';
import About1 from '../components/about/About1';
import About2 from '../components/about/About2';
import About3 from '../components/about/About3';
import About4 from '../components/about/About4';
import About5 from '../components/about/About5';
import About6 from '../components/about/About6';
import About7 from '../components/about/About7';
import About8 from '../components/about/About8';
// import media from '../assets/images/new/Sampreshan.webp';
import blackbg from '../assets/images/new/purple.webp';


import PageTitle from '../components/pagetitle/PageTitle';




const Wings = () => {
  return (

    <div className='wrapper'>

      <PageTitle title='Wings' desc='Know More About Us Here' />

      <div className="box-container">

        <About1 />
        <About2 />
        <About3 />
        <About4 />
        <About5 />
        <About6 />
        <About7 />
        <About8 />

      </div>
      <style>
      {
        
      }
    </style>
    </div>

  );

};

export default Wings;
