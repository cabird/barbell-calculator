import React, { useState, useEffect } from "react";
import Inputs from "./Inputs";
import Results from "./Results";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const App: React.FC = () => {
  const [targetWeight, setTargetWeight] = useState<number>(() => {
    const saved = localStorage.getItem("targetWeight");
    return saved ? parseFloat(saved) : 135;
  });
  const [fixedWeight, setFixedWeight] = useState<number>(() => {
    const saved = localStorage.getItem("fixedWeight");
    return saved ? parseFloat(saved) : 10;
  });
  const [warmupSets, setWarmupSets] = useState<number>(() => {
    const saved = localStorage.getItem("warmupSets");
    return saved ? parseInt(saved, 10) : 3;
  });
  const [firstWarmupWeight, setFirstWarmupWeight] = useState<number>(() => {
    const saved = localStorage.getItem("firstWarmupWeight");
    return saved ? parseFloat(saved) : 65;
  });

  const resetInputs = () => {
    setTargetWeight(135);
    setFixedWeight(10);
    setWarmupSets(3);
    setFirstWarmupWeight(65);
    localStorage.clear();
  };

  useEffect(() => {
    localStorage.setItem("targetWeight", targetWeight.toString());
    localStorage.setItem("fixedWeight", fixedWeight.toString());
    localStorage.setItem("warmupSets", warmupSets.toString());
    localStorage.setItem("firstWarmupWeight", firstWarmupWeight.toString());
  }, [targetWeight, fixedWeight, warmupSets, firstWarmupWeight]);

  return (
    <div className="app">
      <h1>Barbell Weight Calculator</h1>
      <Inputs
        targetWeight={targetWeight}
        setTargetWeight={setTargetWeight}
        fixedWeight={fixedWeight}
        setFixedWeight={setFixedWeight}
        warmupSets={warmupSets}
        setWarmupSets={setWarmupSets}
        firstWarmupWeight={firstWarmupWeight}
        setFirstWarmupWeight={setFirstWarmupWeight}
      />
      <Results
        targetWeight={targetWeight}
        fixedWeight={fixedWeight}
        warmupSets={warmupSets}
        firstWarmupWeight={firstWarmupWeight}
      />
      <button className="reset-button" onClick={resetInputs}>
        <FontAwesomeIcon icon={faTrash} /> Reset
      </button>
    </div>
  );
};

export default App;
