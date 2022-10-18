import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { pageNames } from "../../_constants/pageConstants";
import AnagramSolverScreen from "../../screens/AnagramSolverScreen";
import WordelButHarderScreen from "../../screens/WordelButHarderScreen";
import FourDeeCrosswordScreen from "../../screens/FourDeeCrosswordScreen";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<AnagramSolverScreen />} />
      <Route path={pageNames["anagram"].route} element={<AnagramSolverScreen />} />
      <Route path={pageNames["wordel"].route} element={<WordelButHarderScreen />} />
      <Route path={pageNames["fourDee"].route} element={<FourDeeCrosswordScreen />} />
    </Routes>
  );
}

export default Router;
