import React from 'react'

interface ITitleProps {
  text: string
  subtitle: string
}

export default function Title({text, subtitle}: ITitleProps) {
  return (
    <div className='mt-[40px] mb-[40px] flex  flex-col items-center text-center'>
      <h2 className='text-4xl font-bold text-gray-900'>{text}</h2>
      <p className='mt-2 max-w-xl text-lg text-gray-600'>{subtitle}</p>
    </div>
  )
}
