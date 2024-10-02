import React from 'react'

const History = () => {
  return (
    <div id='history' className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
            
            <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            How Did Stoicism Begin?
            </h1>
            <div className="rounded-lg bg-gray-200 p-4">
            <img
              className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[500px] lg:object-center"
              src="marcus.jpg"
              alt=""
            />
          </div>
            <p className="mt-8 max-w-3xl text-lg text-gray-700">
            Around 304 BC, a merchant named Zeno was shipwrecked on a trading voyage. He lost nearly everything. Making his way to Athens, he was introduced to philosophy by the Cynic philosopher Crates and the Megarian philosopher Stilpo, which changed his life. As Zeno later joked, “I made a prosperous voyage when I suffered shipwreck.” He would later move to what became known as the Stoa Poikile, literally meaning “painted porch.” Erected in the 5th century BC—the ruins of it are visible still, some 2,500 years later—the painted porch is where Zeno and his disciples gathered for discussion. While his followers were originally called Zenonians, it is the ultimate credit to Zeno’s humility that the philosophical school he founded, unlike nearly every school and religion before or since, didn’t ultimately carry his name.
            </p>
            <div className="mt-8">
            <a href='https://dailystoic.com/what-is-stoicism-a-definition-3-stoic-exercises-to-get-you-started/'>
            <button
                type="button"
                className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                read more 
              </button></a>  
            </div>
          </div>
          
        </div>
      </div>
  )
}

export default History