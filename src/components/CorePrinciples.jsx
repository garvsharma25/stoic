import React, { useEffect, useState } from 'react'


const CorePrinciples = () => {

 
 
const [quotes,setQuotes] =useState( [
  {
    text: "All that exists is the seed of what will emerge from it.",
    author: "Marcus Aurelius"
  },
  {
    text: "If it doesn't harm your character, how can it harm your life?",
    author: "Marcus Aurelius"
  }
]);
useEffect(()=>{
fetch  ("https://stoic-quotes.com/api/quotes?num=10") 
.then(response=>response.json)

.then(quote =>{
  console.log(quotes);
  setQuotes([...quotes, response.json]);
},[])
})


  return (
    <section id="coreprinciples" className=' flex-row bg-black text-white flex h-max 
    '>
       
        {/* <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight  md:text-4xl lg:text-6xl">
        What Are The 4 Virtues of Stoicism?
            </h1> */}
<img src="4virtues.jpg" className='h-max  w-fit' alt="virutes" />
        {/* <Page/> */}
        {quotes.map((quote)=>(
 <div className="mx-auto  flex
max-w-7xl px-2 flex-col lg:px-0">
 <div className="mx-auto max-w-3xl text-center">
   <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
    {quote.author}
   </h2>
   <p className="mx-auto mt-4 max-w-2xl text-xl">
     {quote.text}
   </p>
 </div>
 </div>









        )
      

          
        
        
        
        )}
   

    </section>
  )
}

export default CorePrinciples