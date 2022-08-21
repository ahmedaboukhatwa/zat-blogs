import React, { useState ,createContext } from 'react'
const blogsApi = [
    {
        title:"How to Be Creative",
        author:"Ahmed Abou Khatwa",
        img:"/images/creative.jpg",
        date:"2022-8-18",
        isUpdated:true,
        paragraphs:`
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
    },
    {
        title:"How to read books effectively",
        author:"Ahmed Abou Khatwa",
        img:"/images/how to read books effectively.png",
        date:"2020-9-10",
        isUpdated:true,
        paragraphs:`
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
    },
    {
        title:"How to build a habit in 5 steps",
        author:"Ahmed Abou Khatwa",
        img:"/images/habit.webp",
        date:"2020-9-10",
        isUpdated:true,
        paragraphs:`
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
    },
    {
        title:"How to get leadership skills",
        author:"Ahmed Abou Khatwa",
        img:"/images/how to get leadership skills.jpg",
        date:"2020-9-10",
        isUpdated:true,
        paragraphs:`
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
    }
];
export const blogsContext = createContext();
export default function BlogsProvider({children}) {
    const [blogs,setBlogs] = useState(blogsApi);
    const deleteBlog = (blog,i)=>{
        blogsApi.splice(i, 1);
        setBlogs([...blogsApi]);
    }
    const updateBlog = (blog,i)=>{
        blog.isUpdated= !blog.isUpdated;
        setBlogs([...blogsApi]);
    }
    const addBlog = (newTitle,newAuthor,newParagraph)=>{
        if(newTitle !== "" && newAuthor !== ""&& newParagraph!==""){
            blogsApi.unshift( {
                title:newTitle,
                author:newAuthor,
                img:"/images/new blog.jpg",
                date:new Date().getFullYear()+'-'+ (new Date().getMonth()+1) +'-'+ new Date().getDate(),
                isUpdated:true,
                paragraphs:newParagraph,
            });
        }  
        setBlogs([...blogsApi]);
        }
    return (
        <blogsContext.Provider value={{blogs,deleteBlog,updateBlog,addBlog}}>
            {children}
        </blogsContext.Provider>
    )
}
