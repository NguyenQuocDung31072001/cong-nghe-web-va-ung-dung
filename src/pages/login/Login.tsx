import React from 'react'
import { Link } from 'react-router-dom'
import TagComponent from '../../component/Tag'
import { PathName } from '../../config/path.name'

export default function Login() {
  console.log('login')
  return (
    <div className='fixed top-[50%] left-[50%] flex translate-y-[-50%]  translate-x-[-50%] flex-col items-center justify-center p-4 shadow-lg '>
      <p className='text-[36px] font-semibold'>BLOG</p>
      <p className='mt-4 text-[18px] font-medium'>Login To Post New Story</p>
      <div className='mt-4 flex'>
        <div className='rounded-tl-[10px] rounded-bl-[10px] bg-gray-400 px-4 py-2'>
          <i className='fa-solid fa-user'></i>
        </div>
        <input
          className='w-[300px] rounded-tr-[10px] rounded-br-[10px] border-2 border-gray-400 p-2'
          placeholder='Email'
        />
      </div>
      <div className='mt-4 flex'>
        <div className='rounded-tl-[10px] rounded-bl-[10px] bg-gray-400 px-4 py-2'>
          <i className='fa-sharp fa-solid fa-key'></i>
        </div>
        <input
          className='w-[300px] rounded-tr-[10px] rounded-br-[10px] border-2 border-gray-400 p-2'
          placeholder='Password'
          type='password'
        />
      </div>
      <button className='mt-4 w-full bg-blue-400 text-white'>Login</button>
      <div className='flex w-full items-center justify-between py-4'>
        <Link to={PathName.forgotPass}>Forgot Password?</Link>
        <Link to={PathName.register}>Create Account</Link>
      </div>
      <div className='relative w-full '>
        <div className='h-[1px] w-full bg-gray-300' />
        <p className='absolute left-[50%] top-[-12px] translate-x-[-50%] bg-white p-0 px-2 font-medium '>Login by</p>
      </div>
      <div className='mt-4 flex justify-between'>
        <TagComponent icon={<i className='fa-brands fa-facebook-f h-[16px] text-blue-500'></i>} text='Facebook' />
        <TagComponent icon={<i className='fa-brands fa-facebook-f h-[16px] text-blue-500'></i>} text='Facebook' />
        <TagComponent icon={<i className='fa-brands fa-facebook-f h-[16px] text-blue-500'></i>} text='Facebook' />
      </div>
    </div>
  )
}
