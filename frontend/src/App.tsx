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
  const [barWeight, setBarWeight] = useState<number>(() => {
    const saved = localStorage.getItem("barWeight");
    return saved ? parseFloat(saved) : 45;
  });

  const resetInputs = () => {
    setTargetWeight(135);
    setFixedWeight(10);
    setWarmupSets(3);
    setFirstWarmupWeight(65);
    setBarWeight(45);
    localStorage.clear();
  };

  useEffect(() => {
    localStorage.setItem("targetWeight", targetWeight.toString());
    localStorage.setItem("fixedWeight", fixedWeight.toString());
    localStorage.setItem("warmupSets", warmupSets.toString());
    localStorage.setItem("firstWarmupWeight", firstWarmupWeight.toString());
    localStorage.setItem("barWeight", barWeight.toString());
  }, [targetWeight, fixedWeight, warmupSets, firstWarmupWeight, barWeight]);

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
        barWeight={barWeight}
        setBarWeight={setBarWeight}
      />
      <Results
        targetWeight={targetWeight}
        fixedWeight={fixedWeight}
        warmupSets={warmupSets}
        firstWarmupWeight={firstWarmupWeight}
        barWeight={barWeight}
      />
      <button className="reset-button" onClick={resetInputs}>
        <FontAwesomeIcon icon={faTrash} /> Reset
      </button>
    </div>
  );
};

export default App;
