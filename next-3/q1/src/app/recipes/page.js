import Image from "next/image";
import {getData} from "../../utils/actions"
import RecipesCard from "@/components/recipesCard";
export default async function Home() {
    const recipes = await getData("https://dummyjson.com/recipes")
   console.log(recipes.recipes);
   
    
  return (
    <div className=" flex flex-col items-center justify-center">
      <p className="text-center mt-5 text-lg font-semibold mb-8">recipes</p> 
             
      <div className=" flex w-3/4 px-3 flex-wrap gap-12 justify-center">
        {recipes.recipes.map((item,i)=>(
          <RecipesCard key={i} image={item.image} name={item.name} ingredients={item.ingredients} instructions={item.instructions} id={item.id}/>
             
        ))}
      </div>
    </div>

  );
}