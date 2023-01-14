import React from 'react'
import { postData } from '../../fake_data/post.data'
import { TDataPost } from '../../interface/type'
import Header from './component/header/Header'
import Post from './component/post/Post'

export default function ListPost() {
  return (
    <div className='mt-20 w-full  '>
      <Header />
      <div className='mt-10 flex flex-wrap '>
        {postData.map((data: TDataPost, index) => {
          return <Post key={index} {...data} />
        })}
      </div>
    </div>
  )
}
