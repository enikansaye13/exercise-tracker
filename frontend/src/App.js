import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import EditExercises from './component/EditExercises';
import CreateExercise from './component/CreateExercise';
import CreateUser from './component/CreateUser';
import ExercisesList from './component/ExercisesList';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <br />
        <Route  path="/" exact component={ExercisesList} />
        <Route  path="/edit/:id" component ={EditExercises} />
        <Route  path="/create" component ={CreateExercise} />
        <Route path="/user" exact component ={CreateUser} />

      </Router>
    </div>
  );
}

export default App;
