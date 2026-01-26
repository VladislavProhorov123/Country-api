import React from "react";
import Title from "./Title";
import FeatureCard from "./FeatureCard";
import { Earth, PieChart, Star } from "lucide-react";


export default function Features() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4">
        <Title
          text="Why choose our app to explore countries?"
          subtitle="Our app gives you access to detailed information about every country in the world. Learn about population, culture, attractions, and save your favorites for quick reference."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 ">
          <FeatureCard
            icon={<span className="text-green-700 text-xl"><Earth /></span>}
            color="bg-green-400"
            text="All Countries"
            subtext="Explore information about all countries in the world in a single app. From geography to population and culture, get everything you need to know at a glance."
          />
          <FeatureCard
            icon={<span className="text-blue-700 text-xl"><Star /></span>}
            color="bg-blue-400"
            text="Save Favorites"
            subtext="Keep track of your favorite countries by saving them for quick access later. Perfect for planning trips or just keeping notes on countries you find interesting."
          />
          <FeatureCard
            icon={<span className="text-red-700 text-xl"><PieChart /></span>}
            color="bg-red-400"
            text="Detailed Stats"
            subtext="Get detailed statistics for every country, including population, region, capital city, and other key facts. Useful for research, study, or just satisfying your curiosity."
          />
        </div>
      </div>
    </section>
  );
}
