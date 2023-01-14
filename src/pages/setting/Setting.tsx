import React from 'react'

export default function Setting() {
  const [avatarUpload, setAvatarUpload] = React.useState()
  const handleAvatar = (e: any) => {
    setAvatarUpload(e.target.files[0])
  }
  return (
    <div className='mt-[100px] px-10'>
      <p className='text-[18px] font-semibold'>Profile picture</p>
      <div className='flex items-center'>
        <img
          src={avatarUpload ? URL.createObjectURL(avatarUpload) : '/avatar-default.png'}
          alt=''
          className='h-[100px] w-[100px] rounded-[20px] object-cover'
        />
        <label onChange={handleAvatar} htmlFor='formId'>
          <input name='' type='file' id='formId' accept='image/png, image/gif, image/jpeg' hidden />
          <i className='fa-solid fa-user-plus ml-2 cursor-pointer text-[24px] text-gray-500 hover:text-gray-600'></i>
        </label>
      </div>
      <p className='mt-4 font-semibold'>Username</p>
      <input placeholder='dung nguyen' className='focus: w-[80%] border-b-[1px] border-gray-300 p-2 text-gray-500 ' />
      <p className='mt-4 font-semibold'>Email</p>
      <input
        placeholder='dung nguyen@gmail.com'
        className='focus: w-[80%] border-b-[1px] border-gray-300 p-2 text-gray-500 '
      />
      <p className='mt-4 font-semibold'>Password</p>
      <input
        placeholder='password'
        type='password'
        className='focus: w-[80%] border-b-[1px] border-gray-300 p-2 text-gray-500 '
      />
      <div className='mt-4 flex w-[80%] justify-center'>
        <button className='bg-green-600 text-white'>Update</button>
      </div>
    </div>
  )
}
