import Header from "./components/Header/Header.jsx"
import Hero from "./containers/Hero/Hero.container.jsx";
import {Route,BrowserRouter as Router, Routes} from "react-router-dom"
import QuizForm from "./containers/QuizForm/QuizForm.container.jsx";
import Question from "./containers/Question/Question.container.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/quizform" element={<QuizForm />} />
          <Route path="/question" element={<Question />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
