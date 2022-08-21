import Link from 'next/link'
import Image from 'next/image'
import { Fragment, useContext } from 'react'
import { useRouter } from 'next/router'
import { blogsContext } from '../api/blogsContext'
export default function Blog() {
  const {blogs} = useContext(blogsContext);
  const router = useRouter()
  const { id } = router.query
  return (
    <Fragment>
      {id<blogs.length?<li key={Date.now()} className="flex flex-col align-center w-full 
      rounded my-5 px-2 text-slate-900 cursor-pointer
      lg:w-full lg:flex lg:flex-col lg:px-48
      md:flex md:flex-col md:px-20
      sm:flex sm:flex-col sm:px-20
      ">
      <h2 className='text-3xl font-bold'>{blogs[id].title}</h2>
      <br/>
      <span className="text-blue-500"><strong className="text-slate-900 ">Author: </strong><Link href="https://ahmed-abou-khatwa-cv.vercel.app/"><a target="_blank">{blogs[id].author}</a></Link></span>
      <span> {blogs[id].date}</span>
      <Image className='rounded ' src={blogs[id].img} alt={blogs[id].title} width={700} height={300} />
        <p className=' my-1 '>{blogs[id].paragraphs}</p>
      </li> :
      <div className='absolute top-0 w-full h-full flex items-center justify-center bg-white '>
      <h2 className='text-slate-900 text-2xl flex items-center justify-center'><strong className='text-slate-900 text-5xl border-r-2 px-1 mx-5'>404</strong>This page could not be found</h2>  
      </div>
      }
      
      </Fragment>
  )
}
