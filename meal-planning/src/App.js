import React, {useState} from "react";
import MealList from "./MealList";
function App() {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

    function handleChange(e){
        setCalories(e.target.value);
    }



    function getMealData(){
        fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=ec32e4c166da492293a046644d6b71e1&timeFrame=day&targetCalories=${calories}`)
            .then(res => res.json())
            .then(data => {
                setMealData(data);
                console.log(data);
            })
            .catch(() =>{
                console.log("error");
            })
    }

    return <div className="App">
        <section className="controls">
            <input type="numer" placeholder="Calories" onChange={handleChange}/>
        </section>
        <button onClick={getMealData}>Sprawdz dzienny plan!</button>
        {mealData && <MealList mealList={mealData}/>}
    </div>;
}

export default App;