import React from 'react'

export default function RecipeIngredientEdit(props) {


    const {
        ingredient,
        handleIngredientChange,
        hadleDeleteIngredient
    } = props

  function onIngredientChange(change){
        handleIngredientChange(ingredient.id,{...ingredient,...change});   
    }

    return (
        <>
            <input
             className="r-e_input" 
             value={ingredient.name} 
             type="text"
             onChange= {e => onIngredientChange({name:e.target.value})}
             />
            <input className="r-e_input"
             value={ingredient.amount} 
             type="text"
             onChange= {e => onIngredientChange({amount:e.target.value})}
             />
            <button
             className=" btn btn--danger"
             onClick={() => hadleDeleteIngredient(ingredient.id)} 
             >&times;</button>
        </>
    )
}
