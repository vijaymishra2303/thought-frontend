import React from 'react'
import Footer from './Footer'
import CardQ from './CardQ'

function Home() {
    
  return (
    <div>
      
      <section className='quote_header'>
        <div className='container'>
          <div className='row'>
<div className='header_text'>
  <h4>Start your morning with .....

</h4>
  <h1>Inspirational Quotes to Uplift and Empower Your Day
  </h1>
  <h2 className='relative z-10 text-2xl font-bold text-gray-800'>Discover Thoughtes</h2>
 

</div>
          </div>
        </div>
      </section>
      <CardQ></CardQ>
      
      <Footer></Footer>
    </div>
  )
}

export default Home