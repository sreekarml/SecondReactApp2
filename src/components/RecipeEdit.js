import React , { useContext } from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import { RecipeContext } from './App';

export default function RecipeEdit({recipe}) {

   
    const { handleRecipeChange ,handleRecipeSelect} = useContext( RecipeContext );

    function handleChange(changes){
        handleRecipeChange(recipe.id, {...recipe, ...changes});
    }

    function handleIngredientChange(id,ingredient){
        const newIngredients = [...recipe.ingredients];
        const index = newIngredients.findIndex(i  => i.id === id);
        newIngredients[index] = ingredient;
        handleChange({ingredients: newIngredients});
    }

    function hadleDeleteIngredient(id){
        handleChange({ingredients: recipe.ingredients.filter(i => i.id !== id)})
    }

    function handleAddIngredient(){
        const newIngredient = {
            id: Date.now().toString(),
            name:'',
            amount:''
        }

        handleChange({ingredients: [...recipe.ingredients,newIngredient]});

    }

    return (
        <div className="recipe_edit">
            <div className="r-e_remove-button-container" >
                <button 
                className="btn r-e_remove-button"
                onClick={() => handleRecipeSelect(undefined) }
                >&times;</button>
            </div>
            <div className="r-e_details-grid">
                <label
                 htmlFor="name"
                 className="r-e_edit-label"
                 >Name</label>
                <input
                 type="text" 
                 name="name"
                  id="name"
                  value={recipe.name}
                  onChange={e => handleChange({name: e.target.value})}
                  className="r-e_input"/>
                <label 
                htmlFor="cookTime"
                className="r-e_edit-label"
                >Cook Time</label>
                <input
                className="r-e_input"
                 type="text" 
                 name="cookTime"
                 value={recipe.cookTime}
                 onChange={e => handleChange({cookTime: e.target.value})}
                 id="cookTime"/>
                <label 
                htmlFor="serving"
                className="r-e_edit-label"
                >Serving</label>
                <input 
                type="text"
                 min="1" 
                 name="serving" 
                 id="serving"
                 value={recipe.servings}
                 onChange={e => handleChange({servings: parseInt(e.target.value)||''})}
                 className="r-e_input"
                 />
                <label
                 htmlFor="instructions"
                 className="r-e_edit-label"
                 >Instructions</label>
                <textarea 
                name="instructions" 
                id="instructions" 
                value={recipe.instructions}
                onChange={e => handleChange({instructions: e.target.value})}
                className="r-e_input"
                />
            </div>
            <br/>
            <div>
                <label className="r-e_edit-label">Ingredients</label>
                <div className="r-e_ingredient-grid">
                    <div>Name</div>
                    <div>Amount</div>
                    <div></div>
                    {recipe.ingredients.map(ingredient => (
                            <RecipeIngredientEdit 
                            key={ingredient.id}
                            ingredient={ingredient}
                            hadleDeleteIngredient={hadleDeleteIngredient}
                            handleIngredientChange = {handleIngredientChange}
                            />
                    ))}
                </div>
                <div className="r-e_add-ingredient-button-container">
                    <button 
                    className="btn btn--primary"
                    onClick={() => handleAddIngredient()}
                    >add Ingredients</button>
                </div>
            </div>
        </div>
    )
}
