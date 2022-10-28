import Header from "./components/Header/Header.jsx";
import Hero from "./containers/Hero/Hero.container.jsx";
import { Route, Routes } from "react-router-dom";
import QuizForm from "./containers/QuizForm/QuizForm.container.jsx";
import Question from "./containers/Question/Question.container.jsx";
import Hakkimizda from "./containers/Hakkimizda/Hakkimizda.container.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" index element={<Hero />} />
        <Route path="/quizform" element={<QuizForm />} />
        <Route path="/question" element={<Question />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
      </Routes>
    </div>
  );
}

export default App;
