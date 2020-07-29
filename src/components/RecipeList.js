import React ,{ useContext } from 'react';
import Recipe from './Recipe';
import { RecipeContext } from './App';

export default function RecipeList({recipes1}) {

    const { handleRecipeAdd } = useContext(RecipeContext);

    return (
        <div className="recipe-list">
            <div>
                {
                        recipes1.map(recipes => {
                            return ( 
                                <Recipe 
                                key={recipes.id}
                                // handleRecipeDelete = {handleRecipeDelete}
                                {...recipes}>  
                                </Recipe>
                            )
                        })
                }  
            </div>
            <div className="recipe-list__add-recipe-btn-container">
                     <button 
                     className="btn btn--primary" 
                     onClick={ handleRecipeAdd }
                     >ADD RECIPE</button>
            </div>
        </div>
    )
}
