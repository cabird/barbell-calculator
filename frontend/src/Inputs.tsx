import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

interface InputsProps {
  targetWeight: number;
  setTargetWeight: (weight: number) => void;
  fixedWeight: number;
  setFixedWeight: (weight: number) => void;
  warmupSets: number;
  setWarmupSets: (sets: number) => void;
  firstWarmupWeight: number;
  setFirstWarmupWeight: (weight: number) => void;
  barWeight: number;
  setBarWeight: (weight: number) => void;
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
  barWeight,
  setBarWeight,
}) => {
  const roundToNearestFive = (value: number) => Math.round(value / 5) * 5;

  const handleIncrement = (setter: (value: number) => void, value: number) => {
    setter(roundToNearestFive(value + 5));
  };

  const handleDecrement = (setter: (value: number) => void, value: number) => {
    setter(Math.max(0, roundToNearestFive(value - 5))); // Prevent negative values
  };

  return (
    <div className="inputs">
      <div>
        <label>Target Weight (lbs):</label>
        <div className="input-group">
          <button
            onClick={() => handleDecrement(setTargetWeight, targetWeight)}
            aria-label="Decrease Target Weight"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="weight-display">{targetWeight} lbs</span>
          <button
            onClick={() => handleIncrement(setTargetWeight, targetWeight)}
            aria-label="Increase Target Weight"
          >
            <FontAwesomeIcon icon={faPlus} />
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
        <span className="weight-display">{warmupSets}</span>
      </div>
      <div>
        <label>First Warmup Set Weight (lbs):</label>
        <div className="input-group">
          <button
            onClick={() =>
              handleDecrement(setFirstWarmupWeight, firstWarmupWeight)
            }
            aria-label="Decrease First Warmup Set Weight"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="weight-display">{firstWarmupWeight} lbs</span>
          <button
            onClick={() =>
              handleIncrement(setFirstWarmupWeight, firstWarmupWeight)
            }
            aria-label="Increase First Warmup Set Weight"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <div>
        <label>Bar Weight (lbs):</label>
        <div className="input-group">
          <button
            onClick={() => handleDecrement(setBarWeight, barWeight)}
            aria-label="Decrease Bar Weight"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="weight-display">{barWeight} lbs</span>
          <button
            onClick={() => handleIncrement(setBarWeight, barWeight)}
            aria-label="Increase Bar Weight"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <div>
        <label>Fixed Weight on Each Side (lbs):</label>
        <div className="input-group">
          <button
            onClick={() => handleDecrement(setFixedWeight, fixedWeight)}
            aria-label="Decrease Fixed Weight"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="weight-display">{fixedWeight} lbs</span>
          <button
            onClick={() => handleIncrement(setFixedWeight, fixedWeight)}
            aria-label="Increase Fixed Weight"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
