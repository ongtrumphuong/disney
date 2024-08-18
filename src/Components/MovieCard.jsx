import React from 'react'
const IMAGES_BASE_URL = "https://image.tmdb.org/t/p/original"


function MovieCard({movie}) {
  return (
    <>
      <img src={IMAGES_BASE_URL + movie.poster_path} className='w-[110px] md:w-[200px] cursor-pointer rounded-lg hover:border-[3px] border-gray-00 hover:scale-110 transition-all duration-150 ease-in'/>
    </>
  )
}

export default MovieCard