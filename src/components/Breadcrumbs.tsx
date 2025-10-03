import React from 'react'



type Props = {
    title:string
}
const Breadcrumbs:React.FC<Props> = ({title})=>{
  return (
    <div className='flex justify-between items-center bg-white px-4 py-2 w-full'>
        <p className="text-xl mb-2 font-semibold text-black">{title}</p>
        
    </div>
  )
}

export default Breadcrumbs