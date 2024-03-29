import Head from 'next/head'
import Image from 'next/image'

export default function Index() {
  return (
    <div className='md:flex justify-between md:px-20 px-5' id='index'>
      <div className='font-bold mt-9'>
        <Image src='/profile.png' alt='teslim' width={190} height={190} className='object-contain rounded-full hidden md:block' />
        <p className='text-xl mt-5'>Hi, I am</p>
        <p className='text-4xl mt-9'>Teslim of Tesimune</p>
        <p className='text-gray-400 mt-3'>Full-Stack Developer</p>
      </div>
      <div className='mt-0'>
          <Image src="/4421964.jpg" alt="illustration" width={450} height={450} />
      </div>
    </div>
  )
}
