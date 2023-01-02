import React from 'react'
type Props = {
  children: JSX.Element
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className='fixed top-0 flex w-full items-center justify-between bg-white'>
        <div className='flex w-[8%] items-center justify-between text-[20px]'>
          <i className='fa-brands fa-square-facebook'></i>
          <i className='fa-brands fa-square-instagram'></i>
          <i className='fa-brands fa-square-twitter'></i>
          <i className='fa-brands fa-square-pinterest'></i>
        </div>
        <div className='flex w-[25%] items-center justify-between'>
          <span>HOME</span>
          <span>ABOUT</span>
          <span>WRITE</span>
          <span>LOGOUT</span>
        </div>
        <div className='flex w-[10%] items-center justify-between'>
          <img
            className='h-[36px] w-[36px] rounded-full object-cover'
            src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
          />
          <i className='fa-solid fa-magnifying-glass'></i>
        </div>
      </div>
      {children}
    </div>
  )
}
export default Layout
