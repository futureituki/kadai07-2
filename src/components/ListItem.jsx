import React from 'react'

const ListItem = ({ children, link }) => {
  return (
    <li className='w-full max-w-lg h-full text-center bg-opacity-30 bg-white backdrop-blur-2xl rounded-full px-12 py-4 cursor-pointer'>
        <a href={link} target='_blank' className='no-underline'>
            {children}
        </a>
    </li>
  )
}

export default ListItem