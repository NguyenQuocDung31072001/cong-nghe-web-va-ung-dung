import React from 'react'

export default function Header() {
  return (
    <div className='relative w-full'>
      <div className='absolute top-[-50px] left-[50%] flex translate-x-[-50%] flex-col items-center justify-center'>
        <p className='text-[20px] font-medium text-gray-700'>AMANA</p>
        <p className='mt-5 text-[50px] font-medium text-gray-700'>Blog Website</p>
      </div>
      <img
        className='h-[400px] w-full object-cover'
        src='https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        alt=''
      />
    </div>
  )
}
