import React from "react";

interface DiagramProps {
  barWeight: number;
  fixedWeight: number;
  dumbbellWeight: number;
}

// Helper function to format weights
const formatWeight = (weight: number) => {
  // ensure that the weight is not undefined
  if (weight === undefined) return "0";
  return weight % 1 === 0 ? weight.toString() : weight.toFixed(1);
};

const Diagram: React.FC<DiagramProps> = ({
  barWeight,
  fixedWeight,
  dumbbellWeight,
}) => {
  return (
    <div className="diagram">
      <h3>Barbell Diagram</h3>
      <div className="bar">
        <div className="dumbbell-weight">
          {formatWeight(dumbbellWeight)} lbs
        </div>
        <div className="weight">{formatWeight(fixedWeight)} lbs</div>
        <div className="bar-center">Bar ({formatWeight(barWeight)} lbs)</div>
        <div className="weight">{formatWeight(fixedWeight)} lbs</div>
        <div className="dumbbell-weight">
          {formatWeight(dumbbellWeight)} lbs
        </div>
      </div>
    </div>
  );
};

export default Diagram;
