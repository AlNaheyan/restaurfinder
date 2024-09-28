import React from 'react'

interface cardProp {
    image: string, 
    name: string, 
    location: string,
    reference: string,
    rating: number,
}

const Cards:React.FC<cardProp> = ({name, image, location, rating, reference}) => {
  return (
    <div className=" border-4 border-zinc-800 p-10 py-14 rounded-lg max-w-sm mx-auto text-left text-zinc-200">
      <div className="mb-4">
        <img src={image} width={300} className="mx-auto rounded-lg"/>
      </div>
      <div className="font-bold text-lg mb-2">
        <a href={reference} className="no-underline hover:no-underline">{name}</a>
      </div>
      <div className="mb-2">
        <h2 className='text-sm opacity-80'>{location}</h2>
      </div>
      <div className="cursor-grab border-2 border-zinc-800 cursor-pointer hover:bg-zinc-800 w-fit rounded p-2 mt-4 font-medium text-yellow-400">
        <span className='text-zinc-300'>Rating: </span>{rating}
      </div>
      <button className='bg-zinc-100 font-medium rounded w-full py-2 mt-10 text-black hover:bg-zinc-100/90 '>
        <a href={reference}> Visit</a>
      </button>
    </div>
  )
}

export default Cards