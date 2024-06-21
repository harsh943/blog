import { Blog } from "../Hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const Fullblog = ({blog}:{blog:Blog}) => {
  return (
    <div >
        <Appbar/>
        <div className="flex justify-center">
    <div className="grid grid-cols-12 px-10 w-full pt-10 max-w-screen-xl">
        <div className="col-span-8">
                <div className="text-5xl font-extrabold">
                    {blog.title}
                </div>
                <div className="text-slate-500 pt-4">
                    Posted on 2nd Dec 2003
                </div>
                <div className="pt-2">
                    {blog.content}
                </div>
            </div> 
            <div className="col-span-4">
                <div className="text-slate-600 text-lg">
                    Author
                    </div>
                <div className="flex">
                    <div className="pr-4 flex justify-center flex-col">
                    <Avatar size={"big"} name={blog.author.name || "Anonymous"}/>
                    </div>
                    <div>
                 
                <div className="text-xl font-bold">
                {blog.author.name || "Anonymous"}
                </div>
            
            <div className="pt-2 text-slate-500">
                Here will be author details which shows there ability to attract users
            </div>
                    </div>
                    
                </div>
            </div> 
            

            </div>
        </div>
    </div>
  )
}
