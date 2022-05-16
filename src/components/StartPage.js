import React from 'react'

export default function StartPage({handleStart}) {
  return (
    <div className="flex flex-col items-center mt-4">
        <img 
          className=" sw-full h-40 w-40" src="https://bestanimations.com/media/earth/726892854earth-spinning-rotating-animation-14.gif" 
          alt="animation of earth spinning" />
        <button 
          onClick={handleStart}
          className="text-xl bg-indigo-700 hover:bg-indigo-500 text-indigo-100 font-bold px-4 py-2 mt-4 rounded-full" 
          type="button">
          Start
        </button>
    </div>
  )
}
