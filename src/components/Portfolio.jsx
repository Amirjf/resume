import React from 'react'
import './portfolio.css'
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import img7 from '../img/img7.jpg';
import img8 from '../img/img8.jpg';
import img9 from '../img/img9.jpg';


function portfolio() {
    return (
        <>
<h3 className="pt-5 pb-5 text-white">Portfolio</h3>
<div className="col-md-4 test">
  <div class="portfolio-card">

  <div class="frame">
        <a href="https://brocakonkur.com">
    <img src={img6} alt="" />
    </a>
  </div>
  <div className='title text-white text-center'>
        <a href="https://brocakonkur.com">
        <h3>Broca Konkur</h3>
        </a>
  </div>
    </div>
</div>

<div className="col-md-4 test">
  <div class="portfolio-card">
  <div class="frame">
        <a href="https://pasazhonline.com">
    <img src={img5} alt="" />
    </a>
  </div>
    </div>
    <div className='title text-white text-center'>
        <a href="https://pasazhonline.com">
        <h3>Pasazh Online</h3>
        </a>
  </div>
</div>
<div className="col-md-4 test">
  <div class="portfolio-card">
  <div class="frame">
        <a href="https://KhatKhatiGallery.com">

    <img src={img4} alt="" />
        </a>
  </div>
  <div className='title text-white text-center'>
        <a href="https://KhatKhatiGallery.com">
        <h3>KhatKhati Gallery</h3>
        </a>
  </div>
    </div>
</div>
<hr />
<br />
<br />

<div className="col-md-4 test">
  <div class="portfolio-card">
  <div class="frame">
        <a href="https://wuid-co.com">
    <img src={img3} alt="" />
    </a>
  </div>
  <div className='title text-white text-center'>
        <a href="https://wuid-co.com">
        <h3>Wüid Company</h3>
        </a>
  </div>
    </div>
</div>
<div className="col-md-4 test">
  <div class="portfolio-card">
  <div class="frame">
        <a href="https://poleum.com">
    <img src={img2} alt="" />
    </a>
  </div>
  <div className='title text-white text-center'>
        <a href="https://poleum.com">
        <h3>Poleum</h3>
        </a>
  </div>
    </div>
</div>
<div className="col-md-4 test">
  <div class="portfolio-card">
  <div class="frame">
        <a href="https://aradbabyshop.com">
    <img src={img1} alt="" />
    </a>
  </div>
  <div className='title text-white text-center'>
        <a href="https://aradbabyshop.com">
        <h3>Arad Baby Shop</h3>
        </a>
  </div>
    </div>
</div>
<div className="col-md-4 test">
  <div class="portfolio-card">
  <div class="frame">
        <a href="https://KiffMiff.ir">
    <img src={img7} alt="" />
    </a>
  </div>
  <div className='title text-white text-center'>
        <a href="https://KiffMiff.ir">
        <h3>Kiff Miff</h3>
        </a>
  </div>
    </div>
</div>
<div className="col-md-4 test">
  <div class="portfolio-card">
  <div class="frame">
        <a href="https://StarWoood.ir">
    <img src={img8} alt="" />
    </a>
  </div>
  <div className='title text-white text-center'>
        <a href="https://StarWoood.ir">
        <h3>StarWood</h3>
        </a>
  </div>
    </div>
</div>
<div className="col-md-4 test">
  <div class="portfolio-card">
  <div class="frame">
        <a href="https://behsanaco.ir">
    <img src={img9} alt="" />
    </a>
  </div>
  <div className='title text-white text-center'>
        <a href="https://behsanaco.ir">
        <h3>Behsana Company</h3>
        </a>
  </div>
    </div>
</div>

        </>
    )
}

export default portfolio;