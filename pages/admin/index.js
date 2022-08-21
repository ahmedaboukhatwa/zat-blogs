import React , { Fragment, useContext, useState } from 'react'
import Image from 'next/image'
import { blogsContext } from '../api/blogsContext'
export default function Admin() {
const {blogs,deleteBlog,updateBlog,addBlog} = useContext(blogsContext);
    const blogsList = blogs.map((blog,i)=>{
        return(
            <li key={i} className="flex relative justify-between items-center text-slate-900 border px-5 ">
            <div>
                <h2> {blog.title}</h2>
                <h3> {blog.author}</h3>
                <span> {blog.date}</span>
            </div>
            <div className="">          
                {blog.isUpdated==true?
                <button className="bg-green-300  border rounded p-2" onClick={()=>{updateBlog(blog,i)}}>Edit</button>
                :
                <Fragment>
                <div className='rounded absolute z-50 top-0 right-0 p-5 flex flex-wrap bg-slate-900 w-96'>
                <input className=" border rounded p-2 w-1/3" placeholder="title" 
                onChange={(e)=>{blog.title = e.target.value}}/>

                <input className=" border rounded p-2 w-1/3" placeholder="author"
                onChange={(e)=>{blog.author = e.target.value}}/>

                <input className=" border rounded p-2 w-1/3" placeholder="date" type="date"
                onChange={(e)=>{blog.date = e.target.value}}/>  

                <textarea className='border rounded p-2 my-1 w-full' placeholder="paragraph" 
                onChange={(e)=>{blog.paragraphs = e.target.value}}/>

                <button className="bg-blue-500 text-white border-none my-1 w-full border rounded p-2" onClick={()=>{updateBlog(blog,i)}}>done</button>
                </div>  
                </Fragment>
                }
                <button className="bg-red-300 border rounded p-2" onClick={()=>{deleteBlog(blog,i)}}>Delete</button>
            </div>      
            </li>
        )
    })
    const [newTitle,setNewTitle] = useState("");
    const [newAuthor,setNewAuthor] = useState("");
    const [newParagraph,setNewParagraph] = useState(``);
    return (
    <Fragment>
        <div className="w-full bg-slate-800 text-2xl font-bold text-center py-3 text-white">Admin</div> 
        <div className="flex flex-wrap justify-center
        xl:px-48 
        lg:px-20 
        md:px-20 
        sm:px-20 
        "> 
        <ul className='w-full px-2 my-5 lg:w-1/2'>
        {blogsList}
        </ul>
        <div className="
        lg:w-1/2 lg:px-0
        sm:flex-col 
        text-blue-500
        w-full
        text-xl
        my-5
        px-2
        ">
    <input className=" w-1/2 border rounded p-2" placeholder="title" value={newTitle} onChange={(e)=>{setNewTitle(e.target.value)}}/>
    <input className=" w-1/2  border rounded p-2" placeholder="author" value={newAuthor} onChange={(e)=>{setNewAuthor(e.target.value)}}/>
    <textarea className='border rounded p-2 w-full'placeholder='Paragraph' value={newParagraph} onChange={(e)=>{setNewParagraph(e.target.value)}}/>
    <button className="border rounded p-2 w-full" onClick={()=>{addBlog(newTitle,newAuthor,newParagraph),setNewTitle(""),setNewAuthor(""),setNewParagraph("")}}>Add Blog</button>
    </div>
        </div>
            
    </Fragment>
    )

}

