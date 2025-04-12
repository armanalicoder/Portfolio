import React, { useState } from 'react'

function Footer() {
  const [showButton,setShowButton] = useState(false)
  window.addEventListener("scroll",()=>{
    window.scrollY>200 ? setShowButton(true) : setShowButton(false);
  })
  return (
   <footer>
    <div className='text-white text-center p-3'>
      Design & Developed By Arman Ali
    </div>
    {showButton && (
      <div>
     <a href='#home' className='text-white shadow-lg rounded-full w-10 p-2 text-center fixed bottom-0 right-0 z-50 mr-5 mb-5 bg-orange-500'>
     <i class="fa-solid fa-arrow-up"></i>
     </a>
   </div>
    )
    }
   
   </footer>
  )
}

export default Footer
