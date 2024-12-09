import React from "react";

interface InputsProps {
  targetWeight: number;
  setTargetWeight: (weight: number) => void;
  fixedWeight: number;
  setFixedWeight: (weight: number) => void;
  warmupSets: number;
  setWarmupSets: (sets: number) => void;
  firstWarmupWeight: number;
  setFirstWarmupWeight: (weight: number) => void;
}

const Inputs: React.FC<InputsProps> = ({
  targetWeight,
  setTargetWeight,
  fixedWeight,
  setFixedWeight,
  warmupSets,
  setWarmupSets,
  firstWarmupWeight,
  setFirstWarmupWeight,
}) => {
  const roundToNearestFive = (value: number) => Math.round(value / 5) * 5;

  const handleNumericChange = (
    value: string,
    setter: (value: number) => void
  ) => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setter(roundToNearestFive(numericValue));
    }
  };

  const handleIncrement = (setter: (value: number) => void, value: number) => {
    setter(value + 5);
  };

  const handleDecrement = (setter: (value: number) => void, value: number) => {
    setter(Math.max(0, value - 5)); // Prevent negative values
  };

  return (
    <div className="inputs">
      <div>
        <label>Target Weight (lbs):</label>
        <div className="input-group">
          <button onClick={() => handleDecrement(setTargetWeight, targetWeight)}>
            -
          </button>
          <input
            type="number"
            value={targetWeight}
            onChange={(e) =>
              handleNumericChange(e.target.value, setTargetWeight)
            }
          />
          <button onClick={() => handleIncrement(setTargetWeight, targetWeight)}>
            +
          </button>
        </div>
      </div>
      <div>
        <label>Fixed Weight on Each Side (lbs):</label>
        <div className="input-group">
          <button onClick={() => handleDecrement(setFixedWeight, fixedWeight)}>
            -
          </button>
          <input
            type="number"
            value={fixedWeight}
            onChange={(e) =>
              handleNumericChange(e.target.value, setFixedWeight)
            }
          />
          <button onClick={() => handleIncrement(setFixedWeight, fixedWeight)}>
            +
          </button>
        </div>
      </div>
      <div>
        <label>Warmup Sets:</label>
        <input
          type="range"
          min="0"
          max="5"
          value={warmupSets}
          onChange={(e) => setWarmupSets(Number(e.target.value))}
        />
        <span>{warmupSets}</span>
      </div>
      <div>
        <label>First Warmup Set Weight (lbs):</label>
        <div className="input-group">
          <button
            onClick={() =>
              handleDecrement(setFirstWarmupWeight, firstWarmupWeight)
            }
          >
            -
          </button>
          <input
            type="number"
            value={firstWarmupWeight}
            onChange={(e) =>
              handleNumericChange(e.target.value, setFirstWarmupWeight)
            }
          />
          <button
            onClick={() =>
              handleIncrement(setFirstWarmupWeight, firstWarmupWeight)
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
