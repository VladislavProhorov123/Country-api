import React from "react";
import Title from "./Title";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4">
        <Title
          text="Why choose our app?"
          subtitle="Everything you need to explore countries in one place"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
          <FeatureCard
            icon={<span className="text-white text-xl">🌍</span>}
            color="bg-blue-500"
            text="All Countries"
            subtext="Access data for every country in the world"
          />
          <FeatureCard
            icon={<span className="text-white text-xl">🌍</span>}
            color="bg-blue-500"
            text="All Countries"
            subtext="Access data for every country in the world"
          />
          <FeatureCard
            icon={<span className="text-white text-xl">🌍</span>}
            color="bg-blue-500"
            text="All Countries"
            subtext="Access data for every country in the world"
          />
        </div>
      </div>
    </section>
  );
}
