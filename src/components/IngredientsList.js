import React from 'react';
import Ingredients from './Ingredients';

export default function IngredientsList({ingredient}) {
     const ingredientElement = ingredient.map(ingredient => {
        return <Ingredients key={ingredient.id} {...ingredient}/>
    })
    return (
        <div className="ingredient-grid">
            {ingredientElement}
        </div>
    )
}
