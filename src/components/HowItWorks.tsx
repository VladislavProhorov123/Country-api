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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 relative">
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
