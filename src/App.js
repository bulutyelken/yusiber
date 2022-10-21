import Header from "./components/Header/Header.jsx"
import Hero from "./containers/Hero/Hero.container.jsx";
import {Route,BrowserRouter as Router, Routes} from "react-router-dom"
import QuizForm from "./containers/QuizForm/QuizForm.container.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/quizform" element={<QuizForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
