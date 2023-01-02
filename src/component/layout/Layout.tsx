import React from 'react'
type Props = {
  children: JSX.Element
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className='fixed top-0 mb-20 flex h-[50px] w-full items-center justify-between bg-white'>
        <div className='flex w-[12%] justify-end text-[20px]'>
          <i className='fa-brands fa-square-facebook mr-2 cursor-pointer'></i>
          <i className='fa-brands fa-square-instagram mr-2 cursor-pointer'></i>
          <i className='fa-brands fa-square-twitter mr-2 cursor-pointer'></i>
          <i className='fa-brands fa-square-pinterest cursor-pointer'></i>
        </div>
        <div className='flex w-[25%] items-center justify-between'>
          <span>HOME</span>
          <span>ABOUT</span>
          <span>WRITE</span>
          <span>LOGOUT</span>
        </div>
        <div className='flex w-[15%] items-center justify-start '>
          <img
            className='mr-4 h-[36px] w-[36px] rounded-full object-cover'
            src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
          />
          <i className='fa-solid fa-magnifying-glass cursor-pointer font-bold text-gray-500'></i>
        </div>
      </div>
      {children}
    </div>
  )
}
export default Layout
