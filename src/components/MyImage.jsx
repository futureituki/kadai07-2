import React from 'react'
import myFace from '../assets/my-face.jpg'
const MyImage = () => {
  return (
      <img className='w-36 h-36 object-cover border-4 border-red-300 rounded-full' src={myFace} alt='my face image' width={50} height={50}/>
  )
}

export default MyImage