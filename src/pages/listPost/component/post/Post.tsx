import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PathName } from '../../../../config/path.name'
import { TDataPost } from '../../../../interface/type'

export default function Post({ url, title, authorName, time, description }: TDataPost) {
  const navigate = useNavigate()
  return (
    <div className='mx-2 mb-2 flex h-[350px] w-[300px] flex-col items-center justify-center overflow-hidden rounded-[10px]'>
      <img className='w-full object-cover' src={url} alt='' />
      <p>Author: {authorName}</p>
      <div
        onClick={() => {
          navigate(PathName.create)
        }}
      >
        <p className='cursor-pointer text-[18px] font-semibold text-gray-600'>{title}</p>
      </div>
      <p className='text-[16px] font-semibold text-gray-500'>{time}</p>
      <p>{description.substring(0, 100)}...</p>
    </div>
  )
}
