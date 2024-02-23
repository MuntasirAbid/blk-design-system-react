import React from 'react';

const Tokenomics = () => {
 const copyText = () => {
  const textToCopy = document.querySelector('p3').innerText;
  navigator.clipboard.writeText(textToCopy)
   .then(() => {
    prompt('Text copied to clipboard:', textToCopy);
   })
   .catch((error) => {
    console.error('Error copying text: ', error);
   });
 };

 return (
  <div className='Tokenomics'>
   <h1>Tokenomics</h1>
   <h2>Contract Address</h2>
   <p>Contract Renounced</p>
   <p3>0x695d38EB4e57E0f137e36df7c1f0f2635981246b</p3><br />
   <button onClick={copyText}>Copy contact Address</button>

   <div style={{ margin: '20px 0' }}>
    <div className='' style={{ Width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>

     <div className='tableBorder'>
      <h1>Name</h1>
      <h2>MEMEAICOIN</h2>
      <h3>LP Locked</h3>
     </div>
     <div className='tableBorder'>
      <h1>symble</h1>
      <h2>meme</h2>
     </div>
    </div>
    <div className='' style={{ Width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>

     <div className='tableBorder'>
      <h1>Chain</h1>
      <p>Ethereum</p>

     </div>
     <div className='tableBorder'>
      <h1>Decimals</h1>
      <h2>9</h2>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Tokenomics;