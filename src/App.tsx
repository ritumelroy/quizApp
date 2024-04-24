import QuizMain from "./components/QuizMain";
import Selection from "./components/Selection";

import "./App.scss";
import "./fonts/Rubik-VariableFont_wght.ttf";
import "./fonts/Rubik-Italic-VariableFont_wght.ttf";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/quizApp" element={<Selection />} />
        <Route path="/quizApp/:id" element={<QuizMain />} />
      </Routes>
    </>
  );
}

export default App;
