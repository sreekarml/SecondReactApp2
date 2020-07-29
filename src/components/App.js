import React , {useState,useEffect} from 'react';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import '../css/app.css'


export const RecipeContext = React.createContext();

function App() {

  const LOCAL_STORAGE_KEY = 'cookingWithReact.recipe';

  const[selectedRecipeId,setSelectedRecipe] = useState(); 
  const [recipes, setRecipes] = useState(SampleRecipies);

  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);

  console.log("selected recipe is -" + JSON.stringify(selectedRecipe));

  const recipiContextValues = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  useEffect(() => {
    console.log("testing to chck load");
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(recipeJSON != null ) setRecipes(JSON.parse(recipeJSON));
   },[]) 

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes));
  },[recipes])



  function handleRecipeChange(id,recipe){
     var newRecipes =  [...recipes];
     var index = newRecipes.findIndex(r => r.id === id);
     newRecipes[index] = recipe;
     setRecipes(newRecipes);
  }

  function handleRecipeSelect(id){
    setSelectedRecipe(id);
  }

  function handleRecipeAdd(){
    console.log("it came inside");
    const newRecipe = {
      id:Date.now().toString(),
      name : '',
      servings: 1,
      cookTime: '',
      instructions: '1.put the sant\n2.put the chilli\n3.put the oil',
      ingredients:[
        {
          id: 1,
          name: 'plain chicken',
          amount: "100"
        }
      ] 
    }


    console.log("before adding -"+ recipes);
    setRecipes([...recipes,newRecipe]);
    console.log("after adding -"+ recipes);
    handleRecipeSelect(newRecipe.id);
}

function handleRecipeDelete(id){
  console.log("id before deleting = "+ id);
  setRecipes(recipes.filter(recipe => recipe.id !== id));
  console.log("id after deleting = "+ id);
}

  return (
    <RecipeContext.Provider value={recipiContextValues}>
      <RecipeList 
        recipes1={recipes} 
        // handleRecipeAdd={handleRecipeAdd}
       // handleRecipeDelete= {handleRecipeDelete}
      />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
    </RecipeContext.Provider>

  )
}


const SampleRecipies = [
  {
    id: 1,
    name : 'plain chicken',
    servings: 3,
    cookTime: '1.45',
    instructions: '1.put the sant\n2.put the chilli\n3.put the oil',
    ingredients:[
      {
        id: 1,
        name: 'plain chicken',
        amount: "100"
      },
      {
        id: 2,
        name: 'chilli powder',
        amount: "50"
      }
    ] 
  },{
    id: 2,
    name : 'plain fish',
    servings: 1,
    cookTime: '1.30',
    instructions: '1.put the salt\n2.put the chilli\n3.put the oil',
    ingredients:[
      {
        id: 1,
        name: 'plain fish',
        amount: "100"
      },
      {
        id: 2,
        name: 'chilli powder',
        amount: "50"
      }
    ] 
  }
];

export default App;
