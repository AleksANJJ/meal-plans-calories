import './App.css';
import { useState } from "react";
import MealPlan from './MealPlan';


function App() {
 
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2500);

  function handleChange(e) {
    setCalories(e.target.value);
  }
 
  function getMealData() {
    fetch (
    `https://api.spoonacular.com/mealplanner/generate?apiKey=c55e9890587c4369b1ffb0a9a18ef5af&timeFrame=day&targetCalories=${calories}`
    )
    .then((response) => response.json())
    .then((data) => {
      setMealData(data);
      console.log(data); 
    })
    .catch(() => {
      console.log("error");
    });


  }

  return (
  <div className="App">
    <section className="controls">
      <input 
      type="number"
      placeholder="Calories (e.g. 2500)" 
      onChange={handleChange}/>
    </section>
    <button onClick={getMealData}>Get Daily Meal Plan</button>
    {mealData && <MealPlan mealData={mealData}/>}

  </div>
  );
}

export default App;