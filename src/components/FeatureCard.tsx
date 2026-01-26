import React from 'react'

interface ICardProps {
  icon: React.ReactNode
  color: string
  text: string
  subtext: string
}

export default function FeatureCard({icon, color, text, subtext}: ICardProps) {
  return (
    <div className='flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-md transition-all'>
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${color}`}>
        {icon}
      </div>
      <h3 className='text-lg font-semibold text-gray-900 mb-2'>
        {text}
      </h3>
      <p className='text-gray-600 text-sm'>{subtext}</p>
    </div>
  )
}
