import { Circle } from "./BlogCard"


export const Skeleton = () => {
  return (
<div role="status" className="pt-2 pb-4 animate-pulse">
<div className="border-b-2 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <div className="flex">
            <div className="h-4 w-48 bg-gray-200 rounded-full mb-4"></div>

            </div>
           
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>

          <div className="flex justify-center flex-col pl-2">
            <Circle/>
          </div>
          <div className="pl-2 font-thin text-slate-500 flex justify-center flex-col">
          <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>

          </div>
          
        </div>
        <div className="text-xl font-bold pt-2">
        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>

        </div>
        <div className="text-md font-thin">
        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>

        </div>
        <div className="text-slate-500 text-sm font-thin pt-3">
        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>

        </div>
    </div>
    <span className="sr-only">Loading...</span>
</div>


    
  )
}
