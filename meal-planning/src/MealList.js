import React, {useEffect} from "react";
import Meal from "./Meal";
export default function MealList({mealData}){
    const nutrieans = mealData.nutrients;



    return <main>
        <section className="nutrients">
            <h1>Makra</h1>
            <ul>
                <h3><li>Kalorie: {nutrieans.calories.toFixed(0)}</li></h3>
                <h3><li>Węglowodany: {nutrieans.carbohydrates.toFixed(0)}</li></h3>
                <h3><li>Tłuszcz: {nutrieans.fat.toFixed(0)}</li></h3>
                <h3><li>Białko: {nutrieans.protein.toFixed(0)}</li></h3>
            </ul>
        </section>
        <section className="meals">
            {mealData.meals.map((meal) => {
                return <Meal key={meal.id} meal={meal} />;
            })}
        </section>
    </main>
}