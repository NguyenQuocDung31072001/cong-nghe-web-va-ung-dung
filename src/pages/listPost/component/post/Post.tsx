import React from 'react'
import { TDataPost } from '../../../../interface/type'

export default function Post({ url, title, authorName, time, description }: TDataPost) {
  return (
    <div className='rounded-[10px] bg-red-500'>
      <img className='h-60 w-96 object-cover' src={url} alt='' />
      <p>{title}</p>
      <p>{time}</p>
      <p>{description}</p>
    </div>
  )
}
