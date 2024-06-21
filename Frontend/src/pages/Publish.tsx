import { Appbar } from "../components/Appbar"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title,settitle] = useState("");
    const [description,setdescription] = useState("");
    const navigate = useNavigate();

return (<div>
            <Appbar />
            <div className="flex justify-center w-full pt-8">
        
                <div className="max-w-screen-lg w-full">       
                    <input onChange={(e)=>{
                        settitle(e.target.value)
                    }} type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title"/>

                </div>
                
            </div>
            <TextEditor onchange = {(e)=>{
                setdescription(e.target.value)
            }}/>
            <div className="flex justify-center">
            <button onClick={async ()=>{
               const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                    title,
                    content:description
                },{
                    headers:{
                        Authorization:localStorage.getItem("token")
                    }
                });
                navigate(`/blog/${response.data.id}`)
               }} type="submit" className="cursor-pointer inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
                   Publish Post 
               </button>
               </div>
        </div>
  )
}

function TextEditor({onchange}:{onchange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}){
    return (
    <form>
        <div className="flex justify-center">
           <div className=" py-2 bg-white rounded-t-lg max-w-screen-lg w-full">
       <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
               <label  className="sr-only">Your comment</label>
               <textarea onChange={onchange} rows={8} className="focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0  focus:ring-0 " placeholder="Write an Article..." required ></textarea>
           </div>
           <div className="flex items-center justify-between px-3 py-2 border-t ">
               
               
           </div>
       </div>
       </div>
    </form>
    )
}
