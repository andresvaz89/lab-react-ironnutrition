import React from 'react';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';

function App(props) {
  return (
    <div>
      <h1>
        <strong>IronNutrition</strong>
      </h1>

      {foods.map((food) => {
        return <FoodBox food={food} />;
      })}
    </div>
  );
}

export default App;
