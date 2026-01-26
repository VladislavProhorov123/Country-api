import React from "react";
import Title from "./Title";
import StepCard from "./StepCard";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4">
        <Title
          text="How It Works"
          subtitle="Follow these simple steps to explore countries quickly and easily"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <StepCard
            step={1}
            text="Choose a Country"
            subtext="Select a country you want to explore from the list or search bar."
          />
          
          <StepCard
            step={2}
            text="View Details"
            subtext="Check detailed statistics, population, region, and attractions for the selected country."
          />
          <StepCard
            step={3}
            text="Save Favorites"
            subtext="Add countries you like to your favorites for quick access anytime."
          />
        </div>
      </div>
    </section>
  );
}
