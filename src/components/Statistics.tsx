import React from 'react'
import PopulationChart from './PopulationChart';
import { stats } from '../data/statisticData';
import StatCard from './StatCard';

export default function Statistics() {
  return (
    <section className='mx-auto max-w-6xl mb-[100px] px-4'>
      <h2 className='mb-12 text-4xl font-semibold'>Global Statistics Overview</h2>
      <div className="grid gap-8 lg:grid-cols-2">
        <PopulationChart />
        <div className="grid gap-6 sm:grid-cols-2">
          {stats.map(item => (
            <StatCard key={item.id} stat={item}/>
          ))}
        </div>
      </div>
    </section>
  )
}
