import React from 'react'

type TTag = {
  icon: React.ReactNode
  text: string
}
export default function TagComponent({ icon, text }: TTag) {
  return (
    <div className='border-gray-300px-2 group mx-2 flex cursor-pointer items-center justify-center rounded-[4px] border-[1px] px-2 duration-500 hover:border-blue-400'>
      {icon}
      <p className='ml-2 p-0 group-hover:text-blue-400'>{text}</p>
    </div>
  )
}
