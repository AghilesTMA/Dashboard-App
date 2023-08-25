import React from 'react'

const PageTop = ({title,text}) => {
  return (
    <div className=' w-full flex flex-col px-2 '>
      <h2 className=' font-bold text-xl'>{title}</h2>
      <h3 className=' font-semibold text-md text-Neutral-green'>{text}</h3>
    </div>
  )
}

export default PageTop