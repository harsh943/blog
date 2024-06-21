import { Link } from "react-router-dom";
interface BlogCardProps{
    authorName:string;
    title:string;
    content:string;
    publishDate:string;
    id:string;
}
export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishDate,
}:BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="border-b-2 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <div className="flex">
            <Avatar name={authorName}/> 
            </div>
           
          <div className="font-extralight pl-2 text-sm flex justify-center flex-col ">
            {authorName} </div>
          <div className="flex justify-center flex-col pl-2">
            <Circle/>
          </div>
          <div className="pl-2 font-thin text-slate-500 flex justify-center flex-col">
           {publishDate}
          </div>
          
        </div>
        <div className="text-xl font-bold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,100)+"..."}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-3">
            {`${Math.ceil(content.length/100)} Minutes Read`}
        </div>
    </div>
    </Link>
  )
}

export function Avatar({name, size = "small"}:{name:string, size ?: "small" | "big"}){
    return <div className={`relative inline-flex items-center justify-center ${size==="small"?"w-6 h-6":"w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
    <span className={`${size==="small"? "text-xs":"text-sm"} font-xs text-gray-600 dark:text-gray-300`}>{name[0]}</span>
</div>
}
export function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}
