import React ,{useContext} from 'react'
import IngredientsList from './IngredientsList';
import { RecipeContext } from './App';

export default function Recipe(props) {

    const { handleRecipeDelete,handleRecipeSelect } = useContext(RecipeContext);

    const {
        id,
        name,
        cookTime,
        servings,
        instructions,
        ingredients
        // handleRecipeDelete
    } = props

    return (
        <div className="recipe">
            <div className="recipe_header">
                <h3 className="recipe_title">{name}</h3>
                <div className="recipe-row">
                    <button className="btn btn--primary mg-1" onClick={() => handleRecipeSelect(id)}>Edit</button>
                    <button className="btn btn--danger" onClick={() => handleRecipeDelete(id) }>Delete</button>
                </div>
            </div>
            <div className="recipe_row">
                <span className="recipe_label">Cooking Time:</span>
                <span className="recipe_value">{cookTime}</span>
            </div>
            <div className="recipe_row">
                <span className="recipe_label">Serving:</span>
                <span className="recipe-value">{servings}</span>
            </div>
            <div className="recipe_row">
                <span className="recipe_label">Instructions:</span>
                <div className="recipe_value recipe_value--indent recipe_instructions">
                   <span>{instructions} </span> 
                </div>
            </div>
            <div className="recipe_row">
                <span className="recipe_label">ingredients:</span>
                <div className="recipe_value recipe_value--intendent">
                <IngredientsList ingredient={ingredients} />
                </div>
            </div>
        </div>  
    )
}
