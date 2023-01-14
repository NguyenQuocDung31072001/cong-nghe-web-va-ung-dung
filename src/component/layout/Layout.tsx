import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PathName } from '../../config/path.name'
type Props = {
  children: JSX.Element
}
const Layout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='fixed top-0 z-50 mb-2 flex h-[60px] w-full items-center justify-between bg-white'>
        <div className='flex w-[12%] justify-end text-[20px]'>
          <i className='fa-brands fa-square-facebook mr-2 cursor-pointer'></i>
          <i className='fa-brands fa-square-instagram mr-2 cursor-pointer'></i>
          <i className='fa-brands fa-square-twitter mr-2 cursor-pointer'></i>
          <i className='fa-brands fa-square-pinterest cursor-pointer'></i>
        </div>
        <div className='flex w-[25%] min-w-[300px] items-center justify-between'>
          <span onClick={() => navigate(PathName.home)} className='cursor-pointer'>
            HOME
          </span>
          <span>ABOUT</span>
          <span onClick={() => navigate(PathName.create)} className='cursor-pointer'>
            WRITE
          </span>
          <span className='cursor-pointer' onClick={() => navigate(PathName.login)}>
            LOGOUT
          </span>
        </div>
        <div className='flex w-[15%] items-center justify-start '>
          <img
            onClick={() => navigate(PathName.setting)}
            className='mr-4 h-[36px] w-[36px] cursor-pointer rounded-full object-cover'
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
