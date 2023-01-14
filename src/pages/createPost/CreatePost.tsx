import React from 'react'

export default function CreatePost() {
  const [fileUpload, setFileUpload] = React.useState()
  const handleFile = (e: any) => {
    setFileUpload(e.target.files[0])
  }
  return (
    <div className=' flex flex-col items-center justify-center '>
      <div className='mb-4 mt-[100px] h-[300px] w-[80%]'>
        <label onChange={handleFile} htmlFor='formId'>
          <input name='' type='file' id='formId' accept='image/png, image/gif, image/jpeg' hidden />
          <img
            className='h-full w-full rounded-[10px] object-cover'
            src={
              fileUpload
                ? URL.createObjectURL(fileUpload)
                : 'https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            }
            alt=''
          />
        </label>
      </div>
      <div className='flex h-[500px] w-[80%] flex-col items-center '>
        <input
          className='h-[48px] w-[300px] border-[1px] border-gray-500 p-2 text-[18px] font-semibold'
          placeholder='Title...'
        />
        <textarea
          className=' mt-[50px] border-[1px] border-gray-500  p-2 text-[18px] focus:outline-none '
          name='description'
          rows={100}
          cols={150}
          placeholder='Tell your story ...'
          // onChange={(e) => setDescription(e.target.value)}
        ></textarea>{' '}
        <div className='mt-2 mb-10 flex w-full justify-end'>
          <button className='bg-green-600 text-white'>Publish</button>
        </div>
      </div>
    </div>
  )
}
