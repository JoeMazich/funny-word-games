import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AnagramSolverScreen from "../../screens/AnagramSolverScreen";
import WordelButHarderScreen from "../../screens/WordelButHarderScreen";
import FourDeeCrosswordScreen from "../../screens/FourDeeCrosswordScreen";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<AnagramSolverScreen />} />
      <Route path="anagram-solver" element={<AnagramSolverScreen />} />
      <Route path="wordel-but-harder" element={<WordelButHarderScreen />} />
      <Route path="4D-crossword" element={<FourDeeCrosswordScreen />} />
    </Routes>
  );
}

export default Router;
