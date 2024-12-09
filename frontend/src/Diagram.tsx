import React from "react";

interface DiagramProps {
  barWeight: number;
  fixedWeight: number;
  dumbbellWeight: number;
}

const Diagram: React.FC<DiagramProps> = ({
  barWeight,
  fixedWeight,
  dumbbellWeight,
}) => {
  return (
    <div className="diagram">
      <h3>Barbell Diagram</h3>
      <div className="bar">
        <div className="dumbbell-weight">{dumbbellWeight.toFixed(1)} lbs</div>
        <div className="weight">{fixedWeight} lbs</div>
        <div className="bar-center">Bar ({barWeight} lbs)</div>
        <div className="weight">{fixedWeight} lbs</div>
        <div className="dumbbell-weight">{dumbbellWeight.toFixed(1)} lbs</div>
      </div>
    </div>
  );
};

export default Diagram;
