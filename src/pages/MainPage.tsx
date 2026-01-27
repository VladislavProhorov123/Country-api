import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import CountriesPreview from '../components/CountriesPreview'
import Statistics from '../components/Statistics'

export default function MainPage() {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <CountriesPreview />
      <Statistics />
    </div>
  )
}
