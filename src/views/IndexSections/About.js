import React from 'react';
import img from '../../assets/img/PostelonAi.png'

const About = () => {
 return (
  <div className='aboutUs'>

   <h6><span>About us</span></h6>
   <h2>Our Technology Empowers You</h2>
   <h3>To Unleash Your MEME Creativity</h3>
   <h4>Take Your MEMES to the Next Level</h4>

   <p className="aboutText">
    "Explore MEME AI, inspired by Elon Musk's recent tweet recognizing the impact of memes. Our platform offers a AI meme generator and an NFT marketplace, empowering users to have fun while making the most of memes."
   </p>

   <img src={img} alt="" />
   <p className="aboutText">
    MEME AI COIN is more than just a meme generator; it’s a unique intersection of technology and comedy, where algorithms learn and play with human quirks. Dive into a world where AI doesn’t just learn from humans; it laughs with us!
   </p>

  </div>
 );
};

export default About;