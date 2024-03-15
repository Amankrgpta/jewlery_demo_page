// App.js

import React from 'react';
import './App.css';
// import necklace1 from "../assets/necklace1.webp";
import necklace1 from '../src/assets/necklace1.webp'
import necklace2 from '../src/assets/necklace2.jpg'
import necklace3 from '../src/assets/necklace3.jpg' 
import earring2 from '../src/assets/earring2.jpg'
import earring3 from '../src/assets/earring3.jpg'
import earring1 from '../src/assets/earring1.webp'
import bracelet1 from '../src/assets/bracelet1.jpg'
import bracelet4 from '../src/assets/bracelet4.jpg'
import bracelet3 from '../src/assets/bracelet3.jpg'
import ring1 from '../src/assets/ring1.jpg'
import ring2 from '../src/assets/ring2.jpg'
import ring3 from '../src/assets/ring3.jpg'
function App() {
  return (
    <div className="App">
      <header className='top'>
        <h1>Jewelry Gallery</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#necklaces">Necklaces</a></li>
            <li><a href="#earrings">Earrings</a></li>
            <li><a href="#bracelets">Bracelets</a></li>
            <li><a href="#rings">Rings</a></li>
            <li><a href="#contact">Contact Us</a></li> 
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>Welcome to our Jewelry Gallery</h2>
          <p>Discover our stunning collection of necklaces, earrings, bracelets, and rings.</p>
        </section>
        <section id="necklaces">
          <h2>Necklaces</h2>
          <div className="gallery">
            {/* Images of necklaces */}
            <img src={necklace1} alt="Necklace 1" style={{ width: '350px', height: 'auto' }}  onClick={() => openLightbox('necklace1.webp')} />
            <img src={necklace2} alt="Necklace 2" style={{ width: '350px', height: 'auto' }}  onClick={() => openLightbox('necklace2.jpg')} />
            <img src={necklace3} alt="Necklace 3" style={{ width: '250px', height: 'auto' }}  onClick={() => openLightbox('necklace3.jpg')} /> 
            {/* Add more images */}
          </div>
        </section>
        {/* Sections for earrings, bracelets, and rings */}
        <section id="earrings">
          <h2>Earrings</h2>
          <div className="gallery">
            {/* Images of earrings */}
            <img src={earring1}alt="Earings 1" style={{ width: '300px', height: 'auto' }} onClick={() => openLightbox('Earings1.webp')} />
            <img src={earring2} alt="Earings 2" style={{ width: '300px', height: 'auto' }}  onClick={() => openLightbox('earings2.jpg')} />
            <img src={earring3}alt="Earings 3" style={{ width: '200px', height: 'auto' }} onClick={() => openLightbox('Earings2.jpg')} />
            {/* Add more images */}
          </div>
        </section>
        <section id="bracelets">
          <h2>Braclets</h2>
          <div className="gallery">
            {/* Images of necklaces */}
            <img src={bracelet1} alt="Bracelet 1" style={{ width: '350px', height: 'auto' }}onClick={() => openLightbox('Earings1.jpg')} />
            <img src={bracelet4} alt="Bracelet 2"  style={{ width: '350px', height: 'auto' }} onClick={() => openLightbox('Earings2.jpg')} />
            <img src={bracelet3} alt="Bracelet 3"  style={{ width: '350px', height: 'auto' }}onClick={() => openLightbox('Earings1.jpg')} />
            {/* Add more images */}
          </div>
        </section>
        <section id="rings">
          <h2>Rings</h2>
          <div className="gallery">
            {/* Images of necklaces */}
            <img src={ring1} alt="Ring 1" style={{ width: '350px', height: 'auto' }} onClick={() => openLightbox('ring1.jpg')} />
            <img src={ring2} alt="Ring 2" style={{ width: '350px', height: 'auto' }} onClick={() => openLightbox('rings2.jpg')} />
            <img src={ring3} alt="Ring 3" style={{ width: '350px', height: 'auto' }} onClick={() => openLightbox('rings3.jpg')} />
            {/* Add more images */}
          </div>
        </section>
        <section id="contact">
  <h2>Contact Us</h2>
  <p>If you have any questions or inquiries, feel free to contact us:</p>
  <ul>
    Email: jewelrygallery@gmail.com <br/>
    Phone: +1234567890 <br/>
    Address: 123 Jewelry Street, Patna, India
  </ul>
</section>

      </main>
      <footer>
        <p className='last'>&copy; 2024 Jewelry Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

function openLightbox(imageSrc) {
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.innerHTML = `
    <div id="lightbox-content">
      <img src="${imageSrc}" alt="Enlarged Image" />
      <button onClick={closeLightbox}>Close</button>
    </div>
  `;
  document.body.appendChild(lightbox);
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.remove();
}

export default App;



