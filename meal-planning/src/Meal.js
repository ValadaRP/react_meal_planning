import React, {useState, useEffect} from "react";


export default function Meal({meal}){
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=ec32e4c166da492293a046644d6b71e1&includeNutrition=false`
        )
            .then(response => response.json())
            .then(data => {
                setImageUrl(data.image);
            })
            .catch(() => {
                console.log("error");
            })
    }, [meal.id]); // Za kazdym razem kiedy zmieni się id wykonaj ten kod ^^^^^^^^^

    return <article>
        <h1>{meal.title}</h1>
        <img src={imageUrl} alt="recipe"/>
        <ul className="instructions">
            <li>Czas przygotowania: {meal.readyInMinutes} minut</li>
            <li>Ilość porcji: {meal.servings}</li>
        </ul>
        <a href={meal.sourceUrl} target="_blank">Check the Recipe</a>
    </article>
}