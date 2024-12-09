import React, { useState } from "react";
import Diagram from "./Diagram";

interface ResultsProps {
  targetWeight: number;
  fixedWeight: number;
  warmupSets: number;
  firstWarmupWeight: number;
}

const Results: React.FC<ResultsProps> = ({
  targetWeight,
  fixedWeight,
  warmupSets,
  firstWarmupWeight,
}) => {
  const barWeight = 45;
  const fixedTotal = fixedWeight * 2; // Fixed weight on both sides

  // Ensure weights are multiples of 5 lbs
  const roundToNearestFive = (weight: number) => Math.round(weight / 5) * 5;

  const remainingWeight = roundToNearestFive(targetWeight - barWeight - fixedTotal);
  const dumbbellWeight = remainingWeight / 2;

  const calculateSets = () => {
    const steps = [];
    const validFirstWarmup = roundToNearestFive(
      Math.min(firstWarmupWeight, targetWeight)
    );

    // Add the first warmup set
    if (warmupSets > 0) {
      steps.push({
        label: `Warmup Set 1`,
        weight: validFirstWarmup,
      });
    }

    // Calculate remaining warmup sets
    const increment = (targetWeight - validFirstWarmup) / warmupSets;
    for (let i = 1; i < warmupSets; i++) {
      const warmupWeight = roundToNearestFive(validFirstWarmup + increment * i);
      steps.push({
        label: `Warmup Set ${i + 1}`,
        weight: warmupWeight,
      });
    }

    // Add the target set
    steps.push({
      label: "Normal Set",
      weight: targetWeight,
    });

    return steps;
  };

  const sets = calculateSets();
  const [activeSetIndex, setActiveSetIndex] = useState<number>(0);

  const handleSetClick = (index: number) => {
    setActiveSetIndex(index);
  };

  return (
    <div className="results">
      <h2>Results</h2>
      <h3>Sets:</h3>
      <ul>
        {sets.map((set, index) => (
          <li
            key={index}
            onClick={() => handleSetClick(index)}
            style={{
              cursor: "pointer",
              textDecoration: activeSetIndex === index ? "underline" : "none",
              fontWeight: activeSetIndex === index ? "bold" : "normal",
            }}
          >
            {set.label}: {set.weight.toFixed(1)} lbs
          </li>
        ))}
      </ul>

      <Diagram
        barWeight={barWeight}
        fixedWeight={fixedWeight}
        dumbbellWeight={roundToNearestFive(
          (sets[activeSetIndex].weight - barWeight - fixedTotal) / 2
        )}
      />
    </div>
  );
};

export default Results;
