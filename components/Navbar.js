import Link from 'next/link'
import React, { Fragment } from 'react'
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter()
    const  {pathname}  = router;
    return (
        <Fragment>
            <div className="
            text-blue-500 flex justify-between text-xl py-3 px-2 pb-3 border-b
            xl:px-48
            lg:px-20
            md:px-20
            sm:px-20
            ">
                <Link href="/">
                    <span className="cursor-pointer font-bold italic">Zat Blogs</span>
                </Link>
                {pathname ==="/admin"?
                <Link href="/">
                    <button className="bg-blue-500 text-white px-5 py-1 b-none outline-none rounded" >Go To Client Page</button>
                </Link> :
                <Link href="/admin">
                    <button className="bg-blue-500 text-white px-5 py-1 b-none outline-none rounded" >Go To Admin Page</button>
                </Link>}
                
            </div>
        </Fragment>
    )
}

