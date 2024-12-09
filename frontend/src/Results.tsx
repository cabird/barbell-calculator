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

  // Helper function to round down to the nearest 2.5
  const roundDownToNearestTwoPointFive = (value: number) =>
    Math.floor(value / 2.5) * 2.5;

  // Helper function to round to the nearest 5 lbs
  const roundToNearestFive = (value: number) => Math.round(value / 5) * 5;

  // Helper function to format numbers
  const formatWeight = (weight: number) => {
    return weight % 1 === 0 ? weight.toString() : weight.toFixed(1);
  };

  const calculateSets = () => {
    const steps = [];
    const validFirstWarmup = roundToNearestFive(
      Math.min(firstWarmupWeight, targetWeight)
    );

    // Add the first warmup set
    if (warmupSets > 0) {
      steps.push({
        label: `Warmup Set 1`,
        totalWeight: validFirstWarmup,
      });
    }

    // Calculate remaining warmup sets
    const increment = (targetWeight - validFirstWarmup) / warmupSets;
    for (let i = 1; i < warmupSets; i++) {
      const warmupWeight = roundToNearestFive(validFirstWarmup + increment * i);
      steps.push({
        label: `Warmup Set ${i + 1}`,
        totalWeight: warmupWeight,
      });
    }

    // Add the target set
    steps.push({
      label: "Normal Set",
      totalWeight: targetWeight,
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
      <h3>Sets:</h3>
      <ul>
        {sets.map((set, index) => {
          const remainingWeight = set.totalWeight - barWeight - fixedTotal;
          const dumbbellWeight = roundDownToNearestTwoPointFive(
            remainingWeight / 2
          );

          return (
            <li
              key={index}
              onClick={() => handleSetClick(index)}
              style={{
                cursor: "pointer",
                textDecoration: activeSetIndex === index ? "underline" : "none",
                fontWeight: activeSetIndex === index ? "bold" : "normal",
              }}
            >
              {set.label}: {formatWeight(set.totalWeight)} lbs (
              {formatWeight(dumbbellWeight)} lbs)
            </li>
          );
        })}
      </ul>

      <Diagram
        barWeight={barWeight}
        fixedWeight={fixedWeight}
        dumbbellWeight={roundDownToNearestTwoPointFive(
          (sets[activeSetIndex].totalWeight - barWeight - fixedTotal) / 2
        )}
      />
    </div>
  );
};

export default Results;
