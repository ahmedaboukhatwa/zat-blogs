import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Fragment, useContext } from 'react'
import styles from '../styles/Home.module.css'
import { blogsContext } from './api/blogsContext'
export default function Home() {
  const {blogs} = useContext(blogsContext);
  console.log(blogs)
  const blogsList = blogs.map((blog,i)=>{
    return(
      <Link href={"/blogs/"+i} key={i}>
        <li  className="rounded my-5 text-slate-900 px-2 cursor-pointer
        xl:w-2/4 xl:px-2
        lg:w-full lg:flex lg:flex-col lg:px-0
        md:flex md:flex-col md:px-0
        sm:flex sm:flex-col sm:px-0
        ">
        <Image className='rounded' src={blog.img} alt={blog.name} width={570} height={300} />
        <span className="text-blue-500"><strong className="text-slate-900 ">Author: </strong><Link href="https://ahmed-abou-khatwa-cv.vercel.app/"><a target="_blank">{blog.author}</a></Link></span>
        <h2 className='text-center text-3xl'>{blog.title}</h2>
        <p className='break-all'>{blog.paragraphs}</p>
        <br/>
        <span> {blog.date}</span>
        </li>
      </Link>
    )
  })
  return (
    <Fragment>
      <ul className='flex justify-between flex-wrap 
      xl:px-48
      lg:px-48
      md:px-20
      sm:px-20'>
      {blogsList}
      </ul>
    </Fragment>
  )
}
